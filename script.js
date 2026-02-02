// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBC1qHdevZZN3-UywmD9Eeu6yMbIHKqGSg",
  authDomain: "sage-chatbot-56798.firebaseapp.com",
  projectId: "sage-chatbot-56798",
  storageBucket: "sage-chatbot-56798.appspot.com",
  messagingSenderId: "79253319999",
  appId: "1:79253319999:web:55755163f173e671c9238a",
  measurementId: "G-NBW4FPW4Q9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Launch chatbot with fresh session for new users
function launchChatbot(name, email, isNew = false) {
  let botUrl = `https://landbot.online/v3/H-3312256-S5QMAUDNN13Y2LL7/index.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
  
  if (isNew) {
    const sessionId = Date.now(); // unique session
    botUrl += `&session=${sessionId}&newUser=true`;
  }

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("chatbot").style.display = "block";
  document.getElementById("botFrame").src = botUrl;
}

// Save user profile
function saveUserToFirestore(user) {
  db.collection("users").doc(user.uid).set({
    name: user.displayName || "Anonymous",
    email: user.email,
    provider: user.providerData[0].providerId,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
}

// Signup
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      const user = result.user;
      saveUserToFirestore(user);
      launchChatbot(name || "Anonymous", email, true); // newUser = true
    })
    .catch(error => {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please log in instead.");
      } else {
        alert("Signup failed: " + error.message);
      }
    });
}

// Login
function login() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      const user = result.user;
      saveUserToFirestore(user);
      launchChatbot(name || user.displayName || "Anonymous", email);
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
}

// Google login
function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      saveUserToFirestore(user);
      launchChatbot(user.displayName || "Anonymous", user.email);
    })
    .catch(error => console.error("Google login failed:", error));
}

// GitHub login
function loginWithGitHub() {
  const provider = new firebase.auth.GithubAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      saveUserToFirestore(user);
      launchChatbot(user.displayName || "GitHub User", user.email);
    })
    .catch(error => console.error("GitHub login failed:", error));
}

// Password reset
function resetPassword() {
  const email = document.getElementById("email").value;
  if (!email) {
    alert("Please enter your email to reset password");
    return;
  }
  auth.sendPasswordResetEmail(email)
    .then(() => alert("Password reset email sent to " + email))
    .catch(error => alert("Error sending reset email: " + error.message));
}

// Logout
function logout() {
  auth.signOut().then(() => {
    document.getElementById("chatbot").style.display = "none";
    document.getElementById("loginBox").style.display = "flex";
  });
}


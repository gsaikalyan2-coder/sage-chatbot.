# Sage Chatbot

An empathetic, student-friendly chatbot built with Landbot and Firebase, designed to support academic onboarding and mentoring.  
This project combines a modern UI with secure backend integration to give students a smooth, supportive experience.



## ✨ Features
- Login and onboarding flow with Firebase Authentication
- Chatbot interface powered by Landbot (embedded via iframe)
- Secure chat history storage using Firebase Firestore
- Responsive UI with modern design and avatars
- GitHub Actions for automatic deployment to Firebase Hosting

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend & Hosting:** Firebase Hosting, Firestore, Authentication  
- **Chatbot Engine:** Landbot  
- **CI/CD:** GitHub Actions  

---
## 📋 Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Firebase CLI](https://firebase.google.com/docs/cli)  
  Install via:
  ```bash
  npm install -g firebase-tools

  ⚙️ Installation
1. Clone the repository
bash
git clone https://github.com/gsaikalyan2-coder/sage-chatbot.git
cd sage-chatbot
2. Add your frontend files
Place your index.html, style.css, and script.js inside the public/ folder.

3. Connect to Firebase
Log in to Firebase:

bash
firebase login
Initialize hosting:

bash
firebase init hosting
4. Deploy to Firebase
bash
firebase deploy
5. Automatic Deployment (Optional)
If GitHub Actions is configured, simply push your changes:

bash
git add .
git commit -m "Update chatbot UI"
git push origin main
GitHub Actions will auto-deploy to Firebase Hosting.

🔗 Live Demo
Once deployed, your site will be available at:

Code
https://sage-chatbot.web.app
(or your custom domain if configured)

📄 License
This project is licensed under the MIT License.
Feel free to use, modify, and distribute with attribution.

🙌 Acknowledgements
Firebase for hosting and authentication

Landbot for chatbot integration

GitHub Actions for seamless CI/CD



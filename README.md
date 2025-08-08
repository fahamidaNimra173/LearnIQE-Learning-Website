# LearnIQ

#EduManage – MERN Based Educational Management Platform
<img src="https://i.ibb.co/ZphBpv8B/Screenshot-2025-08-08-183218.png">

A full-featured educational management platform built with the MERN stack that enables institutions to offer courses, teachers to create and manage classes, and students to enroll, pay, and track their learning progress — all within a secure, responsive, and interactive environment.
## 🚀 Technologies Used
- **MongoDB** – Database
- **Express.js** – Backend framework
- **React.js** – Frontend library
- **Node.js** – Backend runtime
- **Firebase Authentication** – Login/Registration
- **TanStack Query** – Data fetching
- **JWT** – Secure authentication
- **Stripe** – Payment gateway
- **React Hook Form** – Form handling
- **Framer Motion/AOS** – Animations

---

## ✨ Core Features
- Responsive design for mobile, tablet, and desktop
- Role-based dashboards for Admin, Teacher, and Student
- Class enrollment and payment system with Stripe
- Teacher application and approval workflow
- CRUD operations with toast notifications
- Class progress tracking and assignment management
- Feedback system with rating component
- Secure authentication with JWT & Firebase
- Pagination and search functionality
- Environment variables for sensitive credentials

---

## 📦 Dependencies
- `react`, `react-dom`, `react-router-dom`
- `axios` & `axios-interceptor`
- `react-hook-form`
- `@tanstack/react-query`
- `firebase`
- `jsonwebtoken`
- `stripe` & `react-stripe-js`
- `sweetalert2` / `react-toastify`
- `framer-motion` / `aos`
- `jspdf`

---
# How to Run Locally ➜

1. ➜ **Clone the repositories**  
   ```bash
   git clone <https://github.com/fahamidaNimra173/LearnIQE-Learning-Website>
   git clone <https://github.com/fahamidaNimra173/LearnIQ-Elearning-Serversidee>

➜ Install dependencies

bash
Copy code
# In one terminal: install client dependencies
cd client
npm install

# In another terminal: install server dependencies
cd ../server
npm install
➜ Set up environment variables

Create a .env file in both the client and server folders.

Replace placeholder values with your real keys (do not commit .env to GitHub).

Example server/.env

env
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
Example client/.env

env
Copy code
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

➜ Run the server

bash
Copy code
# from the server folder
cd server
npm run dev


➜ Run the client

bash
Copy code
# from the client folder
cd client
npm start


Open the app



If the server and client are on different ports, ensure REACT_APP_API_URL (client) points to your server.




Live Links & Resources
Live Site: (https://edu-web-client.firebaseapp.com/)

Admin Username: ahad@gmail.com

Admin Password: Ahad123


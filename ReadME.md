# ⚡ TCAnalyzer: Smart Time & Space Complexity Analyzer

> **“Code faster. Think deeper. Analyze smarter.”**

TCAnalyzer is a full-stack web application built to **demystify the performance of algorithms**.  
It provides developers, students, and coding enthusiasts with **instant, clear analysis of time and space complexity** directly in the browser — making it both a **learning tool** and a **developer assistant**.

🔗 **Live Demo:** [TCAnalyzer on Render](https://your-app-name.onrender.com)  
🧠 **Stack:** React (Vite) · Node.js · Express · MongoDB · JWT Auth · Tailwind CSS

---

## 🧩 Core Functionality

### 🤖 Instant Complexity Analysis
- Instantly compute **Big-O notation** for **time** and **space** complexity.
- Get a **plain-English explanation** of the reasoning and contributing code patterns.

### 🌐 Multi-Language Support
- Supports **JavaScript**, **Python**, **C++**, and **Java** out of the box.

### 🔐 Secure Authentication
- Fully integrated **JWT-based authentication** for registration, login, and session management.
- Passwords are safely hashed using **bcrypt.js** before storage.

### 📈 Personalized History Tracking
- Users can view all previous analyses in a **dedicated history dashboard**.
- Each analysis includes **code snippets, complexity breakdown, and explanations**.

### ⚙️ Profile Customization
- Manage your profile with editable fields for **LeetCode ID**, **Codeforces ID**, and other settings.

---

## 🎯 Why TCAnalyzer?

### 👨‍🎓 For Students
An **interactive tutor** for understanding how different code structures impact runtime and memory.

### 💼 For Interview Prep
A **companion tool** to practice and verify your solutions for platforms like **LeetCode** and **Codeforces**.

### 💻 For Developers
A **quick performance sanity check** when optimizing algorithms or refactoring functions.

---

## 🧠 Tech Stack Overview

| Layer | Technology | Description |
|:------|:------------|:-------------|
| **Frontend** | React (Vite) + Tailwind CSS | Modern, responsive, component-based UI |
| **Backend** | Node.js + Express.js | RESTful API architecture with JWT auth |
| **Database** | MongoDB + Mongoose | Schema-based modeling for users & analyses |
| **Authentication** | JWT + bcrypt.js | Secure token-based login system |
| **State Management** | React Context API | Global state for user session & data |
| **Deployment** | Render | Backend → Web Service · Frontend → Static Site |

---

## 🧱 Architecture

```
TCAnalyzer/
│
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── api/
│   ├── public/
│   └── dist/              # Production build output
│
├── server/                # Backend (Node + Express)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── db.js
│   ├── authController.js
│   └── server.js
│
└── README.md
```

---

## ⚙️ Local Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/TCAnalyzer.git
cd TCAnalyzer
```

---

### 2️⃣ Backend Setup
```bash
cd server
npm install
```

Create a `.env` file inside `/server`:
```env
MONGO_DB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

Run the backend:
```bash
npm start
```
The server will run on [http://localhost:5000](http://localhost:5000)

---

### 3️⃣ Frontend Setup
```bash
cd ../client
npm install
```

Create a `.env` file inside `/client`:
```env
VITE_API_BASE_URL=http://localhost:5000
```

Run the frontend:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

---

## ☁️ Deployment Guide (Render)

### 🔹 Backend Deployment
1. Push your code to GitHub.
2. On [Render Dashboard](https://render.com):
   - **New → Web Service**
   - Connect your repo.
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
3. Add environment variables:
   ```env
   MONGO_DB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=production
   ```
4. Deploy — your backend URL will look like:  
   `https://tcanalyzer-api.onrender.com`

---

### 🔹 Frontend Deployment
1. Create **New → Static Site** on Render.
2. **Root Directory:** `client`
3. **Build Command:** `npm install && npm run build`
4. **Publish Directory:** `dist`
5. Add env var:
   ```env
   VITE_API_BASE_URL=https://tcanalyzer-api.onrender.com
   ```
6. Add a `_redirects` file in `/client/public`:
   ```
   /* /index.html 200
   ```
7. Deploy — your frontend URL might look like:  
   `https://tcanalyzer.onrender.com`

---

### 🔹 CORS Configuration
In `server.js`:
```js
import cors from "cors";
app.use(cors({
  origin: process.env.CLIENT_URL || "*"
}));
```

Optionally add in `.env`:
```env
CLIENT_URL=https://tcanalyzer.onrender.com
```

---

## 🔧 Environment Variables Summary

| Variable | Description |
|-----------|-------------|
| `MONGO_DB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for signing JWTs |
| `PORT` | Server port (default 5000) |
| `CLIENT_URL` | Frontend domain for CORS |
| `VITE_API_BASE_URL` | Backend API endpoint (for frontend) |

---

## 🧩 Demonstrated Expertise

### 💪 Full-Stack MERN Development
- Modular Express API architecture with clean separation of controllers, routes, and middleware.
- React frontend using Vite for lightning-fast development and builds.

### 🔒 Secure Auth & State Management
- Encrypted credentials using bcrypt.
- Stateless JWT-based sessions.
- Global auth context in React for seamless login state management.

### 🎨 Modern Frontend Design
- Built with **Tailwind CSS** for a responsive, custom look.
- Intuitive layout with dynamic content rendering and clean UX.

### ⚙️ DevOps & Cloud
- CI/CD-ready structure with **Render** deployment.
- `.env`-based environment management for dev and prod.
- Works seamlessly with **MongoDB Atlas** for persistent cloud data.

---

## 🧾 License
MIT License © 2025 [Your Name]

---

## 🙌 Acknowledgements
- [Render](https://render.com) — cloud hosting  
- [MongoDB Atlas](https://www.mongodb.com/atlas) — database  
- [Vite](https://vitejs.dev) — frontend tooling  
- [Tailwind CSS](https://tailwindcss.com) — modern styling  
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs) & [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

> 💡 *TCAnalyzer bridges the gap between writing code and understanding it — making algorithm analysis accessible to everyone.*

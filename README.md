# ✈️ TripSync — Collaborative Travel Planning Platform

**TripSync** is a production-ready, full-stack web application architected to simplify collaborative trip coordination and optimize traveler networking. Developed using the **MERN stack**, this platform demonstrates engineering principles across real-time data synchronization, algorithmic matchmaking, and secure cloud infrastructure.

![Live Status](https://img.shields.io/badge/Status-Live-success)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue)

### 🌍 Live Deployment
* **Frontend Interface:** [Visit the Live Site](https://moonlit-arithmetic-1255d7.netlify.app/)
* **Backend API:** Hosted on Render

---

## 🚀 Core Technical Value Add

* **Bi-Directional Real-Time Architecture:** Leverages `Socket.io` to engineer synchronous data channels, facilitating instant user messaging, live feed updates, and real-time collaboration without page refreshes.
* **Algorithmic Traveler Matching:** Implements custom backend matching matrices to dynamically connect users with overlapping itineraries, travel preferences, and budgets.
* **Optimized Client State Management:** Utilizing React (Vite) and `Zustand` to manage complex global states efficiently, mitigating unnecessary component re-renders.
* **Enterprise-Grade Security & Media Delivery:** Secured API layer with stateless JSON Web Token (JWT) authentication, and integrated Cloudinary API for optimized asset handling and delivery.

---

## 🛠️ Tech Stack & Architecture

### Frontend Interface
* **Framework:** React 18, Vite, TypeScript
* **Styling:** Tailwind CSS, shadcn/ui
* **State Management:** Zustand, React Query
* **Deployment:** Netlify

### Backend Services
* **Runtime:** Node.js
* **Framework:** Express.js
* **Real-Time Engine:** Socket.io
* **Authentication:** JWT (JSON Web Tokens), bcryptjs
* **Asset Management:** Cloudinary API
* **Deployment:** Render

### Database & Infrastructure
* **Database:** MongoDB Atlas
* **Object Data Modeling (ODM):** Mongoose

---

## 💻 Local Development & Setup

If you wish to run this project locally, ensure you have **Node.js** and **npm** installed on your machine. The architecture is split between two discrete servers.

### Step 1: Clone the Repository
```bash
git clone [https://github.com/noaman680/TripSync.git](https://github.com/noaman680/TripSync.git)
cd TripSync

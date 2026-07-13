# ShopEZ 🛒

ShopEZ is a modern, premium full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, and Node.js). 

## 🚀 Live Demo Links
* **Frontend (Vercel)**: [https://shop-ez-three.vercel.app](https://shop-ez-three.vercel.app)
* **Backend API (Render)**: [https://shopez-8ay6.onrender.com](https://shopez-8ay6.onrender.com)

---

## 🛠️ Technology Stack
* **Frontend**: React.js, Vite, Axios, React Router, vanilla CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas (with Mongoose ODM)
* **Authentication**: Google OAuth 2.0 & JWT-based custom auth

---

## ✨ Features
* **User Authentication**: Secure signup/login and Google One-Tap Sign-In.
* **Product Catalog**: Live listing of products, search, categories, and item details.
* **Shopping Cart**: Real-time cart calculation and item updates.
* **User Profile**: Edit personal details and view order history.
* **Responsive Design**: Clean and interactive UI tailored for both mobile and desktop screens.

---

## 💻 Local Development Setup

### Prerequisites
* [Node.js](https://nodejs.org) (v18 or higher recommended)
* [MongoDB](https://www.mongodb.com) (local instance or MongoDB Atlas account)

### Quick Start (Monorepo Setup)
1. Install dependencies for the root, frontend, and backend all at once from the root folder:
   ```bash
   npm install
   ```
2. Create environment files:
   - Create `server/.env` with:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     PORT=5000
     ```
   - Create `client/.env` with:
     ```env
     VITE_API_URL=http://localhost:5000/api
     VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
     ```
3. Start both client and server concurrently:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` and the backend on `http://localhost:5000`.

---

### Alternative Setup (Individual Components)

#### 1. Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your credentials:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

#### 2. Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `client` directory:
   ```env
   VITE_API_URL=http://localhost:5000/api
   VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
   ```
4. Start the Vite dev server:
   ```bash
   npm run dev
   ```

---

## 🌐 Production Deployment

### Backend (Render)
1. Set the **Root Directory** to `server`.
2. Set the **Build Command** to `npm install`.
3. Set the **Start Command** to `npm start`.
4. Configure environmental variables `MONGO_URI` and `JWT_SECRET`.

### Frontend (Vercel)
1. Set the **Root Directory** to `client`.
2. Configure **Environment Variables**:
   * `VITE_API_URL` = `https://your-backend-url.onrender.com/api`
   * `VITE_GOOGLE_CLIENT_ID` = `your_google_oauth_client_id`
### Demo Images
<img width="770" height="1600" alt="image" src="https://github.com/user-attachments/assets/309082e7-0751-4977-bbb4-e075d0daae0c" />
###Wishlist
<img width="1908" height="975" alt="image" src="https://github.com/user-attachments/assets/2569e41e-0f95-4bd5-9451-ac82f25c86be" />
###Cart
<img width="1917" height="982" alt="image" src="https://github.com/user-attachments/assets/8ba8cbcb-6e01-46d7-9c53-54493487609d" />
### Shiping Details and Payment Method
<img width="1913" height="973" alt="image" src="https://github.com/user-attachments/assets/32d0f4b6-4c59-499d-bf66-e1a287c1c889" />






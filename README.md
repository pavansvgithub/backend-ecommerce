# Simple E-commerce API

A basic e-commerce API built using Node.js, Express, and MongoDB. It includes user authentication, product listing, cart management, and order creation, along with JWT-based route protection.

## 🔧 Features
- User registration & login with JWT auth
- Admin & customer roles
- Product CRUD (admin only)
- Cart management
- Order creation
- Product search & pagination
- Basic frontend using HTML + fetch

## 🚀 Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcryptjs
- dotenv + cors

## 📂 Folder Structure
- `/controllers` – Logic for handling requests
- `/models` – Mongoose schemas
- `/routes` – Express route files
- `/middleware` – Auth & role middleware
- `/frontend` – Simple HTML for interacting with API

## ⚙️ Setup Instructions
1. Clone this repo
2. Run `npm install`
3. Create `.env` file with:
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
   JWT_SECRET=your-secret-key
   ```
4. Start MongoDB locally
5. Run `npm start`
6. Visit `frontend/index.html` in browser

## 🔐 Auth Routes
- `POST /api/auth/register`
- `POST /api/auth/login`

## 🛍 Product Routes
- `GET /api/products`
- `POST /api/products` (admin)
- `PUT /api/products/:id` (admin)
- `DELETE /api/products/:id` (admin)

## 🛒 Cart Routes
- `POST /api/cart/add`
- `PUT /api/cart/update/:productId`
- `DELETE /api/cart/remove/:productId`

## 📦 Order Routes
- `POST /api/orders`
- `GET /api/orders`

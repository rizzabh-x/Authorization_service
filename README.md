# 🔐 Authorization Service

A secure and scalable **Authorization Service** built with Node.js and Express.js. This microservice handles user registration, login, role-based access control, and JSON Web Token (JWT) based authentication for microservice architectures or monolithic applications.

> GitHub Repository: [rizzabh-x/Authorization_service](https://github.com/rizzabh-x/Authorization_service)

---

## 🚀 Features

- 🔐 JWT-based authentication and authorization
- 👥 User roles and permissions (Admin/User/etc.)
- 🧾 Secure login and signup endpoints
- 💾 SQL as database
- 📦 Modular codebase for scalability
- 🛡️ Middleware for protected routes

---

## 📁 Project Structure

```
Authorization_service/
├── config/           # Database and JWT config
├── controllers/      # Route logic
├── middleware/       # Auth middlewares
├── models/           # MySQL models (User, Role, etc.)
├── routes/           # Auth and user routes
├── utils/            # Utility functions (hashing, error handling)
├── .env              # Environment variables
├── app.js            # Express setup
└── server.js         # Entry point
```

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Auth**: JWT, Bcrypt
- **Database**: MySql (via sequelize)
- **Validation**: Express Validator / Custom validation
- **Environment**: dotenv

---

## 🔧 Installation

### Prerequisites

- Node.js (v16+ recommended)

### Clone the Repository

```bash
git clone https://github.com/rizzabh-x/Authorization_service.git
cd Authorization_service
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file in the root and add the following:

```env
PORT=5000
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
```

---

## ▶️ Running the App

```bash
npm start
```

The server will run at `http://localhost:5000`.

---

## 📮 API Endpoints

### Auth

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Login and receive a JWT

### Protected

- `GET /api/user/profile` – Accessible only with valid token
- `GET /api/admin/dashboard` – Role-based access control

---

## 🔒 Authentication & Authorization

- Passwords are hashed with Bcrypt
- JWT is used for stateless authentication
- Role-based access enforced via middleware

---

## ✅ To Do

- [ ] Add token refresh endpoint
- [ ] Integrate email verification
- [ ] Implement rate limiting / brute-force protection
- [ ] Add unit tests and CI pipeline

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Made with ❤️ by [Rishabh Malav](https://github.com/rizzabh-x)

# 06 - Jobs API App

Taken from John Smilga - Node Course - Section 9 - Jobs API

README.md files for frontend & backend can be found in respective directories

## Description

Full stack App (API and React frontend) providing data for Jobs, with authenticated/protected routes

## Tech stack

### frontend

- vite
- react
- react-router-dom v6
- axios
- react-icons
- moment
- styled-components

### backend

- node
- express
- mongoose
- mongoDB
- nodemon
- express-async-errors
- express-rate-limit
- dotenv
- cors
- bcryptjs
- helmet
- http-status-codes
- joi
- jsonwebtoken
- rate-limiter
- swagger-ui-express
- xss-clean
- yamljs

## Usage

### frontend

- cd frontend
- npm install
- configure .env with VITE_BASEURL
- npm run dev
- connect from the browser to localhost:5173

### backend

- cd backend
- npm install
- configure .env file with PORT, MONGO_URI & JWT_SECRET & JWT_LIFETIME
- npm start
- connect with postman to localhost:5000

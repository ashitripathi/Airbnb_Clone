# Book & Rent - Full-Stack Web Application

This project is a simplified clone of Airbnb, designed to demonstrate a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript. It includes features like user authentication, property listings, and a booking interface.

## Features

*   User registration and login with JWT-based authentication.
*   View property listings.
*   Protected routes for logged-in users.
*   Backend API for managing users, properties, and bookings.
*   Frontend built with React, TypeScript, and Vite.
*   Styling with Tailwind CSS.

## Tech Stack

*   **Frontend:** React, TypeScript, Vite, Axios, React Router, Tailwind CSS
*   **Backend:** Node.js, Express.js, MongoDB (with Mongoose), JWT (jsonwebtoken), bcryptjs
*   **Development:** ESLint, Prettier (assumed, though not explicitly configured yet beyond linting)

## Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/)
*   [MongoDB](https://www.mongodb.com/try/download/community) (running instance)

## Environment Variables Setup

This project requires certain environment variables to be set up for the backend server. Create a `.env` file in the root of the project directory and add the following variables:

```env
# MongoDB Connection URI
MONGODB_URI=mongodb://localhost:27017/airbnbdata

# JSON Web Token Secret
# Use a strong, random string for this in a real application
# You can generate one using: openssl rand -hex 32
JWT_SECRET=your_super_secret_jwt_key_here

# Port for the backend server
PORT=5000
```

**Note:** For the frontend, the API base URL is currently hardcoded in `src/contexts/AuthContext.tsx` as `http://localhost:5000/api`. For a production environment, you would typically use environment variables for the frontend as well (e.g., `VITE_API_BASE_URL`).

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  Install project dependencies (from the root directory):
    ```bash
    npm install
    ```
    This will install dependencies for both the frontend and backend, as defined in the main `package.json`.

## Running the Application

You can run the backend and frontend servers separately or concurrently.

**1. Backend Server:**
   ```bash
   npm run server
   ```
   This will start the Node.js/Express server, typically on the port specified in your `.env` file (default is `5000`).

**2. Frontend Development Server:**
   ```bash
   npm run dev
   ```
   This will start the Vite development server for the React frontend, usually on `http://localhost:5173` (or another port if 5173 is busy).

**3. Run Both Concurrently:**
   To run both the backend server and the frontend development server with a single command:
   ```bash
   npm run dev:full
   ```
   This uses `concurrently` to manage both processes.

## Available Scripts

The `package.json` file includes several scripts for development and building:

*   `npm run dev`: Starts the frontend Vite development server.
*   `npm run server`: Starts the backend Node.js server using `nodemon` (or `node` if `nodemon` isn't globally installed/configured in script).
*   `npm run dev:full`: Runs both `server` and `dev` scripts concurrently.
*   `npm run build`: Builds the frontend application for production (outputs to `dist` folder).
*   `npm run lint`: Lints the codebase using ESLint.
*   `npm run preview`: Serves the production build locally for preview.


# Tech Quest

Tech Quest is a comprehensive learning and career roadmap platform designed to help users explore various technology roles, track their progress, and build resumes. The project is built using modern web technologies with a clear separation of frontend and backend, communicating via RESTful APIs.

---------------------------------------------------------------------------------------------------------------------

## Project Overview

This project consists of two main parts: the backend API server and the frontend React application. The backend handles user authentication, data persistence, and business logic, while the frontend provides an interactive user interface and manages application state.

---------------------------------------------------------------------------------------------------------------------

## Backend

The backend is built with **Node.js** and **Express.js** and uses **MongoDB** for data storage.

### Key Features and Technologies

- **Express Server:** Provides RESTful API endpoints grouped by functionality.
- **MongoDB:** NoSQL database used to store user data, feedback, and progress.
- **CORS:** Configured to allow frontend applications hosted at `https://techquest.pages.dev` and `http://localhost:3000` to communicate securely.
- **Rate Limiting:** Protects the API from abuse by limiting the number of requests from a single IP.
- **Authentication:**
  - User signup and login endpoints with validation.
  - Passwords hashed using bcrypt.
  - Authentication tokens generated with JSON Web Tokens (JWT) for secure, stateless sessions.

### API Endpoints

- `/api/auth/signup` - create new user accounts.
- `/api/auth/login` - login and receive JWT token.
- `/api/progress` - manage and fetch user progress data.
- `/api/feedback` - submit and retrieve user feedback.

The backend listens on port 5000 by default and connects securely to MongoDB using environment variables for credentials.

---------------------------------------------------------------------------------------------------------------------

## Frontend 

The frontend is built using **React.js** with functional components and hooks.

### Core Features

- **React Context API:** Used for global authentication state management (`AuthContext`). It stores and manages JWT tokens, user info, and guest login state.
- **Routing:** Managed by `react-router-dom` enabling multi-page UI with URL-based navigation.
- **RESTful API Communication:** The frontend interacts with backend APIs using the native `fetch` API to retrieve and update user data such as progress.
- **Authentication Flow:**
  - On login, JWT token and user data are saved in `localStorage`.
  - `AuthContext` exposes methods for login, guest login, and logout.
  - Components check authentication state via `AuthContext`.
- **State Management and Reactivity:**
  - Use of React hooks like `useState` and `useEffect` to manage and reactively update UI based on authentication status and fetched data.

### Example Interaction

The `Home` page component fetches user progress data by calling the backend API endpoint `/api/progress/:userId` using the stored user ID. The response is processed asynchronously and triggers UI updates displaying progress.

------------------------------------

## Frontend-Backend Interaction

- Communication between frontend and backend is **asynchronous and stateless** via RESTful API calls.
- The frontend sends requests with authentication tokens stored in browser local storage (using JWTs).
- Backend verifies tokens for protected routes to authorize user actions.
- The frontend updates its UI reactively based on backend responses.
- CORS policy on backend ensures secure cross-origin requests only from authorized frontend URLs.

-----------------------------------------------------------------------------------------------------------------

## Working Design Patterns and Architecture

### Backend

- **RESTful API Pattern:**
  - Clear resource-based endpoints using HTTP methods (GET, POST, PUT, DELETE).
  - Separation of concerns via routes, controllers, and models.
- **Middleware Pattern:**
  - Use of Express middleware functions such as CORS, rate limiting, JSON body parser, and request validation.
- **Token-Based Authentication:**
  - Stateless session management using JWTs.
  - Secure password storage with bcrypt hashing.
- **Error Handling and Input Validation:**
  - Middleware for input validation using `express-validator`.
  - Consistent error responses.

------------------------------------------
### Frontend

- **Component-Based UI:**
  - Modular React components each responsible for specific UI parts.
- **Context API for Global State:**
  - AuthContext managing authentication state across the app.
- **Hooks for Side Effects and State:**
  - `useEffect` to handle asynchronous API calls and lifecycle events.
  - `useState` to handle local component state.
- **Routing:**
  - React Router to navigate between pages maintaining SPA behavior.

### Interaction Flow

1. User initiates an action in the frontend (e.g., login or viewing progress).
2. Frontend authenticates user and stores JWT token locally.
3. Frontend sends authenticated requests to backend APIs with the token.
4. Backend validates requests, processes business logic, and interacts with MongoDB.
5. Backend sends JSON responses back to frontend.
6. Frontend processes responses and updates UI reactively.

------------------------------------------------------------------------------------------------------------------

## Resume Builder Feature

The Resume Builder is a key feature implemented as a React component that enables users to create customized professional resumes easily.

### Key Functionalities

- Input forms for entering:
  - Basic information (name, tagline, portfolio, contact details, etc.)
  - Skills listing
  - Education history
  - Projects and experience details
- Selection among five different resume templates to cater to various styles and preferences.
- Live preview of the resume in a new browser window.
- Download functionality to export the resume as a PDF file.

### Tech Stack Used for Resume Builder

- **React.js (v19.2.0):** Functional components with hooks (`useState`, `useEffect`) for managing form state and UI reactivity.
- **html2pdf.js:** Library used to convert the resume preview into a downloadable PDF file.
- **ReactDOM and ReactDOMServer:** Utilized for rendering the resume templates to HTML and server-side string conversion for PDF generation.

This feature provides a user-friendly and efficient way to generate professional resumes tailored to individual career goals and achievements.

------------------------------------------------------------------------------------------------------------------

## Conclusion

The Tech Quest project implements a clean separation of frontend and backend concerns. It uses modern patterns like RESTful APIs, token-based authentication, React Context, and hooks to build a scalable, maintainable, and user-friendly learning platform.

------------------------------------------------------------------------------------------------------------------

## Setup and Running

### Backend

1. Install dependencies: `npm install`
2. Configure environment variables (MongoDB URI, JWT secret)
3. Start server: `node backend/server.js`

### Frontend

1. Install dependencies: `npm install`
2. Start development server: `npm start`

---

## Contact

For more information, please refer to the source code 
or
gmail : karthikvelu0415@gamil.com

# RBAC Authentication System

## Overview
This is a full-stack Role-Based Access Control (RBAC) application built using the MERN stack (MongoDB, Express, React, Node.js). The project demonstrates secure authentication, authorization, and role-based access management.

## Features
- User Registration and Authentication
- JWT-based Authentication
- Role-Based Access Control (Admin, Moderator, User)
- Protected Routes
- User Profile Management
- Role-specific Dashboards

## Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

## Installation

### Backend Setup
1. Navigate to server directory
```bash
cd server
npm install
```

2. Create .env file with required configurations

3. Start the backend server
```bash
npm start
```

### Frontend Setup
1. Navigate to client directory
```bash
cd client
npm install
```

2. Create .env file with API configurations

3. Start the React development server
```bash
npm start
```

## Technologies Used
- Frontend: React, React Router, Context API
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT, bcrypt
- Styling: Tailwind CSS

## Security Features
- Password hashing
- JWT token-based authentication
- Role-based middleware for route protection
- Secure route access based on user roles

## Project Structure
- `/client`: React frontend
- `/server`: Node.js backend
- Separate route, controller, and model configurations

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is open-source and available under the MIT License.

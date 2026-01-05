Student Companion App
This worked as part of COM3033 EISS Group Coursework. This is a Student Companion App built with MERN Stack, Docker for microservices architecture and deployed using render.

Tech Stack -
Frontend: React, Vite, Nginx
Backend: Node.js, Express
Database: MongoDB
Containerization: Docker
Deployment: Render

Architecture of this application consists of the following:
- Frontend
- Auth Service (Microservice for User authentication)
- Profile Service(Microservice for User profile management)
- Expense Service(Microservice for Expense tracking and management)
- Feed Service (Microservice for feed like in social media apps with posts, likes, and comments)
- MongoDB(Database)

To run the application or deploy the app follow the below steps:

1. Create MongoDB Database: (Create a database user and get your connection string)
2. Deploy to Render:
   - Go to Render
   - Click on New then Blueprint
   - Connect your Git rep
   - Configure environment variables
   - Click Apply

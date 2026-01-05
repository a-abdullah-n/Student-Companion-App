# Student Companion App

This worked as part of COM3033 EISS Group Coursework. This is a Student Companion App built with MERN Stack and Docker for microservices architecture.

## Architecture

This application consists of:
- **Frontend**: React + Vite application
- **Auth Service**: User authentication and authorization (Port 5001)
- **Profile Service**: User profile management (Port 5002)
- **Expense Service**: Expense tracking and management (Port 5003)
- **Feed Service**: Social feed with posts, likes, and comments (Port 5006)
- **MongoDB**: Database for all services

## Local Development

### Prerequisites
- Docker and Docker Compose
- Node.js (for local development)

### Running with Docker

1. Clone the repository:
```bash
git clone https://github.com/a-abdullah-n/Student-Companion-App.git
cd Student-Companion-App
```

2. Start all services:
```bash
# Using PowerShell script
.\start-services.ps1

# Or using Docker Compose directly
docker-compose up -d
```

3. Access the application:
- Frontend: http://localhost
- Auth Service: http://localhost:5001
- Profile Service: http://localhost:5002
- Expense Service: http://localhost:5003
- Feed Service: http://localhost:5006
- MongoDB: localhost:27018

4. Stop all services:
```bash
# Using PowerShell script
.\stop-services.ps1

# Or using Docker Compose directly
docker-compose down
```

## Deploying to Render

### Quick Deploy (Recommended)

1. **Create MongoDB Database**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free cluster
   - Create a database user and get your connection string

2. **Deploy to Render**:
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click **New** → **Blueprint**
   - Connect your GitHub repository
   - Render will detect the `render.yaml` file
   - Configure environment variables when prompted
   - Click **Apply**

### Manual Deploy Steps

#### 1. Deploy Backend Services

For each service (auth, profile, expense, feed):

1. In Render Dashboard, click **New** → **Web Service**
2. Connect GitHub repository: `a-abdullah-n/Student-Companion-App`
3. Configure service:
   - **Name**: `student-companion-[service-name]`
   - **Environment**: Docker
   - **Dockerfile Path**: `./services/[service-name]/Dockerfile`
   - **Docker Context**: `./services/[service-name]`
   - **Instance Type**: Free

4. Add environment variables:
   - `PORT`: 5001 (auth), 5002 (profile), 5003 (expense), or 5006 (feed)
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   
5. For auth service only, add:
   - `EMAIL_USER`: Your email for sending auth emails
   - `EMAIL_PASSWORD`: Your email app password
   - `FRONTEND_URL`: Your frontend URL (add after deploying frontend)

6. Click **Create Web Service**

#### 2. Deploy Frontend

1. Click **New** → **Web Service**
2. Connect GitHub repository
3. Configure:
   - **Name**: `student-companion-frontend`
   - **Environment**: Docker
   - **Dockerfile Path**: `./frontend/Dockerfile`
   - **Docker Context**: `./frontend`
   - **Instance Type**: Free

4. Add environment variables (use URLs from your deployed services):
   - `VITE_AUTH_SERVICE_URL`: https://student-companion-auth.onrender.com
   - `VITE_PROFILE_SERVICE_URL`: https://student-companion-profile.onrender.com
   - `VITE_EXPENSE_SERVICE_URL`: https://student-companion-expense.onrender.com
   - `VITE_FEED_SERVICE_URL`: https://student-companion-feed.onrender.com

5. Click **Create Web Service**

### Important Notes

- **Free tier limitations**: Services sleep after 15 minutes of inactivity. First request after sleep takes ~30 seconds.
- **MongoDB**: Use MongoDB Atlas free tier for the database
- **Build time**: Initial deployment takes 10-15 minutes
- **Auto-deploy**: Render automatically redeploys when you push to GitHub

## Environment Variables

### Backend Services (All)
- `PORT`: Service-specific port
- `MONGODB_URI`: MongoDB Atlas connection string

### Auth Service (Additional)
- `EMAIL_USER`: Email for authentication
- `EMAIL_PASSWORD`: Email password/app password
- `FRONTEND_URL`: Frontend URL for CORS

### Frontend
- `VITE_AUTH_SERVICE_URL`: Auth service URL
- `VITE_PROFILE_SERVICE_URL`: Profile service URL
- `VITE_EXPENSE_SERVICE_URL`: Expense service URL
- `VITE_FEED_SERVICE_URL`: Feed service URL

## Technology Stack

- **Frontend**: React, Vite, Nginx
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Containerization**: Docker
- **Deployment**: Render

## License

MIT

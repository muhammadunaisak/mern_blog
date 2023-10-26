# mern_blog
Simple blogging application 


This repository contains a sample project implementing a three-tier architecture. The three-tier architecture, also known as client-server-database architecture, divides an application into three parts: the client , the server and database. In this project, we have implemented a simple web application using React for the client (front-end) and Node.js with MongoDB for the server (back-end).

Login & Register

![image](https://github.com/muhammadunaisak/mern_blog/assets/84447232/565aa6a9-6c81-48ed-b7c9-f07a5ae02cdd)<br><br>


home page<br>

![image](https://github.com/muhammadunaisak/mern_blog/assets/84447232/44c8b61e-0b6f-464c-aae0-26fe7bf81ad6)


## Project Overview

The project consists of two main components:

1. **Client (Front-end)**: Built with React
   - Allows users to interact with the application through a web interface.
   - Provides a user-friendly way to create, update, and view records.
   - Utilizes the MERN (MongoDB, Express.js, React, Node.js) stack for front-end development.

2. **Server (Back-end)**: Built with Node.js and MongoDB
   - Handles data storage, retrieval, and manipulation.
   - Implements RESTful API endpoints for record management (create, read, update, delete).
   - Uses MongoDB as the database to store records.

## Project Structure

- `client/`: Contains the React front-end code.
- `server/`: Contains the Node.js back-end code.
- `server/db/`: Database connection configuration.
- `server/models/`: MongoDB data models.
- `server/routes/`: Express.js routes for API endpoints.
- `public/`: Static assets like images.
- `README.md`: This project documentation.

## Getting Started

To get the project up and running, follow these steps:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/3-tier-architecture-project.git
   cd two-tier-architecture-project
   ```

2. **Install Dependencies:**
   - Navigate to the `client/` and `server/` directories and run:
     ```sh
     npm install
     ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the `server/` directory and define your MongoDB connection string.

4. **Start the Client and Server:**
   - In the `client/` directory, run:
     ```sh
     npm start
     ```
   - In the `server/` directory, run:
     ```sh
     npm start
     ```

5. **Access the Application:**
   - Open a web browser and navigate to `http://localhost:3000` to access the client application.

## Additional Features

This project provides a basic implementation of a two-tier architecture. You can extend it by adding the following features:

- User authentication for secure record management.
- Enhanced user interface with more interactive components.
- Validation and error handling for a production-ready application.

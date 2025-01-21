ToDoList API

Introduction

The ToDoList API is a RESTful web service that allows users to manage their tasks. 
It follows the principles of Representational State Transfer (REST), which is an 
architectural style for distributed hypermedia systems. This API allows users to 
perform CRUD (Create, Read, Update, Delete) operations on task data stored in a MongoDB database.

Supported Operations:
Create: Add a new task.
Read: View all tasks or specific tasks.
Update: Modify an existing task's details.
Delete: Remove a task from the list.
Project Scope and Objectives

This API is designed to manage a simple to-do list system for users to:

Add new tasks to a list.
Update the status of existing tasks.
Delete tasks when completed.
View all tasks or individual tasks.

The back-end is built using Node.js, Express, and MongoDB to handle database operations. 
Mongoose is used as an Object Data Modeling (ODM) library to interact with MongoDB efficiently.

Prerequisites
Before running this project, ensure you have the following installed on your system:

Node.js 
MongoDB (Make sure the MongoDB service is running)


You can install the necessary packages and dependencies by following the instructions below.

Getting Started

Clone the repository:

First, clone the repository to your local machine:

git clone https://github.com/yourusername/todolist-api.git

Install dependencies:

Run the following command in your terminal to install all required dependencies:

npm install
Start MongoDB:

Open a new terminal tab or window and start MongoDB:

mongod

Start the API server:

In your main terminal, start the Node.js server:

npm run start
This will start the API on localhost:4000. You can now access the API from your browser or Postman.

API Endpoints
The ToDoList API exposes the following routes for interaction:

GET /tasks: Get all tasks.
GET /tasks/:taskId: Get a task by ID.
POST /tasks: Create a new task.
PUT /tasks/:taskId: Update a task by ID.
DELETE /tasks/:taskId: Delete a task by ID.

Testing the API
You can test the API using tools like Postman. Here are some example commands for testing:

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements;

Express.js: A fast web framework for Node.js.
Mongoose: MongoDB ODM library for Node.js.
MongoDB: NoSQL database used to store task data.
Node.js: JavaScript runtime for building the API.
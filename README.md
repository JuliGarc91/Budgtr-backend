# 🐷 Application Setup Instructions

You can either visit the web app for Budgtr App by clicking [here](https://dynamic-marigold-e97ded.netlify.app/) or follow the steps below to fork and clone both the backend and frontend repositories to your local machine.

Backend render deployment: https://budgtr-backend-u1ul.onrender.com/transactions

This document provides instructions for setting up and running the application. Ensure that you follow these steps carefully to successfully run the application on your local machine.

## Frontend Repository

For the frontend part of the application, you can find the repository at [Budgtr-Frontend](https://github.com/JuliGarc91/Budgtr-Frontend).

## Backend Repository

The backend part of the application can be accessed from [here](https://github.com/JuliGarc91/Budgtr-Backend.git); follow the instructions below.

## Prerequisites

Before proceeding, ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

## Fork and Clone the Frontend Repository

For the frontend part of the application, you can find the repository at [Budgtr-Frontend](https://github.com/JuliGarc91/Budgtr-Frontend). Follow the steps below to set up the frontend:

1. Clone the frontend repository to your local machine using the following command:

   ```bash
   git clone https://github.com/JuliGarc91/Budgtr-Frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Budgtr-Frontend
   ```

3. Install dependencies by running:

   ```bash
   npm install
   ```

## Fork and Clone the Backend Repository

Fork and clone the backend repository from [here](https://github.com/JuliGarc91/Budgtr-Backend.git) and follow the instructions provided.


## Installation

Follow these steps to install the application:

1. Clone the backend repository to your local machine using the following command:

   ```bash
   git clone https://github.com/JuliGarc91/Budgtr-Backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Budgtr-Backend
   ```

3. Install backend dependencies by running:

   ```bash
   npm install
   ```

4. Clone the frontend repository to your local machine and set it up following the instructions provided above.

## Configuration

1. Create a `.env` file in the root directory of the backend project.
2. Define the `PORT` variable in the `.env` file. For example:

   ```plaintext
   PORT=3003
   ```

## Running the Application

To start the backend server, run the following command within the backend project directory:

```bash
node app.js
```

To start the frontend server, run the following command within the frontend project directory:

```bash
npm start
```

This will start both the frontend and backend servers, and you should be able to access the application locally.

## Testing

You can test the application using various HTTP methods. Below are some sample endpoints you can use:

- `GET /`: Retrieves a simple message.
- `GET /transactions`: Retrieves all transactions.
- `GET /transactions/:id`: Retrieves a transaction by its ID.
- `POST /transactions`: Creates a new transaction.
- `PUT /transactions/:id`: Updates a transaction by its ID.
- `DELETE /transactions/:id`: Deletes a transaction by its ID.

Ensure to replace `<repository_url>` and `<project_directory>` with the appropriate values.

That's it! You have successfully set up and run the application.
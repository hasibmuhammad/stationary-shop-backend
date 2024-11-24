# Stationary Shop Backend

A backend service for managing products and orders in a stationary shop. Built with Node.js, Express, MongoDB, and TypeScript.

## Features

- **Product Management**: Create, retrieve, update, and delete stationary products.
- **Order Management**: Place orders and calculate total revenue.
- **MongoDB Integration**: Stores products and orders in a MongoDB database.

## Installation

### Prerequisites

Before you begin, ensure that you have the following software installed:

- Node.js (v14 or higher)
- MongoDB (Local or use MongoDB Atlas)
- TypeScript

### Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/hasibmuhammad/stationary-shop-backend.git

   ```

2. Navigate to the project directory:

   ```bash
   cd stationary-shop-backend

   ```

3. Install the required dependency

   ```bash
   npm install

   ```

4. Create a .env file in the root directory with the following configuration:
   ```env
   PORT=5000
   CORS_ORIGIN=*
   MONGODB_URI=mongodb+srv://username:password@urlpart/dbname
   ```
5. Create a .env file in the root directory with the following configuration:
   ```bash
   npm run dev
   ```
   The server will start on http://localhost:5000.

## API Endpoints

### Product Routes

- POST `/api/products` - Create a new product.
- GET `/api/products` - Retrieve all product.
- GET `/api/products/:productId` - Retrieve a product by its ID.
- PUT `/api/products/:productId` - Update a product by its ID.
- DELETE `/api/products/:productId` - Delete a product by its ID.

### Order Routes

- POST `/api/orders` - Create a new order.
- GET `/api/orders/revenue` - Calculate the total revenue from all orders.

### Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing product and order data.
- **MongoDB**: NoSQL database for storing product and order data. -**Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **TypeScript**: JavaScript with static typing for improved development experience and maintainability.
- **CORS**: Cross-origin resource sharing middleware for handling API requests from different origins.
- **ESLint & Prettier**: Code quality and formatting tools for consistent code style.

**_This project is licensed under the ISC License_**

### Customization Notes:

- Replace `[Your Name or Organization]` with the name or organization that maintains the project.
- Add a `LICENSE` file if necessary, or update the license section based on your project's license.

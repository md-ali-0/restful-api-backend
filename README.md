# User Authentication Backend Server

This is a Node.js backend server for user authentication using Express.js, MongoDB, and JWT.

## Getting Started

To get started with this server, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/md-ali-0/restful-api-backend.git
    cd user-authentication-backend
    ```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a .env file in the root directory and add the following variables:

```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Replace your_mongodb_uri with your MongoDB connection string and your_jwt_secret with a secure JWT secret.

4. Start the server:

```bash
npm start
```

The server will start running on http://localhost:5000 by default.

# Routes

## Authentication

-   **POST /api/auth/register**: Register a new user.
    -   Body parameters: `username`, `email`, `password`.
-   **POST /api/auth/login**: Login with existing user credentials.
    -   Body parameters: `email`, `password`.

## Error Handling

-   **404 Not Found**: If the requested route does not exist.
-   **500 Internal Server Error**: For any other server error.

## Dependencies

-   [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
-   [Mongoose](https://mongoosejs.com/): MongoDB object modeling for Node.js.
-   [Cors](https://www.npmjs.com/package/cors): Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js.
-   [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): JSON Web Token implementation for Node.js.
-   [Dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into `process.env`.
-   [Http Status Codes](https://www.npmjs.com/package/http-status-codes): Library for HTTP status codes.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

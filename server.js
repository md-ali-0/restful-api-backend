// server.js
const express = require("express");
const cors = require("cors");
const { StatusCodes } = require("http-status-codes");
const errorMiddleware = require("./middleware/error.middleware");
const connectDB = require("./config/db.config");
const routes = require("./routes");;

// Load environment variables
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Server is Running");
});

// API routes
app.use("/api", routes);

// 404 Not Found middleware
app.use((req, res, next) => {
    const error = new Error(
        `Can't find requested ${req.originalUrl} in our server`
    );
    error.status = StatusCodes.NOT_FOUND;
    next(error);
});

// Error handling middleware
app.use(errorMiddleware);

async function main() {
    // Connect to database
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();

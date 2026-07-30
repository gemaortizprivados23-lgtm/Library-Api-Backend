const express = require("express");
const cors = require("cors");

require("./config/db");

const bookRoutes = require("./routes/bookRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Library API"
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        database: "PostgreSQL",
        server: "Express"
    });
});

app.use("/api/books", bookRoutes);

app.use(errorHandler);

module.exports = app;
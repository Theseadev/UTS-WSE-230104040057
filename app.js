const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const articleRoutes = require("./routes/articles.routes");
const errorHandler = require("./middlewares/errorHandler");
const limiter = require("./middlewares/limiter");

const app = express();

// ===========================
//      BODY PARSER
// ===========================
app.use(express.json());

// ===========================
//      SECURITY HEADERS
// ===========================
app.use(helmet());

// ===========================
//      CORS CONFIG
// ===========================
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "*",
  })
);

// ===========================
//      RATE LIMITER GLOBAL
// ===========================
app.use(limiter);

// ===========================
//      LOGGING (access.log)
// ===========================
const logDirectory = path.join(__dirname, "logs");

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "access.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

// ===========================
//      MAIN ROUTES
// ===========================
app.use("/api/articles", articleRoutes);

// ===========================
//      HEALTH CHECK
// ===========================
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// ===========================
//      METRICS
// ===========================
app.get("/api/metrics", (req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
    memory: process.memoryUsage(),
    cpu: process.cpuUsage(),
  });
});

// ===========================
//      CORS TEST
// ===========================
app.get("/api/cors-test", (req, res) => {
  res.json({ message: "CORS test success" });
});

// ===========================
//      ERROR TEST
// ===========================
app.get("/api/error-test", (req, res, next) => {
  next(new Error("Sengaja error untuk testing"));
});

// ===========================
//      RATE LIMIT TEST ENDPOINT
// ===========================
app.get("/api/limit", limiter, (req, res) => {
  res.json({
    status: "success",
    message: "Rate limit test endpoint",
    timestamp: new Date().toISOString(),
  });
});

// ===========================
//      INFO API
// ===========================
app.get("/api/info", (req, res) => {
  res.json({
    name: "WSP API",
    author: "Muhammad Fahrul Bahri",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

// ===========================
//      HANDLER 404 GLOBAL
// ===========================
app.use((req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "endpoint tidak dikenal",
  });
});

// ===========================
//      GLOBAL ERROR HANDLER
// ===========================
app.use(errorHandler);

module.exports = app;

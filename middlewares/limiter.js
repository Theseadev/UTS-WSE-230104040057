const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: (parseInt(process.env.RATE_LIMIT_WINDOW) || 15) * 60 * 1000, // 15 menit
  max: parseInt(process.env.RATE_LIMIT_MAX) || 20, // 20 request per window
  message: {
    status: "error",
    message: "Too many requests, try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

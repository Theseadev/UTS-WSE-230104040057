require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
};

const express = require("express");
const app = express();

const VERSION = "1.0.0";

app.get("/", (req, res) => {
  res.json({
    message: "CI/CD Demo Running! 🚀",
    version: VERSION,
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

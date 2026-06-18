const express = require("express");

const app = express();

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend",
  });
});

app.get("/api/message", (req, res) => {
  res.status(200).json({
    message: "Bonjour depuis le backend Docker",
  });
});

module.exports = app;
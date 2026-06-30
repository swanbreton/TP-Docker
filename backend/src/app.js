const express = require("express");
const os = require("os");

const app = express();

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend",
    instance: os.hostname(),
  });
});

app.get("/api/message", (req, res) => {
  res.status(200).json({
    message: "Bonjour depuis le backend Docker",
    instance: os.hostname(),
  });
});

module.exports = app;

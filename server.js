const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.set("port", process.env.port || 3000);

app.listen(app.get("port"), () => {
  console.log(`Сервер слушает порт ${app.get("port")}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Привет от Экспресс!</h1>");
});

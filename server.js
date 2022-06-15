const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

let json;
let news;
const filePath = path.join(__dirname, "files/db.json");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) throw err;
  console.log("Файл новостей прочитан.");
  json = JSON.parse(data);
  news = json.news;
});

app.set("port", process.env.port || 3000);
app.engine("ejs", require("ejs-locals"));
app.set("view engine", "ejs");

app.listen(app.get("port"), () => {
  console.log(`Сервер слушает порт ${app.get("port")}`);
});

app.use("/bootstrap", express.static("./node_modules/bootstrap"));

app.get("/", (req, res) => {
  res.render("index", { news });
});

app.get("/:index", (req, res) => {
  let { index } = req.params;
  index = Number(index);
  res.render("article", { ...news[index] });
});

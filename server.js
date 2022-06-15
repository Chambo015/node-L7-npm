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
app.use(express.urlencoded({ extended: true }));

app.listen(app.get("port"), () => {
  console.log(`Сервер слушает порт ${app.get("port")}`);
});

app.use("/bootstrap", express.static("./node_modules/bootstrap"));

app.get("/", (req, res) => {
  res.render("index", { news });
});

app.get("/:index(\\d+)", (req, res) => {
  let { index } = req.params;
  index = Number(index);
  res.render("article", {
    ...news[index],
    prev: index > 0 ? index - 1 : -1,
    next: index < news.length - 1 ? index + 1 : -1,
  });
});

app.get("/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/add", (req, res) => {
  const { title, image, text } = req.body;
  news.push({ title, image, text });
  json.news = news;
  fs.writeFile(filePath, JSON.stringify(json), (err) => {
    if (err) throw err;
    console.log("Файл записан.");
    res.redirect(`/${news.length - 1}`);
  });
});

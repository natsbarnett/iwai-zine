const express = require("express");
const app = express();
const PORT = 4000;
const fs = require("fs");
const path = require("path");
const cors = require("cors");
app.use(cors());

let contributorsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "contributors.json")),
  "utf8"
);

let datesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "dates.json")),
  "utf8"
);

let socialsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data", "socials.json")),
  "utf8"
);

app.get("/", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

app.get("/dates", (req, res) => {
  res.status(200).json(datesData);
});

app.get("/contributors", (req, res) => {
  res.status(200).json(contributorsData);
});

app.get("/socials", (req, res) => {
  res.status(200).json(socialsData);
});


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})

module.exports = app;
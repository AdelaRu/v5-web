const express = require("express");
const path = require("path");

const app = express();

/* 🌍 cesta k frontend */
const frontendPath = path.join(__dirname, "../frontend");

/* 📂 statické soubory */
app.use(express.static(frontendPath));

/* 🏠 hlavní stránka */
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

/* 🚀 start */
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("V5 běží 🚀");
});
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

/* 🌍 frontend */
app.use(express.static(path.join(__dirname, "../frontend")));

/* 🧪 test API */
app.get("/api/test", (req, res) => {
  res.json({ ok: true });
});

/* 📩 formulář */
app.post("/api/poptavka", (req, res) => {
  console.log("DATA:", req.body);
  res.json({ ok: true });
});

/* 🚀 start */
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("V5 běží 🚀");
});
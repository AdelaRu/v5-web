const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

/* 🔥 FRONTEND */
app.use(express.static(path.join(__dirname, "../frontend")));

/* 🔥 API - ukládání poptávky */
app.post("/api/poptavka", (req, res) => {
  console.log("Poptávka:", req.body);
  res.json({ ok: true });
});

/* 🔥 API - seznam poptávek (zatím prázdné) */
app.get("/api/poptavky", (req, res) => {
  res.json([]);
});

/* 🚀 start serveru */
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("V5 běží na portu " + PORT);
});
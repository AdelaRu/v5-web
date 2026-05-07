const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());

// DB
const db = new sqlite3.Database("./data.db");

// tabulka
db.run(`
CREATE TABLE IF NOT EXISTS poptavky (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  jmeno TEXT,
  email TEXT,
  telefon TEXT,
  zprava TEXT
)
`);

app.get("/", (req, res) => {
  res.send("V5 DB běží 🚀");
});

// 🔥 uložit poptávku
app.post("/api/poptavka", (req, res) => {
  const { jmeno, email, telefon, zprava } = req.body;

  db.run(
    "INSERT INTO poptavky (jmeno, email, telefon, zprava) VALUES (?, ?, ?, ?)",
    [jmeno, email, telefon, zprava]
  );

  res.json({ ok: true });
});

// 🔥 admin data
app.get("/api/poptavky", (req, res) => {
  db.all("SELECT * FROM poptavky ORDER BY id DESC", (err, rows) => {
    res.json(rows);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("V5 DB běží");
});
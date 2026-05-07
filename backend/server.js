const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

// 🗄️ databáze (soubor se vytvoří automaticky)
const db = new sqlite3.Database("./leads.db");

// 📦 vytvoření tabulky
db.run(`
  CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    jmeno TEXT,
    email TEXT,
    telefon TEXT,
    zprava TEXT,
    cas DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// 📩 uložení poptávky
app.post("/api/contact", (req, res) => {
  const { jmeno, email, telefon, zprava } = req.body;

  if (!jmeno || !email || !zprava) {
    return res.status(400).json({ message: "Chybí povinná pole" });
  }

  db.run(
    `INSERT INTO leads (jmeno, email, telefon, zprava)
     VALUES (?, ?, ?, ?)`,
    [jmeno, email, telefon, zprava],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Chyba DB" });
      }

      res.json({ message: "Odesláno ✔" });
    }
  );
});

// 📊 admin API
app.get("/api/leads", (req, res) => {
  db.all(`SELECT * FROM leads ORDER BY id DESC`, (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Chyba DB" });
    }
    res.json(rows);
  });
});

app.listen(3000, () => {
  console.log("🚀 V5 běží na http://localhost:3000");
});

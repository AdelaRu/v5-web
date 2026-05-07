const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("V5 běží 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("V5 běží na portu " + PORT);
});
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("V5 běží 🚀");
});

app.post("/api/poptavka", (req, res) => {
  console.log("Poptávka:", req.body);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log("V5 běží na portu " + PORT);
});
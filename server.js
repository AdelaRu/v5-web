const express = require("express");
const path = require("path");

const app = express();

// frontend cesta
const frontendPath = path.join(__dirname, "../frontend");

// static files
app.use(express.static(frontendPath));

// homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// port
const PORT = process.env.PORT || 3000;

// start serveru
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
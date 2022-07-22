// Import
const express = require("express");
const path = require("path");

let initial_path = path.join(__dirname, "public");

// Express app
let app = express();
app.use(express.static(initial_path));

app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "home.html"));
});

app.get("/:id", (req, res) => {
  res.sendFile(path.join(initial_path, "movie.html"));
});

app.use((req, res) => {
  res.json("404");
});

// Server
app.listen(3000, () => {
  console.log("listening...... on port 3000.");
});

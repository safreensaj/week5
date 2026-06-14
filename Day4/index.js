const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// file path create ചെയ്യുന്നു
const filePath = path.join(__dirname, "data", "student.txt");


// 1. WRITE FILE
app.get("/write", (req, res) => {

  fs.writeFile(
    filePath,
    "Name: Gopika\nBatch: Node 2025",
    (err) => {

      if (err) {
        return res.send("Error writing file");
      }

      res.send("File created successfully");
    }
  );
});


// 2. APPEND FILE
app.get("/append", (req, res) => {

  fs.appendFile(
    filePath,
    "\nMark: 95",
    (err) => {

      if (err) {
        return res.send("Error appending");
      }

      res.send("Data appended to file");
    }
  );
});


// 3. FILE INFO
app.get("/info", (req, res) => {

  const fileName = path.basename(filePath);

  const fileExt = path.extname(filePath);

  const folderName = path.dirname(filePath);

  res.send(`
    <h2>File Information</h2>

    <p><strong>File:</strong> ${fileName}</p>

    <p><strong>Extension:</strong> ${fileExt}</p>

    <p><strong>Folder Path:</strong> ${folderName}</p>
  `);
});


// 4. DELETE FILE
app.get("/delete", (req, res) => {

  fs.unlink(filePath, (err) => {

    if (err) {
      return res.send("Error deleting file");
    }

    res.send("File deleted successfully");
  });
});


// SERVER
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
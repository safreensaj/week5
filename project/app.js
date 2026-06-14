const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const fileName = 'studentData.txt';
const filePath = path.join(__dirname, 'data', fileName);

app.get('/write', (req, res) => {
  fs.writeFile(filePath, 'Name: Anu\nMarks: 95', (err) => {
    if (err) {
      return res.status(500).send('Error writing file');
    }
    res.send('File written successfully');
  });
});

app.get('/read', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('File not found');
    }
    res.send(`<pre>${data}</pre>`);
  });
});

app.get('/append', (req, res) => {
  fs.appendFile(filePath, '\nGrade: A', (err) => {
    if (err) {
      return res.status(500).send('Failed to append data');
    }
    res.send('Data appended successfully');
  });
});

app.get('/exists', (req, res) => {
  const exists = fs.existsSync(filePath);
  res.send(exists ? 'File exists' : 'File does not exist');
});

app.get('/delete', (req, res) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).send('Error deleting file');
    }
    res.send('Deleted successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
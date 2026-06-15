const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.json(user);
});

router.post("/", (req, res) => {
  const newUser = {
    id: Date.now(),
    ...req.body
  };

  users.push(newUser);
  res.json(newUser);
});

router.put("/:id", (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).send("User not found");
  }

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

router.delete("/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.send("User deleted");
});

module.exports = router;
const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
  })
);

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

function isAuthenticated(req, res, next) {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect("/login");
  }
}

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    req.session.isAuth = true;
    res.redirect("/home");
  } else {
    res.render("login", { error: "Invalid credentials" });
  }
});

app.get("/home", isAuthenticated, (req, res) => {
  res.render("home");
});

app.post("/signout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
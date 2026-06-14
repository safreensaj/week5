const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const products = [
  {
    name: "Face Wash",
    price: 299,
    image: "/images/facewash.jpg"
  },
  {
    name: "Hair Oil",
    price: 199,
    image: "/images/hairoil.jpg"
  },
  {
    name: "Body Lotion",
    price: 399,
    image: "/images/bodylotion.avif"
  }
];

app.get("/products", (req, res) => {
  res.render("products", { products });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
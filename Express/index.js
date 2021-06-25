const express = require("express");
const LOGGER = require("./middleware/logger");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//Adding PORT to 3000 incase PORT not available
// const PORT = process.env.PORT || 3000;

//Setting static for angular
const PORT = 3000;

//Setting up CORS Policy
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

//middleware
app.use(LOGGER);

//Routes
app.get("/", (req, res) => {
  let x = { default: "Not Assigned" };
  res.status(200).json(x);
});

//Saving the Cart List
var cartList = [];

app.get("/getDrinksForCategory", (req, res) => {
  var category = req.query.category;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`)
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
  // console.log(data);
  // console.log(req.params.name);
});

app.get("/getFullDrinkDetail", (req, res) => {
  id = req.query.id;
  fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
});

app.post("/saveToCart", (req, res) => {
  cartList.push(req.body);
  res.status(200).json(cartList);
});

app.get("/getCartItems", (req, res) => {
  res.status(200).json(cartList);
});

app.delete("/deleteCartItems", (req, res) => {
  var id = req.query.id;
  cartList.filter((item, i) => {
    if (item.idDrink == id) {
      cartList.splice(i, 1);
    }
  });
  res.status(200).json(cartList);
});

//Starting Server
app.listen(PORT, () => {
  console.log(`Started Server on ${PORT}`);
});

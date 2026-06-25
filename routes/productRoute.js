const express = require("express");
const { getProducts, getProduct, createProduct } = require("../controller/productCtrl");

const route = express.Router();

route.get("/", getProducts);
route.post("/", createProduct);

// route.patch("/:id", uploadProductImages, resizeProductImages, updateProduct);

module.exports = route;

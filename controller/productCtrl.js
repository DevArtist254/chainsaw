const Product = require("../model/productModel");

// uploadProductImages, resizeProductImages, updateProduct
/*
 *await sharp("image.jpg")
  .composite([
    {
      input: Buffer.from(`
        <svg width="400" height="50">
          <text x="10" y="35"
                font-size="24"
                fill="white"
                opacity="0.7">
            © Norwa Water
          </text>
        </svg>
      `),
      gravity: "southeast"
    }
  ])
  .toFile("watermarked.jpg");

 import { exiftool } from "exiftool-vendored";

await exiftool.write("image.jpg", {
  Copyright: "© 2026 Norwa Water. All Rights Reserved.",
  Artist: "Norwa Water",
  Creator: "Norwa Water",
  Credit: "Norwa Water",
  UsageTerms: "Unauthorized reproduction prohibited."
});

await exiftool.end();
 * */

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        if (products.length < 1) {
            res.status(200).json({
                status: "success",
                message: "No products added yet",
            })
        }

        res.status(200).json({
            status: "success",
            length: products.length,
            data: {
                products
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: "There was an error with your request",
            error: err
        })
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: "There was an error with your request",
            error: err
        })
    }
}

exports.createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)

        res.status(201).json({
            status: "success",
            data: {
                product: newProduct
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: `There was an error with your request ${err}`
        })
    }
}

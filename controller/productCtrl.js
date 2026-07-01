const Blower = require("../model/Blower");
const Chemical = require("../model/Chemical");
const Controller = require("../model/Controllers");
const DesalinationSystem = require("../model/DesalinationSystems");
const Filter = require("../model/Filters");
const FlowMeter = require("../model/FlowMeter");
const PlumbingFitting = require("../model/PlumbingFittings");
const Product = require("../model/productModel");
const Sterilizer = require("../model/Sterilizer");
const SurfacePump = require("../model/SurfacePumps");
const Vessel = require("../model/Vessels");

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
        let newProduct;
        const { category } = req.body;

        if (category.toLowerCase() === "filter") {
            newProduct = await Filter.create(req.body)
        } else if (category.toLowerCase() === "blower") {
            newProduct = await Blower.create(req.body)
        } else if (category.toLowerCase() === "sterilizer") {
            newProduct = await Sterilizer.create(req.body)
        } else if (category.toLowerCase() === "vessel") {
            newProduct = await Vessel.create(req.body)
        } else if (category.toLowerCase() === "chemical") {
            newProduct = await Chemical.create(req.body)
        } else if (category.toLowerCase() === "controller") {
            newProduct = await Controller.create(req.body)
        } else if (category.toLowerCase() === "surface pumps") {
            newProduct = await SurfacePump.create(req.body)
        } else if (category.toLowerCase() === "submersible pumps") {
            newProduct = await SurfacePump.create(req.body)
        } else if (category.toLowerCase() === "plumbing fittings") {
            newProduct = await PlumbingFitting.create(req.body)
        } else if (category.toLowerCase() === "desalination systems") {
            newProduct = await DesalinationSystem.create(req.body)
        } else if (category.toLowerCase() === "flow meter") {
            newProduct = await FlowMeter.create(req.body)
        } else {
            newProduct = await Product.create(req.body)
        }

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

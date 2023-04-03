//import express
import express from "express";

//import functions from controller
import {
  createProduct,
} from "../controllers/product.js";

//init express router
const router = express.Router();



// Create New Product
router.post("/products", createProduct);


//export default router
export default router;

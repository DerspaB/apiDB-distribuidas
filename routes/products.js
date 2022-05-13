const { Router } = require("express");
const { getProducts } = require("../controllers/products/products");


const router = Router();

router.get('/', getProducts);


module.exports = router;
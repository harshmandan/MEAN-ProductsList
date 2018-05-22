var express = require('express');
var router = express.Router();

var product = require("../controllers/ProductController.js");

// Get all products
router.get('/', product.list);

// Get single product by id
router.get('/show/:id', product.show);

// Add product
router.get('/add', product.add);

// Save product
router.post('/save', product.save);

// Edit product
router.get('/edit/:id', product.edit);

// Edit update
router.post('/update/:id', product.update);

// Edit update
router.post('/delete/:id', product.delete);

module.exports = router;

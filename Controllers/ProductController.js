var mongoose = require("mongoose");

var Product = require("../models/Product");

var productController = {};

productController.list = function(req, res) {
	Product.find({}).exec(function(err, products){
		if(err)
		{
			console.log("Error:", err);
		}
		else{
			res.render("../views/products/index", {products: products});
		}
	});
};

productController.show = function(req, res) {
	Product.findOne({_id: req.params.id}).exec(function(err, product){
		if(err)
		{
			console.log("Error:", err);
		}
		else{
			res.render("../views/products/show", {product: product});
		}
	});
};

productController.add = function(req, res) {
  res.render("../views/products/add");
};

productController.save = function(req, res) {
	var product = new Product(req.body);

	product.save(function(err, products){
		if(err)
		{
			console.log("Error:", err);
			res.render("../views/products/add");
		}
		else{
			console.log("Successfully added a product");
			res.render("../views/products/show", {product: product});
		}
	});
};

productController.edit = function(req, res) {
	Product.findOne({_id: req.params.id}).exec(function(err, products){
		if(err)
		{
			console.log("Error:", err);
		}
		else{
			res.render("../views/products/edit", {product: product});
		}
	});
};

productController.update = function(req, res) {
	Product.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, des: req.body.des, category: req.body.category, price: req.body.price }}, {new:true}, function (err, product) 
	{
		if(err)
		{
			console.log("Error:", err);
			res.render("../views/products/edit", {product: req.body});
		}
			res.redirect("/products/show"+product._id);
	});
};

productController.delete = function(req, res) {
	Product.remove({_id: req.params.id}, function(err) {
		if(err)
		{
			console.log("Error:", err);
		}
		else{
			console.log("Product deleted!");
			res.redirect("/products/");
		}
	});
};

module.exports = productController;

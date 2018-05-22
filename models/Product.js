var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	des: String,
	category: String,
	price: String,
	updated_at: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Product', ProductSchema);

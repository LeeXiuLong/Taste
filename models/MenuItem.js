const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    reviewId: {
        type: Schema.ObjectId,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
    },

    Notes: {
        type: Text,
        required: false,
    }

});

module.exports = MenuItem = mongoose.model('menuItems', MenuItemSchema);

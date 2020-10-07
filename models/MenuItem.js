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

    notes: {
        type: Text,
        required: false,
    }

});

MenuItemSchema.index({reviewId: 1, name: 1}, {unique: true});

module.exports = MenuItem = mongoose.model('menuItems', MenuItemSchema);

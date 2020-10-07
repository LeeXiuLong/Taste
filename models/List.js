const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: Date.now
    },
    restaurantReviews: [
        {
            RestaurantReview: {
                type: Schema.ObjectId,
                ref: 'Restaurant'
            }
        }
    ],

});

module.exports = User = mongoose.model('lists', ListSchema);
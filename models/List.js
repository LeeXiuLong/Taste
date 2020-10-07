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
            reviews: {
                type: Schema.ObjectId,
                ref: 'RestaurantReview'
            }
        }
    ],

});

module.exports = User = mongoose.model('lists', ListSchema);
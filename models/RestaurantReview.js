const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestuarantReviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        lng : {
            type: Number,
            required: true
        }
    },
    rating: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    date: {
        type: String,
        default: Date.now
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'   
    },
    // inList: {
    //     type: Boolean,
    //     required: true
    // },
    menuItemsReviews: [
        {
            menuItemsReview: {
                type: Schema.ObjectId,
                ref: 'MenuItemsReview'
            }
        }
    ]

});

// users/user_id/followers

module.exports = RestaurantReview = mongoose.model('restaurantReviews', RestuarantReviewSchema);

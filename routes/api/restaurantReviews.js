const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const RestaurantReview = require('../../models/RestaurantReview');
const User = require('../../models/User');
const validateRestaurantReview = require('../../validation/restuarantReview');
let ObjectID = require('mongoose').Types.ObjectId

router.get('/', (req, res) => {
    RestuarantReview.find()
        .sort({ rating: -1 })
        .then(restuarantReviews => res.json(restuarantReviews))
        .catch(err => res.status(404).json({ noRestuarantReviews: 'No restuarant reviews found' }));
});


router.get('/:id', (req, res) => {
    RestaurantReview.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err => res.status(404).json({ notweetfound: 'No such review' }));
});




router.get('/user/:user_id', (req, res) => {
    RestaurantReview.find({ user: req.params.user_id })
        .sort({ rating: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noUserRestuarantReviews: 'No restuarant reviews under this user' })
        );
});

// a user has many lists
//  => a list has many restuarant reviews
//  =>  restaurant 


router.get('/list/:list_id', (req, res) => {
    RestaurantReview.find({ lists: req.params.list_id })
        .sort({ rating: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noListRestuarantReviews: 'No restuarant reviews under this list' }));
});



router.post('/new',
    passport.authenticate('jwt', { session: false }), (req, res) => {
        const { errors, isValid } = validateRestaurantReview(req.body);

        // res.json(req.user)
        if (!isValid) {
            return res.status(400).json(errors);
        }

    //     // const list = req.params.list_id

        const newRestaurantReview = new RestaurantReview ({
            name: req.body.name,
            address: req.body.address,
            rating: req.body.rating,
            notes: req.body.notes,
            user: req.user.id,
            // inList: req.body.inList ?  list.id : ""
        });

        newRestaurantReview.save().then(review => res.json(review));
    }
);


router.patch('/:id/edit', 
    passport.authenticate('jwt', { session: false }), (req, res) => {
        const { errors, isValid } = validateRestaurantReview(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        
        const name = req.body.name;
        const address = req.body.address;
        const rating = req.body.rating;
        const notes = req.body.notes;

        RestaurantReview.findById(req.params.id)
            .then((review) => {
                review.name = name;
                review.address = address;
                review.rating = rating;
                review.notes = notes;
                review.save().then(updatedReview => res.json(updatedReview)) 
            }

)});



router.route('/:id').delete((req, res, next) => {
    restuarantReviews.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({ msg: data })
        }
    })
})

module.exports = router;
const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const RestaurantReview = require('../../models/RestaurantReview');
const User = require('../../models/User');
const List = require('../../models/List')
const validateRestaurantReview = require('../../validation/restaurantReview');


router.get('/', (req, res) => {
    RestaurantReview.find()
        .sort({ rating: -1 })
        .then(restaurantReviews => res.json(restaurantReviews))
        .catch(err => res.status(404).json({ noRestuarantReviews: 'No restuarant reviews found' }))
});

// /api/retaurantreviews/:id
router.get('/:id', (req, res) => {
    RestaurantReview.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err => res.status(404).json({ notweetfound: 'No such review' }));
});

// api/restaurantreviews/user/:user_id
router.get('/user/:user_id', (req, res) => {
    // User.findById(req.params.id)
    //     .then(user => res.json(user.restaurantReviews))

    RestaurantReview.find({ user: req.params.user_id })
        .sort({ rating: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(400).json({ noUserRestaurantReviews: 'No restaurant reviews under this user'}));
});


// api/restaurantreviews/list/:list_id
router.get('/list/:list_id', (req, res) => {
    List.findById(req.params.list_id)
        .then(list => {
            let reviewsArr = [];
            list.restaurantReviews.forEach((review) => {
                reviewsArr.push(RestaurantReview.findById(review._id));
            });
            return Promise.all(reviewsArr)
                .then(reviews => {
                    return res.json(reviews);
                })
                .catch(err => {
                    return res.status(404).json({noReviews: "Reviews do not exist for this list"})
                })
        });
})



router.post('/new',
    passport.authenticate('jwt', { session: false }), (req, res) => {
        const { errors, isValid } = validateRestaurantReview(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newRestaurantReview = new RestaurantReview({
            name: req.body.name,
            address: req.body.address,
            rating: req.body.rating,
            notes: req.body.notes,
            user: req.user.id,
        });

        // const currentUser = req.user.id
        //     user.reviews.push(newRestaurantReview._id); 
        //     user.save()
        //     return res.json(newRestaurantReview); 
        newRestaurantReview.save();

        User.findById(req.user.id) //DO WE NEED THIS? 
            .then(user => {
                user.restaurantReviews.push(newRestaurantReview);
                user.save();
                // return res.json(newRestaurantReview); 
            });

        res.json(newRestaurantReview);

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
            })
    });



router.delete('/:id/delete', // 5f7dd4c88f96db7831b8afc3/delete
    passport.authenticate('jwt', { session: false }), (req, res) => {
        // const { errors, isValid } = validateRestaurantReview(req.body);

        RestaurantReview.findByIdAndRemove(req.params.id)
            .then(review => {
                review.delete()
                    // .then(review => res.json(review))
                    .catch(err => res.status(400).json({ revewNotDestroyed: "The review could not be deleted" }))
            })

        User.findById(req.user.id)
            .then(user => {
                
                let restaurantReviews = user.restaurantReviews;
            
                let reviewIdx = restaurantReviews.findIndex(reviewlook => reviewlook._id.toString() === req.params.id);
         
                if (reviewIdx < 0) {
                    return res.status(400).json({ noUserReview: "This user never had this review" })
                }

                restaurantReviews.splice(reviewIdx, 1);
                user.save().then(user => res.json(user))
            })

    });



module.exports = router;
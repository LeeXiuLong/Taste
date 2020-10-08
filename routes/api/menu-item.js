const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const MenuItem = require("../../models/MenuItem");
const RestaurantReview = require('../../models/RestaurantReview');

const validateMenuItemInput = require("../../validation/menu-item")
const { json } = require("body-parser");

// api/menuitems/restaurantreview/:rr_id/new
router.post("/restaurantreview/:rr_id/new", 
    passport.authenticate("jwt", { session: false}), (req, res) => {
        const { errors, isValid } = validateMenuItemInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        MenuItem.findOne({ restaurantReview: req.body.restaurantReview, name: req.body.name})
            .then(menuItem => {
                if (menuItem) {
                    return res.status(400).json({ name: "There's already a menu item with this name."});
                } else {
                    const newMenuItem = new MenuItem({
                        name: req.body.name,
                        restaurantReview: req.params.rr_id,
                        rating: req.body.rating,
                        notes: req.body.notes,
                    })

                    newMenuItem.save()

                    RestaurantReview.findById(req.params.rr_id)
                        .then(review => {
                            review.menuItemsReviews.push(newMenuItem);
                            review.save();
                        // return res.json(restaurantReview);
                        })
                    
                    res.json(newMenuItem);
                }
            })
})


// menu items index
// menuitems/user/:user_id/restaurantreview/:restaurantreview_id/
// router.get("restaurantreviews/:rr_id/", passport.authenticate("jwt", { session: false }), (req, res) => {
//     MenuItem.find({ reviewId: req.params.reviewId })
//         .then(menuItems => res.json(menuItems))
//         .catch(err => res.status(404).json({noMenuItem: "This menu items do not exist"}))
// })

// menu items index
// api/menuitems/restaurantreviews/:rr_id/
router.get('/:id', (req, res) => {
    MenuItem.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json({ noMenuItem: 'This menu item review does not exist' }));
});

router.get('/restaurantreview/:rr_id', (req, res) => {
    RestaurantReview.findById(req.params.rr_id) // find one restaurant review
        .sort({ rating: -1 })
        .then(review => res.json(review.menuItemsReviews))
        .catch(err => res.status(400).json({ noRestaurantMenuItemReviews: 'No menu item reviews under this restaurant'}));
});

// api/menuitems/resua
router.patch("/restaurantreview/:rr_id/edit/:mi_id",
    passport.authenticate("jwt", { session: false }), (req, res) => {
    const { errors, isValid } = validateMenuItemInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    MenuItem.findById(req.params.mi_id)
        .then(menuItem => {
            if(!menuItem){
                return res.status(400).json({ invalidEdit: "One or more fields were invalid." })
            } else {
                // MenuItem.update({ _id: req.params.mi_id }, {
                //     name: req.body.name,
                //     rating: req.body.rating,
                //     notes: req.body.notes
                // })

                // MenuItem.findById(req.params.mi_id)
                //     .then(menuItem => {
                //         menuItem.save();
                //         return res.json(menuItem)
                //     })
                

                const name = req.body.name;
                const rating = req.body.rating;
                const notes = req.body.notes;

                MenuItem.findById(req.params.mi_id)
                    .then(item => {
                        item.name = name;
                        item.rating = rating;
                        item.notes = notes;
                        item.save().then(updatedReview => res.json(updatedReview))
                    })


            }
        })
})



router.delete("/restaurantreview/:rr_id/delete/:mi_id", 
    passport.authenticate("jwt", { session: false }), (req, res) => {

        // MenuItem.findByIdAndRemove(req.params.mi_id)
        //     .then(menuItem => {
        //         // return res.json(menuItem)
        //         menuItem.delete()
        //         // .then(menuItem => res.json(menuItem))
        //         .catch(err => res.status(400).json({ menuItemDelete: "The item could not be deleted."}))
        //     })

            RestaurantReview.findById(req.params.rr_id)
                .then(review => {
                    let menuItems = review.menuItemsReviews
                    // return res.json(review.menuItemsReviews);
                    let menuItemIdx = menuItems.findIndex(menuItem => menuItem._id.toString() === req.params.mi_id);
                    
                    if(menuItemIdx < 0) {
                        return res.status(400).json({ noMenuItem: "This review never had this item" })
                    }

                    menuItems.splice(menuItemIdx, 1);
                    review.save().then(review => res.json(review));
                })
})


module.exports = router;
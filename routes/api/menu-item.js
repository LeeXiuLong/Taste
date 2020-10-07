const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const MenuItem = require("../../models/MenuItem");
const RestaurantReview = require('../../models/RestaurantReview');

const validateMenuItemInput = require("../../validation/menu-item")
const { json } = require("body-parser");

router.post("/menuItems", passport.authenticate("jwt", { session: false}), (req, res) => {
    const { errors, isValid } = validateMenuItemInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    MenuItem.findOne({ reviewId: req.body.reviewId, name: req.body.name})
        .then(menuItem => {
            if(menuItem) {
                return res.status(400).json({ name: "There's already a menu item with this name."});
            } else{
                const newMenuItem = new MenuItem({
                    name: req.body.name,
                    reviewId: req.body.reviewId,
                    rating: req.body.rating,
                    notes: req.body.notes,
                })

                newMenuItem.save()

                RestaurantReview.findById(req.params.reviewId).then(review => {
                    review.MenuItems.push(newMenuItem);
                    review.save();
                    return res.json(newMenuItem);
                })
            }
        })
})

router.get("/user/:userId/reviews/reviewId/menuItems", passport.authenticate("jwt", { session: false }), (req, res) => {
    MenuItem.find({ reviewId: req.params.reviewId })
        .then(menuItems => {
            res.json(menuItems);
        }).catch(err => res.status(404).json({noMenuItem: "This menu items do not exist"}))
})

router.patch("/user/:userId/reviews/:reviewId/menuItems/:menuItemId", passport.authenticate("jwt", { session: false }), (req,res) => {
    const { errors, isValid } = validateMenuItemInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }
    
    MenuItem.findById(req.params.menuItemId)
        .then(menuItem => {
            if(!menuItem){
                return res.status(400).json({ invalidEdit: "One or more fields were invalid." })
            } else{
                MenuItem.update({ _id: req.params.menuItemId }, {
                    name: req.body.name,
                    rating: req.body.rating,
                    notes: req.body.notes
                })

                MenuItem.findById(req.params.menuItemId)
                    .then(menuItem => {
                        menuItem.save();
                        return res.json(menuItem)
                    })
                
            }
        })
})

router.delete("/user/:userId/reviews/:reviewId/menuItems/:menuItemId", passport.authenticate("jwt", { session: false }), (req, res) => {
    MenuItem.findByIdAndRemove(req.params.menuItemId)
        .then(menuItem => {
            menuItem.delete()
                .then(menuItem => res.json(menuItem))
                .catch(err => res.status(400).json({ menuItemDelete: "The item could not be deleted."}))
        })

        RestaurantReview.findById(req.params.reviewId)
            .then(review=> {
                let menuItems = review.MenuItems
                let menuItemIdx = menuItems.findIndex(menuItem => menuItem._id.toString() === req.params.menuItemId);
                if(menuItemIdx < 0){
                    return res.status(400).json({ noMenuItem: "This review never had this item" })
                }

                menuItems.splice(menuItemIdx, 1);
                review.save().then(review => res.json(review));
            })
})
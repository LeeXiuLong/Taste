const express = require("express"); 
const router = express.Router(); 
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const keys = require('../../config/keys'); 
const passport = require('passport'); 
const mongoose = require('mongoose'); 
const List = require('../../models/List'); 
const User = require('../../models/User'); 

const validateListInput = require('../../validation/new-list');
const { json } = require("body-parser"); 
const { db } = require("../../models/User");


router.post('/new', 
    passport.authenticate("jwt", { session: false }), 
    (req, res) => {

        const { errors, isValid } = validateListInput(req.body);
        
        List.findOne({ user: req.user.id, name: req.body.name })
            .then(list => {
                if (list) {
                    return res.status(400).json( {name: "You already have a list with this name"})
                } else {
                    const newList = new List({
                        name: req.body.name,
                        user: req.user.id
                    })
                    newList.save(); 
                     
                    User.findById( req.user.id )
                        .then( user => {
                            user.lists.push(newList._id);
                            user.save()
                            return res.json(user);
                        });
                };
            });
    }

);

router.get('/', (req, res) => {
    List.find()
        .sort({ date: -1 })
        .then(lists => res.json(lists))
}); 

router.get('/user/:user_id', (req, res) => {
    List.find({user: req.params.user_id})
    .then(lists => {
            return res.json(lists)
        })
    .catch(err => res.status(404).json({ noListsFound: 'No lists found for this user.'}))
})

router.get('/:list_id', (req, res) => {
    List.findById(req.params.list_id)
        .then(list => res.json(list))
        .catch(err => res.status(404).json( {noList: "This list does not exist"}))
});

router.patch('/:list_id/edit-name',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        List.findById(req.params.list_id)
        .then( listEdit => {
            if (req.user.id != listEdit.user._id) {
                return res.status(401).json({ userMatch: "You are not the owner of this list"});
            } else {
                List.update({ _id: req.params.list_id }, {
                    name: req.body.name
                
                }, function (err, affected, resp) {
                    console.log(resp);
                })
                
            List.findById(req.params.list_id)
                .then(list => {
                    list.save();
                    return res.json(list)
                })
            }
        })
    }

);

router.patch('/:list_id/reviews/:review_id/delete',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        List.findById(req.params.list_id)
            .then(listEdit => {
                if (req.user.id != listEdit.user._id) {
                    return res.status(401).json({ userMatch: "You are not the owner of this list" });
                } else {
                  let reviews = listEdit.restaurantReviews;
                  let reviewIndex = reviews.findIndex

                  if (reviewIndex < 0) {
                      return res.status(400).json( {noReview: "Review does not exist"})
                  }

                  reviews.splice(reviewIndex, 1);
                  listEdit.save(); 
                }
            })
    }

);

router.patch('/:list_id/reviews/:review_id/add',
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        List.findById(req.params.list_id)
            .then(listEdit => {
                if (req.user.id != listEdit.user._id) {
                    return res.status(401).json({ userMatch: "You are not the owner of this list" });
                } else {
                    let reviews = listEdit.restaurantReviews;
                    let reviewIndex = reviews.findIndex

                    if (reviewIndex > -1) {
                        return res.status(400).json({ reviewExists: "This review already exists in this list" })
                    }

                    reviews.push(req.params.review_id)
                    listEdit.save();
                }
            })
    }

);



// router.patch('/:list_id/:review_id',
//     passport.authenticate("jwt", { session: false }),
//     (req, res) => {
//         List.findById(req.params.)
//     }
// )


module.exports = router;
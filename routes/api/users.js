const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const mongoose = require("mongoose");
const User = require('../../models/User');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const { json } = require("body-parser");

// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    // username: req.user.username
  });
})

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          // username: req.body.username,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })


})


router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  console.log(errors);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  // const username = req.body.username;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "This user does not exist" })
    }
    // User.findOne({ username }).then(user => {
    //   if (!user) {
    //     return res.status(404).json({ username: "This user does not exist" })
    //   }
    // })

  bcrypt.compare(password, user.password)
    .then(isMatch => {
      if (isMatch) {
        const payload = {id: user.id, name: user.name, email: user.email };

        jwt.sign(
          payload,
          keys.secretOrKey,
          {expiresIn: 3600},
          (err, token) => {
          res.json({ success: true, token: 'Bearer ' + token });
        });
      } else {
        return res.status(400).json({ password: 'Incorrect password' });
      }
    })
  })

})



router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ noUsers: 'No users found' }));
});


router.get('/:user_id', (req, res) => {
  User.findById(req.params.user_id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ noUser: "No such user" }))
});


// router.post('/:user_id/follow', (req, res) => {
//   // res.json({something: req.params.user_id})
//   User.findById(req.params.user_id) //USER2's ID verification
//     .then(user => {
//       // const currentUser = req.body.currentUser
//       if (user.followers.filter(follower => follower.user.toString() === req.user._id).length > 0) {
//         return res.status(400).json({ alreadyFollowing: "You are already following this user" })
//       }

//     user.followers.push(req.user._id);
//     const followedUser = user._id;
//     user.save()
    
//     User.findOne({ _id: req.user._id })
//       .then(currentUser => {
//         currentUser.following.push(followedUser);
//         currentUser.save().then(user => res.json(user))
//       })
//       .catch(err => console.log("Error! You are already following this user"))
//       })
//   })

// })

router.post('/:user_id/follow', //FOR POSTMAN, INPUT THE FULL BEARER TOKEN IN HEADERS -> AUTHORIZATION KEY: <BEARERTOKEN> : EXPIRES AFTER ABOUT 13 MINUTES of NON-ACTIVITY
  passport.authenticate("jwt", { session: false }), //THIS GIVES US REQ.USER WHICH IS AN ID - SEE PASSPORT.JS 
  (req, res) => {
    User.findById(req.params.user_id) 
      .then( userToFollow => {
        if (userToFollow.followers.some(follower => follower != null && follower._id.toString() === req.user.id)) {
          return res.status(400).json({ alreadyFollowing: "You are already following this user"})
        }

        userToFollow.followers.push(req.user); 
        const followedUser = userToFollow._id; //Now this user is "followed"
        userToFollow.save() //Saves to database 

        User.findOne({ _id: req.user }) // Looks for the LOGGED IN USER in the DB -> OWNER OF THE REQUEST
          .then(currentUser => { // Currentuser is the owner of the request 
            currentUser.following.push(followedUser); //Push followedUser (Which is an ID) to following array of currentUser
            currentUser.save().then(user => res.json(user));
          })

        res.json(userToFollow);
      })
  })

  // NOTES: DO WE WANT MORE INFORMATION PASSED INTO REQ.USERS? OR WILL JUST THE ID SUFFICE? 

router.patch('/:user_id/unfollow', 
  passport.authenticate("jwt", {session: false}), (req, res) => {
    User.findById(req.params.id)
    .then( userToUnfollow => {

      let followers = userToUnfollow.followers;
      let userIndexInFollowers = followers.findIndex(follower => follower._id.toString() === req.user.id);

      if (userIndexInFollowers < 0) {
        return res.status(400).json( {notFollower: "You never had this person as a follower"})
      }

      followers.splice(userIndexInFollowers, 1); 
      userToUnfollow.save(); 
      // const unfollowedUser = userToUnfollow._id;
      // res.json(userToUnfollow);  for testing

      User.findOne({ _id: req.user }) // Looks for the LOGGED IN USER in the DB -> OWNER OF THE REQUEST
        .then((currentUser) => {
          let following = currentUser.following
          let unfollowedUserIdx = following.findIndex(followee => followee._id.toString() === userToUnfollow._id.toString())
          
          // return res.json(userToUnfollow);
          // return res.json(unfollowedUserIdx);
          if (unfollowedUserIdx < 0) { 
            return res.status(400).json({ notFollowing: "You were never following this User" });
          }
          
          following.splice(unfollowedUserIdx, 1); 
          currentUser.save().then((user) => res.json(user));
        });
    })
  }
)


module.exports = router;

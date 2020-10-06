const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    following: [
      {
        user: {
            type: Schema.ObjectId,
            ref: 'User'
          }
      }
    ],
    followers: [
      {
        user: {
          type: Schema.ObjectId,      
          ref: 'User' 
        }
      }
    ], 
    lists: [
      {
        list: {
          type: Schema.ObjectId, 
          ref: 'List'
        }
      }
    ]
  
  });

// users/user_id/followers
  
module.exports = User = mongoose.model('users', UserSchema);

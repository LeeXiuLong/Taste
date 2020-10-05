const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  // em
  data.email = validText(data.email) ? data.email : '';
  // data.username = validText(data.username) ? data.username : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Your email is required';
  } 

  // if (Validator.isEmpty(data.username)) {
  //   errors.email = 'Username is required';
  // }

  if (Validator.isEmpty(data.password)) {
    errors.password = ' Your Password is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
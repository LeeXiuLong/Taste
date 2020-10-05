const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.email = validText(data.email) ? data.email : '';
  // data.username = validText(data.username) ? data.username : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';


 
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }


  // email validation errors:
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Your email is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Your email is invalid';
  }


  // username validation errors:
  // if (Validator.isEmpty(data.username)) {
  //   errors.username = 'Your username is required';
  // }

  // if (!Validator.isLength(data.username, { min: 4, max: 30 })) {
  //   errors.username = 'Username must be between 4 and 30 characters';
  // }


  // password validation errors:
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Your password is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm your password';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords do not match';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
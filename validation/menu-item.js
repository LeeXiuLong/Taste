const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMenuItemInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is Required";
    }

    if (!Validator.isNumeric(data.rating)) {
        errors.rating = "Invalid Rating";
    }
    
    if (!Validator.isLength(data.rating, { min: 1, max: 10 })) {
        errors.rating = 'This rating must be between 1 and 10';
    }

    if (Validator.isEmpty(data.rating)) {
        errors.rating = "Must enter a value"
    }

    if (Validator.isEmpty(data.restaurantReview)){
        errors.restaurantReview = "No Review Specified."
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}
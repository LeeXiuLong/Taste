const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRestaurantReview(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.address = validText(data.address) ? data.address : "";
    // data.rating = validText(data.rating) ? data.rating : "";
    // data.notes = validText(data.notes) ? data.notes : "";
    data.user = validText(data.user) ? data.user : "";

    // data.lists = validText(data.lists) ? data.lists : "";


    if (Validator.isEmpty(data.name)) {
        errors.name = 'The restaurant name is required';
    }


    if (Validator.isEmpty(data.address)) {
        errors.address = 'The restaurant address is required';
    }


    if (!Validator.isNumeric(data.rating)) {
        errors.rating = "Invalid Rating";
    }

    if (Validator.isEmpty(data.rating)) {
        errors.rating = "Must enter a value"
    }

    if (!Validator.isLength(data.rating, { min: 1, max: 10 })) {
        errors.rating = 'Restuarant rating must be between 1 and 10';
    }

    // if (Validator.isEmpty(data.user)) {
    //     errors.user = 'You must be signed in';
    // }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };

}
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMenuItemInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.text : "";

    if (Validator.isEmpty(data.name)) {
        errors.name = "Name is Required";
    }

    if (!Validator.isNumeric(data.rating)) {
        errors.rating = "Invalid Rating";
    }

    if (Validator.isEmpty(data.rating)) {
        errors.rating = ""
    }

    if(Validator.isEmpty(data.reviewId)){
        errors.rating = "No Review Specified."
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}
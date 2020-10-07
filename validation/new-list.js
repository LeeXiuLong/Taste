const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateListInput(data) {
    let errors = {};

    // em
    data.name = validText(data.name) ? data.name : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Please input a name for your list.';
    }

    // if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    //     errors.name = 'Name must be between 2 and 30 characters';
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};
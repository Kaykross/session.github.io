const joi = require("joi");
// const {hashPassword} = require("./bcrypt");

const Users = joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    password: joi.string().required(),
    "confirm password": joi.string().valid(joi.ref('password')).required().label('Confirm password')
    .options({ messages: { 'any.only': '{{#label}} does not match'} })
});
const Loggins = joi.object({
    email:joi.string().email().required(),
    password: joi.string().required(),
});


const validateUser = (data) => {
    return Users.validate(data);
};
const validateLoggin = (data) => {
    return Loggins.validate(data);
};

module.exports = {validateUser,validateLoggin};
const registerUser  = require("./register.model.js");
const loginUser  = require("./login.model.js");

const newRegisteredUser = (val)=>{ 
   return new registerUser({
        "name":val.name,
        "email":val.email,
        "password": val.password,
        "confirm password":val["confirm password"]
    });
};

const newLogginUser = (val)=>{ 
   return new loginUser({
        "email":val.email,
        "password": val.password,
    });
};

module.exports = {newRegisteredUser,newLogginUser};
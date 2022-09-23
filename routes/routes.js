const router = require('express').Router();
const path = require("path");
const registerUser  = require("../connection/models/register.model");
const loginUser  = require("../connection/models/login.model");
const {newRegisteredUser,newLogginUser} = require("../connection/models/constructor");
const {validateUser,validateLoggin} = require("../validations/joi.validation");
const {hashPassword,comparePasswords} = require("../validations/bcrypt");
const authorize = require("../validations/authorize");

const filePath = (file)=>path.join(__dirname,file);

router.get('/test',authorize,(req,res)=>res.sendFile(filePath("../public/index.html")));


router.get('/',authorize,(req,res)=>res.sendFile(filePath("../public/index0001100.html")));
router.get('/dashboard',authorize,(req,res)=>res.sendFile(filePath("../public/pages/dashboard.html")));
router.get('/login',(req,res)=>res.sendFile(filePath("../public/pages/login.html")));
router.get('/register',(req,res)=>res.sendFile(filePath("../public/pages/register.html")));



router.post("/login",async (req,res)=>{
    const {error,value} = validateLoggin(req.body);
    if(error) return res.json({error: error.details[0].message});
    const user = await  registerUser.findOne({email:value.email});
    if(!user) return res.json({error:`your email ${value.email} is incorrect`});
    const validPassword = await comparePasswords(value.password,user.password);
    if(!validPassword) return res.json({error:"invalid password"});
    const newUser = newLogginUser(value);
    try {
       const saveUser = await newUser.save();
       req.session.user = true;
       res.send({saveUser, success:"login successful",url:'/'});
       
    } catch (err) {
        res.jsonp(err);
    }
});

router.post("/register", async(req,res)=>{
    const {error,value} = validateUser(req.body);
    if(error) return res.json({error: error.details[0].message.replaceAll('"',"")});
    const userRecord = await  registerUser.findOne({email:value.email});
    if(userRecord) return res.json({error:`your email ${value.email} already exist <br>`});
    value.password = await hashPassword(value.password);
    value['confirm password'] = await hashPassword(value['confirm password']);
    const newUser = newRegisteredUser(value);
    try {
        const saveUser = await newUser.save();
        res.send({saveUser, success:`Your account: ${saveUser.email} has been registered successfully`});
     } catch (err) {
         res.jsonp(err);
     }
});


module.exports = router;
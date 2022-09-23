const bcrypt = require('bcrypt');
const saltRounds = 10;
const secret = `ahhgdjdkkd`;

const hashPassword = async(password)=> await bcrypt.hash(password,saltRounds);
const comparePasswords = async(password,hashed)=> await bcrypt.compare(password,hashed);

// async function load () {
//     let h = await hashPassword(secret);
//     console.log( await hashPassword(secret));
//     console.log( await comparePasswords(secret,h));
// }
// load();
// console.log(hashPassword(secret));

module.exports = {hashPassword,comparePasswords};


require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken= (param) => {
   return jwt.sign({param: param._id}, process.env.TOKEN)
}

module.exports = generateToken;
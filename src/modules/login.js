require("dotenv").config();
const Admin = require("../models/admin");
const generateToken = require("../token/generateToken");

const login = async (req, res) => {
    try{
        const { email, password } = req.body;

        const user = await Admin.findOne({email});
        if(!user) {
            return res.status(403).json({error: "Invalid email address"});
        }
        const verifyPwd = await user.comparePassword(password);
        if(!verifyPwd) {
            return res.status(403).json({error: "Incorrect password"});
        }
    
        const token = generateToken(user)
        return res.status(200).json({message: "Login successfull", token: token, user: user});
    }
    catch(err) {
        return res.status(400).json({error: err.message});
    }
}

module.exports = login;
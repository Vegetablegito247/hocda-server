require("dotenv").config();
const Admin = require("../models/admin");

const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        await Admin.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        res.status(201).json({message: "Account created successfully"});
    }
    catch(err) {
        res.status(400).json({error: err.message});
    };
};

module.exports = signup;
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    lastName: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    password: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    }
}, {timestamps: true});

// Saving password as hash
adminSchema.pre("save", async function (next) {
    try {
        const user = await Admin.findOne({ email: this.email }).select("+password");
        if(user) {
            throw new Error('Email already exists')
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch(err) {
        throw new Error(err)
    }
})

// Compare password
adminSchema.methods.comparePassword = async function (password) {
    try {
        const user = await Admin.findOne({email: this.email}).select("+password");
        return await bcrypt.compare(password, user.password);
    }
    catch(err) {
        throw new Error(err);
    }
}

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
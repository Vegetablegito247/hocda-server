const Client = require("../models/client");

const postMsg = async (req, res) => {
    try {
        const { email, message } = req.body;

        const newMsg = new Client({
            email: email,
            message: message
        });

        const savedMsg = await newMsg.save();
        res.status(201).json({message: "Message sent successful", msg: savedMsg});
    }
    catch(err) {
        res.status(400).json({error: err.message});
    }
}

module.exports = postMsg;
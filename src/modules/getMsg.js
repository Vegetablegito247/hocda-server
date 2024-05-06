const Client = require("../models/client");

const getMsg = async (req, res) => {
    try {
        const msg = await Client.find();
        res.status(200).json(msg);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = getMsg;
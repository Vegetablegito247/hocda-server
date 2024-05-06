const Client = require("../models/client");

const getMsgDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const msg = await Client.findById(id);
        
        if (!msg) {
            return res.status(404).json({ message: "Message not found" });
        }
        res.status(200).json(msg);
    }
    catch (error) {
        console.error("Error fetching message:", error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = getMsgDetail;
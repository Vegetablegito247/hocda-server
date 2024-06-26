require("dotenv").config();
const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split('  ')[1];

    if(token === null) {
        return res.status(401);
    };

    jwt.verify(token, process.env.TOKEN, (err, user) => {
        if(err) {
            return res.status(403);
        };
        req.user = user;
        console.log(req.user);
        next();
    });
};

module.exports = authToken;
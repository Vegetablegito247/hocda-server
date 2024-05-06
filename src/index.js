require("dotenv").config({ path: `${__dirname}/../.env` });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connection = require("./connection/connect");
const authToken = require("./token/authToken");
const signup = require("./modules/signup");
const login = require("./modules/login");
const postMsg = require("./modules/postMsg");
const getMsg = require("./modules/getMsg");
const getMsgId = require("./modules/getMsgDetail");

//Getting our app
const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.post("/signup", signup);
app.post("/login", login);

app.post("/createMsg", postMsg);
app.get("/getMsg", authToken, getMsg);
app.get("/getMsgDetail/:id", authToken, getMsgId);

connection({ app, port: process.env.PORT || 8000 });
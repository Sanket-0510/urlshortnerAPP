const express = require('express')

const app = express();

const{shorturlPage,createUrl} = require("../controllers/shorturl.js")

const urlRouter = express.Router();

urlRouter.get("/", shorturlPage)

urlRouter.post("/createurl", createUrl)

module.exports = urlRouter
const express = require('express')

const app = express();

const{shorturlPage,createUrl,getshorturl} = require("../controllers/shorturl.js")

const urlRouter = express.Router();

urlRouter.get("/", shorturlPage)

urlRouter.post("/createurl", createUrl)


urlRouter.get("/:shortId",getshorturl)
module.exports = urlRouter
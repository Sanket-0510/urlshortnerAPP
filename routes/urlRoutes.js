const express = require('express')

const app = express();

const{shorturlPage,createUrl,getshorturl,getNumberOfClicks} = require("../controllers/shorturl.js")

const urlRouter = express.Router();

urlRouter.get("/", shorturlPage)

urlRouter.post("/createurl", createUrl)


urlRouter.get("/:shortId",getshorturl)

urlRouter.get("/showclicks/:shortId",getNumberOfClicks )
module.exports = urlRouter
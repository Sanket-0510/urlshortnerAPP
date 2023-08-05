const shortid = require('shortid');
const express = require('express');
const app = express();
const cors = require('cors')
const Url = require("../models/url.js");
app.use(express.json());

app.use(cors())
function shorturlPage(req, res) {
    res.send("welcome to url shortener");
}

async function createUrl(req, res) {
    try {
        console.log(req.body)
        const redirectUrl = req.body.redirectUrl;
        const shorturlId = shortid.generate(); // Use shortid.generate() to create short IDs.
        console.log("id is " + shorturlId);

        const urldoc = await Url.create({
            shortId: shorturlId,
            redirectUrl: redirectUrl,
            numberOfClicks: []
        });
        await urldoc.save();
        res.status(200).send("URL created successfully");
    } catch (e) {
        console.log(e);
        res.status(500).send("Server error");
    }
}

module.exports = { shorturlPage, createUrl };

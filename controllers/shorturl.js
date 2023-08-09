const shortid = require("shortid");
const express = require("express");
const app = express();
const cors = require("cors");
const Url = require("../models/url.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
function shorturlPage(req, res) {
  res.send("welcome to url shortener");
}

async function createUrl(req, res) {
  try {
    console.log(req.body);
    const redirectUrl = req.body.redirectUrl;
    const shorturlId = shortid.generate(); // Use shortid.generate() to create short IDs.
    console.log("id is " + shorturlId);

    const urldoc = await Url.create({
      shortId: shorturlId,
      redirectUrl: redirectUrl,
      numberOfClicks: [],
    });
    await urldoc.save();
    res.status(200).send("URL created successfully");
  } catch (e) {
    console.log(e);
    res.status(500).send("Server error");
  }
}

async function getshorturl(req, res) {
  try {
    const shortId = req.params.shortId;
    const urldoc = await Url.findOne({ shortId: shortId });
    const redirection = urldoc.redirectUrl;
    console.log(redirection);
    const entry = await Url.findOneAndUpdate(
      { shortId: shortId },
      {
        $push: {
          numberOfClicks: {
            timestamp: Date.now(),
          },
        },
      }
    );

    res.redirect(redirection);
  } catch (e) {
    console.log(e);
  }
}

async function getNumberOfClicks(req, res) {
  console.log(req.params.shortId);
  const doc = await Url.findOne({ shortId: req.params.shortId });
  console.log(doc.numberOfClicks);
  res.send("number of clicks on the link are " + doc.numberOfClicks.length);
}
module.exports = { shorturlPage, createUrl, getshorturl, getNumberOfClicks };

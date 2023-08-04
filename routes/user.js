const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user.js");
const { updateUser, deleteUser, getAllUsers, postUser } = require("../controllers/userControllers.js");

app.use(express.json());

router.get("/", getAllUsers);

router.delete("/:id", deleteUser);

router.post("/", postUser);

router.patch("/update", updateUser);
module.exports = router;

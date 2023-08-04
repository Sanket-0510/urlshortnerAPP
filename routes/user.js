const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/user.js");

app.use(express.json());

router.get("/", async (req, res) => {
  const allUsers = await User.find();
  res.send(allUsers);
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send("User not found.");
    }

    // Respond with a success message indicating the user's name
    res.send(`${deletedUser.name} has been deleted successfully.`);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the user.");
  }
});

router.post("/", async (req, res) => {
  const userdata = {
    firstname: "sanket",
    lastname: "teli",
    email: "telisanket63@gmail.com",
    jobtitle: "student",
    gender: "male",
  };
  const userdoc = await User.create(userdata);
  const result = await userdoc.save();
  console.log(result);
  res.send(result);
});

router.patch("/update", async (req, res) => {
  try {
    const updateName = req.query.firstname;
    const userdoc =await User.findOneAndUpdate(
      { firstname: updateName },
      { firstname: "newName" }, // Replace 'newName' with the new name you want to set
      { new: true }
    );
    console.log("updated successfully")
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;

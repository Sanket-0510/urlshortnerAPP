const express = require("express");
const mongoose = require("mongoose");
const connectMd = require("./connection.js");//importing the connect function
const userRouter = require("./routes/user.js");//importing userRouter
const homeRouter  =require("./routes/homeRouter.js")// importing homeRouter

const urlRouter = require("./routes/urlRoutes.js")

connectMd(
  "mongodb+srv://telisanket2002:urlshort@cluster0.zj7rqdf.mongodb.net/?retryWrites=true&w=majority"
)
  .then(() => console.log("connected to the database"))//the asynchranous calback response after successfull connection to the database
  .catch((e) => console.log(e));






 // extracting the express module 
const app = express()
app.use(express.json());
const PORT = 8000;
app.listen(8000, () => console.log("listening at port " + PORT));

app.use("/user", userRouter);
app.use("/",homeRouter)
app.use("/url",urlRouter);


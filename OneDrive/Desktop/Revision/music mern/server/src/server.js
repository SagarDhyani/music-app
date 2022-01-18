const express = require("express")

const connect = require("./Config/db")
const cors = require("cors");

const app = express()
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json())

//controllers

const authController = require("./Controllers/authController")

const userController = require("./Controllers/userController")

const albumController = require("./Controllers/albumController")

app.use("/auth", authController)

app.use("/users", userController)

app.use("/albums", albumController)




app.listen(2345, async () => {

    await connect()

    console.log("listening to 2345")
})
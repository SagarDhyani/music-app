const express = require("express")

const User = require("../Models/User.model")
const dotenv = require("dotenv");
dotenv.config();

// const PASS_SEC


const router = express.Router()
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const pass = "sanskrit"
const JWT_SEC = "sanskrit"

//register

router.post("/register", async (req, res) => {

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    isArtist: req.body.isArtist,
    isAdmin: req.body.isAdmin,

    password: CryptoJS.AES.encrypt(
      req.body.password,
      pass
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login

router.post("/login", async (req, res) => {

  try {

    const user = await User.findOne({ username: req.body.username});
    
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      pass
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password && res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isArtist: user.isArtist,
        isAdmin: user.isAdmin,
      },
      JWT_SEC,
      {expiresIn: "4d"}
    )

  

    const { password, ...others } = user._doc;

    res.status(200).json({...others, accessToken});

  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router



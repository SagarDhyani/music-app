
const express = require("express")
const User = require("../Models/User.model")

const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken")

const router = express.Router()

const pass = "sanskrit"

router.put("/:id", verifyTokenAndAuth, async(req, res) => {

    if (req.body.password) {

        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            pass
        ).toString()
        
    }

    try{

        const updateduser = await User.findByIdAndUpdate(req.params.id, {

            $set: req.body
        }, {new: true}
        );

        res.status(200).json({updateduser})

    }catch(error) {

        res.status(500).send(error)
    }

    


})

//delete

router.delete("/:id", verifyTokenAndAuth, async(req, res) => {

    try{

        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted")


    }catch(err){

        res.status(500).json(err)


    }
})

//get all users

router.get("/", verifyTokenAndAdmin, async(req, res) => {

    const query = req.query.new

    try{

       const users =  query ? await User.find().sort({_id: -1}).limit(1) : await User.find(req.params.id)
        
     
       res.status(200).json(users)


    }catch(err){

        res.status(500).json(err)


    }
})

//get a user ==> working

router.get("/:id", verifyTokenAndAdmin, async(req, res) => {

    try{

       const user =  await User.findById(req.params.id)

      
       const {password, ...others} = user._doc

       res.status(200).json(others)


    }catch(err){

        res.status(500).json(err)


    }
})




module.exports = router
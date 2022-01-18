

const express = require("express")
const router = express.Router()
const { verify } = require("jsonwebtoken")


const Album = require("../Models/Album.model")
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken")

//post (create)

router.post("/", verifyTokenAndAdmin, async (req, res) => {

    const newAlbum = new Album(req.body)

    try {

        const savedAlbum = await newAlbum.save()

        res.send(200).json(savedAlbum)




    }
    catch (error) {

        res.status(500).json(error)


    }


})



//put (update)

router.put("/:id", verifyTokenAndAuth, async (req, res) => {



    try {

        const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, {

            $set: req.body
        }, { new: true }
        );

        res.status(200).json({ updatedAlbum })

    } catch (error) {

        res.status(500).send(error)
    }



})

//delete

router.delete("/:id", verifyTokenAndAuth, async (req, res) => {

    try {

        await Album.findByIdAndDelete(req.params.id)
        res.status(200).json("Album deleted")


    } catch (err) {

        res.status(500).json(err)


    }
})

//get

router.get("/find/:id", async (req, res) => {

    try {

        const album = await Album.findById(req.params.id)

        res.status(200).json(album)


    }
    catch (error) {

        res.status(500).json(error)


    }


})


//getall

router.get("/", async (req, res) => {

    const qNew = req.query.new;

    let query = Album.find()

    const page = parseInt(req.query.page) || 1

    const pageSize = parseInt(req.query.limit) || 2

    // console.log("pagesize:",pageSize)
    const skip = (page - 1) * pageSize
    const total = await Album.countDocuments()

    const pages = Math.ceil(total / pageSize)
    query = query.skip(skip).limit(pageSize)


    const qCategory = req.query.genre


    try {

        var albums;
        const result = await query
        // if (qNew) {

        //     albums = await Album.find().sort({ createdAt: -1 }).limit(2)


        if (qCategory) {


            albums = await Album.find({

                genre: { $eq: qCategory }

            }).skip(skip).limit(pageSize)

        } else {

            albums = await Album.find().skip(skip).limit(pageSize)
        }

        res.status(200).json({

            status: "success",
            count: result.length,
            page,
            pages,
            data: albums,

        })



    } catch (err) {

        res.status(500).json(err)


    }
})




module.exports = router
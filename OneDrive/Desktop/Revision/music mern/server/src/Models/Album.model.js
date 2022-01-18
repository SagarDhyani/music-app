
const mongoose = require('mongoose')


const albumSchema = new mongoose.Schema(

    {

        title: {type: String, required: true},
        genre: {type: String, required: true},
        year: {type: String, required: true},
        image: {type: String, required: true},
        songs: {type: Array, required: true},
        artist:{type: String},
        artist_image: {type: String}
    },
    
    {timestamps: true}
)

const Album = mongoose.model("album", albumSchema)

module.exports = Album
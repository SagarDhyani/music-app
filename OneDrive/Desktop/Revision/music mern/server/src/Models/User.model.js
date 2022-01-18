const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(

    {

        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isArtist: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        img: {type: String}
    },

    {timestamps: true}
)



const User = mongoose.model("user", userSchema)

module.exports = User
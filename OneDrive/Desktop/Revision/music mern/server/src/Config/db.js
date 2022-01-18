const mongoose = require("mongoose")



const connect = () =>{

    return mongoose.connect("mongodb+srv://sagar:0007@cluster0.anjp2.mongodb.net/music?retryWrites=true&w=majority")
}

module.exports = connect
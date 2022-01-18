
const jwt = require("jsonwebtoken")
var JWT_SEC = "sanskrit"
var pass = "sanskrit"

const verifyToken = (req, res, next) =>{

    // console.log(req)

    const authHeader = req.headers.token

    

    if(authHeader){

        const token = authHeader.split(" ")[1]
        // console.log("tokes:", token)

        jwt.verify(token, JWT_SEC, (error, user)=>{

            // console.log(user)

            

            if(error) res.status(400).json("Token is not valid")

                req.user = user
               

                next()
            
        });


    }else{

        return res.status(403).json("Authentication failed")


    }

}

const verifyTokenAndAuth = (req, res, next) => { 

    verifyToken(req, res, () =>{

        if(req.user.id === req.params.id && req.user.isArtist) {
            
            next()

        } else {

            res.status(403).json("Only artist can do that")
        }
    })


}

const verifyTokenAndAdmin = (req, res, next) => { 

  

    verifyToken(req, res, () =>{

    

        if(req.user.isAdmin) {
            
            next()
            
        } else {

            res.status(403).json("Only artist can do that")
        }
    })


}






module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin}
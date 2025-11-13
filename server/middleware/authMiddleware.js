const jwt = require('jsonwebtoken')
const User = require("../models/userModel")

const protect = async (req, res, next) => {
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            let token = req.headers.authorization.split(" ")[1]
            let decoded = jwt.verify(token, process.env.JWT_SECRET)
            let user = await User.findById(decoded.id).select("-password")
            if (!user) {
                res.status(404).json("Invalid User Token")
            } else {
                req.user = user
                next()
            }
        } else {
            res.status(401)
                .json({
                    message: "Unauthorised Access!!"
                })
        }
    } catch (error) {
        res.status(401)
            .json({
                message: "Unauthorised Access!!"
            })
    }
}

module.exports = protect
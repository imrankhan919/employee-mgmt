const User = require("../models/userModel")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {

    // Check All Fields
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400).json({
            message: "Please Fill All Details"
        })
    }

    // Check if user exists
    const userExist = await User.findOne({ email: email })

    if (userExist) {
        res.status(400)
            .json({
                message: "User Already Exists"
            })
    }

    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (!user) {
        res.status(400).json({
            message: "User Not Registered!"
        })
    }

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
    })

}

const loginUser = async (req, res) => {
    // Check All Fields
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({
            message: "Please Fill All Details"
        })
    }

    // Check if user exists
    const user = await User.findOne({ email: email })

    if (user && await bcrypt.compare(password, user.password)) {
        res.status(200)
            .json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
    } else {
        res.status(401)
            .json({
                message: "Invalid Credentials"
            })
    }
}


const privateController = (req, res) => {
    console.log(req.user)
    res.json({
        user: req.user,
        message: "I am Private Route (Only Authenticated Can Access Me)"
    })
}


const generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
    return token
}




module.exports = { registerUser, loginUser, privateController }
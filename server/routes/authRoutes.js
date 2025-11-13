const express = require('express')
const { registerUser, loginUser, privateController } = require('../controllers/authController')
const protect = require('../middleware/authMiddleware')


const router = express.Router()

// METHOD : POST
// ENDPOINT : /api/auth/register
// DESC : Register User
router.post("/register", registerUser)

// METHOD : POST
// ENDPOINT : /api/auth
// DESC : Login User
router.post("/login", loginUser)


// METHOD : POST
// ENDPOINT : /api/auth/private
// DESC : Login User
router.post("/private", protect, privateController)


module.exports = router
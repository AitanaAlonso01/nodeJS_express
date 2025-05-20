const userController = require('../controllers/user.controller.js')
const express = require('express')
const router = express.Router()

// Endpoints
// Obtener todos los usuarios
router.get('/', userController.findAll)

module.exports = router

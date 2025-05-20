const userService = require('../services/user.service.js')

exports.findAll = function (req, res) {
  // COD. SERVIDOR = 200 (éxito - success)
  // Formato JSON
  res.status(200).json(userService.findAllUsers())
}

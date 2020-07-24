var router = require('express').Router()
const UserService = require('../services/UserService')

router.route("/login").get(UserService.loginGet).post(UserService.login)

module.exports = router;
var router = require('express').Router()
const {createForm, formsGet} = require('../services/FormService')

router.route("/create").post(createForm)
router.route("/forms").get(formsGet)

module.exports = router;
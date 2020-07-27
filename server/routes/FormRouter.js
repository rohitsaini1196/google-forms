var router = require('express').Router()
const {createForm, formsGet, getFormById, deleteForm, editForm, getAllFormsOfUser} = require('../services/FormService')

router.route("/create").post(createForm)
router.route("/forms").get(formsGet)
router.route("/form/:formId").get(getFormById)
router.route("/deleteform/:formId/:userId").delete(deleteForm)
router.route("/editform").put(editForm)
router.route("/getuserforms/:userId").get(getAllFormsOfUser)


module.exports = router;
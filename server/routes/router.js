var router = require('express').Router()

const UserRouter = require('./UserRouter')

router.use('/user', UserRouter)

router.get('/', (req, res)=>{
    res.send("Router.js working fine")
})


module.exports = router;
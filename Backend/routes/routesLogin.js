const express = require('express')
const {getLogin , postLogin, putLogin, deleteLogin, login} = require('../controller/loginController.js')
const router = express.Router()

router.get ('/login', getLogin)
router.post ('/login', postLogin)
router.put ('/login/:id', putLogin)
router.delete ('/login/:id', deleteLogin)
router.post ('/sign', login)

module.exports = router

const express = require('express')
const {getUser, createUser, putUser, deleteUser} = require('../controller/userController.js')
const router = express.Router()
// user
router.get('/user', getUser)
router.post('/user', createUser)
router.put('/user/:id', putUser)
router.delete('/user/:id', deleteUser)

module.exports = router
const express = require('express')
const {getAbsen, postAbsen, putAbsen, deleteAbsen} = require('../controller/absenController.js')
const router = express.Router()
// absen
router.get('/absen', getAbsen)
router.post('/absen', postAbsen)
router.put('/absen/:id', putAbsen)
router.delete('/absen/:id', deleteAbsen)

module.exports = router
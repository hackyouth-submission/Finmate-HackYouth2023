const express = require('express')
const router = express.Router()

const ctrls = require('../controllers/user')
const { verifyAccessToken } = require('../middleware/verifyToken')

router.post('/register', ctrls.register)

router.post('/login', ctrls.login)
router.get('/current', verifyAccessToken, ctrls.getCurrent)
router.post('/refreshtoken', ctrls.refreshAccessToken)
router.get('/logout', ctrls.logout)



module.exports = router
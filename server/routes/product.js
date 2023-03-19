
const express = require('express')
const router = express.Router()
const ctrls = require('../controllers/product')
const { verifyAccessToken} = require('../middleware/verifyToken')



router.post('/',verifyAccessToken, ctrls.createProduct)
router.get('/', ctrls.getProducts)


router.put('/:pid', ctrls.updateProduct)
router.delete('/:pid', verifyAccessToken, ctrls.deleteProduct)
router.get('/:pid', ctrls.getProduct)


module.exports = router
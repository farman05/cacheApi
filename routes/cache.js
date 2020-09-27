const express = require('express');
const router = express.Router();
const cache = require('../controllers/cache');
const validation = require('../middlewares/validation')
const auth = require('../middlewares/auth')

//get routes
router.get('/singleCachedData',auth,validation.checkKey,cache.singleCachedData)
.get('/allKeys',auth,cache.allKeys);

//delete routes
router.delete('/deleteSingleKey',auth,validation.checkKey,cache.deleteSingleKey)
.delete('/deleteAllKey',auth,cache.deleteAllKey)


router.put('/updateKeyData',auth,validation.checkUpdateForm,cache.updateKeyData)

module.exports = router;
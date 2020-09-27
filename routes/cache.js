const express = require('express');
const router = express.Router();
const cache = require('../controllers/cache');
const validation = require('../middlewares/validation')
const auth = require('../middlewares/auth')


router.get('/singleCachedData',auth,validation.checkKey,cache.singleCachedData)
.get('/allKeys',auth,cache.allKeys);

module.exports = router;
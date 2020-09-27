const express = require('express');
const router = express.Router();
const auth = require('../controllers/auth');


router.get('/authToken',auth.authToken);

module.exports = router;
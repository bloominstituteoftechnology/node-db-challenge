const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({ message: 'WELCOME TO THE NODE DB CHALLENGE SERVER' });
});

module.exports = router;

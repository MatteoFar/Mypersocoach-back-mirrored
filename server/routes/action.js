const express = require ('express');
const router = express.Router();
const connection = require('../config')




router.get ('/', (req, res) =>{
  res.status(200).send('beautiful action! ')
});

module.exports = router
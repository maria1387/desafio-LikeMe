const {Router} = require('express');
// const pool = require('../db')
const {  updateLikeme } = require('../controllers/like.controllers')

const router = Router();

router.put('/posts/like/:id', updateLikeme)

module.exports = router;
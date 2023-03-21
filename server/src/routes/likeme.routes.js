const {Router} = require('express');
// const pool = require('../db')
const { getAllLikeme, getLikeme, createLikeme, deleteLikeme, updateLikeme } = require('../controllers/likeme.controllers')


const router = Router();
//obtener datos
router.get('/posts', getAllLikeme)
//obtener datou una persona
router.get('/posts/:id', getLikeme)
//crear datos
router.post('/posts', createLikeme)
//eliminar datos
router.delete('/posts/:id', deleteLikeme)
// actualizar datos 
router.put('/posts/like/:id', updateLikeme)

module.exports = router;
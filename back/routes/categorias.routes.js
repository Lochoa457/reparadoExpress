const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categorias.controller');

router.get('/', categoryController.listarCategorias);
router.get('/nueva', categoryController.formularioCrearCategoria);
router.post('/', categoryController.crearCategoria);

module.exports = router;
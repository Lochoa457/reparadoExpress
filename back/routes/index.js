const express = require('express');
const router = express.Router();

const categoriasRoutes = require('./categorias.routes');
const usuariosRoutes = require('./usuarios.routes');

router.use('/categorias', categoriasRoutes);
router.use('/usuarios', usuariosRoutes);

module.exports = router;

const exp = require('express');
const router = exp.Router();
const usuariosController = require('../controllers/usuarios.controller');

router.get('/', usuariosController.listarUsuarios);
router.get('/nuevo', usuariosController.formularioCrearUsuario);
router.post('/', usuariosController.crearUsuario);
router.get('/:id', usuariosController.mostrarUsuario);
router.get('/:id/editar', usuariosController.formularioEditar);
router.post('/:id/editar', usuariosController.editarUsuario);
router.post('/:id/eliminar', usuariosController.eliminarUsuario);
router.get('/correo', usuariosController.enviarNotificacion);


module.exports = router;
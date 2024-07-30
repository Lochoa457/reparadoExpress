const userModel = require('../models/usuarios.model');
const sendEmail = require('../utils/emailService');
require('dotenv').config();

exports.listarUsuarios = async (req, res) => {
    try { 
    const usuarios = await userModel.find();
        res.render('pages/usuarios', {usuarios});
    } catch {
        res.status(500).json({"mensaje": "Se presentó un error"});
    }
};

exports.formularioCrearUsuario = (req, res) => {
    res.render('pages/nuevoUsuario')
};

exports.crearUsuario = async (req, res) => {
    try {
        const {correo, pass, rol} = req.body;
        const nuevoUsuario = new userModel({correo, pass, rol});
        await nuevoUsuario.save();
        res.redirect('usuarios');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el usuario");
    }
};

exports.mostrarUsuario = async (req, res) => {
    try{
        let usuario = await userModel.findById(req.params.id);
        if (!usuario) {
            return res.status('pages/usuario', { mensaje: "Usuario no encontrado" })  
        }
        res.render('pages/usuario', { usuario });
    } catch (error) {
        console.error(error);
        res.status(500).render('pages/usuario', { mensaje: "Se presentó un error al consultar el usuario" });
    }
};

exports.formularioEditar = async (req, res) => {
    try {
        const usuario = await userModel.findOne(req.body.correo);
        if (!usuario) return res.status(404).send("Usuario no encontrado");
        res.render('pages/editarUsuario', {usuario});
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al mostrar el formulario de edición");
    }
};

exports.editarUsuario = async (req, res) => {    
    try {
        const { correo, pass, rol } = req.body;
        const usuarioId = req.params.id;

        let resultado = await userModel.findByIdAndUpdate(
            usuarioId,
            {correo, rol, pass},
            {new: true}
        );

        if (!resultado) {
            return res.status(404).render('pages/usuario', {mensaje: "Usuario no encontrado"});
        }

        return res.render('pages/usuario', {usuario: resultado, mensaje: "Usuario actualizado exitosamente"});
    } catch (error) {
        console.log(error);
        return res.status(500).render('pages/usuario', {mensaje: "Se presento un error al actualizar el usuario"});
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        const usuarioId = req.params.id;
        let resultado = await userModel.findByIdAndDelete(
            usuarioId
        );
        const usuarios = await userModel.find();
        return res.render('pages/usuarios', {usuarios});
    } catch (error) {
        res.status(500).send("Error al eliminar el usuario");
    }
};

exports.enviarNotificacion = async (req, res) => {
    // app.get('/enviarCorreo', async (req, res) => {
        await sendEmail.sendEmail(
            "ochoa457@hotmail.com",
            "Confirmación de Registro",
            "Bienvenido a la tienda en línea más top de todo el mundo",
        );
    // });
}

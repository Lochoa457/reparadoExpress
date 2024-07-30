const category = require('../models/categorias.model');
require('dotenv').config();

exports.listarCategorias = async (req, res) => {
    try {
        const categorias = await category.find();
        res.render('categorias/categorias', {categorias});
    } catch {
        res.status(500).json({"mensaje": "Se presento un error"});
    }
};

exports.formularioCrearCategoria = (req, res) => {
    res.render('categorias/nuevaCategoria');
};

exports.crearCategoria = async (req, res) => {
    try {
        const {nombre, descripcion} = req.body;
        const nuevaCategoria = new category({nombre, descripcion});
        await nuevaCategoria.save();
        res.redirect('categorias');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear la categoría");
    }
};


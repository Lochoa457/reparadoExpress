const conexion = require('../config/connections');

const categorySchema = new conexion.Schema({
    nombre: {
        type: String,
        unique: [true, 'La categoría ya existe'],
        required: [true, 'Debe ingresar un nombre válido para la categoría'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [50, 'El nombre no puede exceder los 50 caracteres']
    },
    descripcion: {
        type: String,
        required: [true, 'La categoría debe contener una descripción'],
        minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
        maxlength: [500, 'La descripción no puede exceder los 500 caracteres']
    }
});

categorySchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

const categoryModel = conexion.model('categorias', categorySchema);
module.exports = categoryModel;
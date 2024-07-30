const conexion = require('../config/connections');

const userSchema = new conexion.Schema({
    correo: {
        type: String,
        unique: [true, 'El correo ya existe'],
        required: true
    },
    pass: {
        type: String,
        required: [true, 'La contraseña es necesaria'],
        minLength: [8, 'La contraseña debe ser mínimo de 8 caracteres'],
        maxLength: [20, 'La contraseña debe ser máximo de 20 caracteres']
    },
    rol: {
        type: String,
        default: "guest",
    },
    habilitado: {
        type: Boolean,
        default: true,
    }
});

const userModel = conexion.model('usuarios', userSchema);

module.exports = userModel;

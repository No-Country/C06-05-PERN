const usuario = require("../models/usuarios")

const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();
const apellido = Joi.string()
const email = Joi.string().email();
const contra = Joi.string().min(3);
const createUsuarioSchema = ({
    name: nombre,
    apellido: apellido,
    email: email,
    contra: contra
});

module.exports = createUsuarioSchema
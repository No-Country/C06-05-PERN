const usuarios = require("../models/usuarios")

const USUARIOSTOTALES = {

    getUsuario: async (req, res) => {

        try {
            const TODOSLOSUSUARIOS = await productos.findAll()
            res.json(TODOSLOSUSUARIOS)
        } catch (error) {
            return res.json({ message: error.message })
        }

    },

    crearUsuario: async (req, res) => {


        try {
            const {
                nombre,
                apellido,
                email,
                contra
            } = req.body
            const nuevoUsuario = await productos.create({
                nombre,
                apellido,
                email,
                contra
            })
            res.json(nuevoUsuario)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = USUARIOSTOTALES
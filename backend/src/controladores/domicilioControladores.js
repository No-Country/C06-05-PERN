const usu_domicilio = require("../models/domicModelos")

const TOTALDOMICILIOS = {

    getDomicilio: async (req, res) => {

        try {
            const TODOSLOSDOMICILIOS = await usu_domicilio.findAll()
            res.json(TODOSLOSDOMICILIOS)
        } catch (error) {
            return res.json({ message: error.message })
        }

    },

    crearDomicilio: async (req, res) => {


        try {
            const {
                direccion,
                numero,
                ciudad,
                prov_reg,
                postal

            } = req.body
            const nuevoProducto = await usu_domicilio.create({
                direccion,
                numero,
                ciudad,
                prov_reg,
                postal
            })
            res.json(nuevoProducto)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = TOTALDOMICILIOS
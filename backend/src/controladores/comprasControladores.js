const { compras } = require("../database")

const TOTALCOMPRAS = {

    getCompras: async (req, res) => {

        try {
            const TODOSLASCOMPRAS = await productos.findAll()
            res.json(TODOSLASCOMPRAS)
        } catch (error) {
            return res.json({ message: error.message })
        }

    },

    crearCompras: async (req, res) => {


        try {
            const {
                estado
            } = req.body
            const nuevaCompra = await productos.create({
                estado
            })
            res.json(nuevaCompra)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = TOTALCOMPRAS
const productos = require("../models/productosModelo")

const TOTALPEDIDOS = {

    getPedidos: async (req, res) => {

        try {
            const TODOSLOSPEDIDOS = await productos.findAll()
            res.json(TODOSLOSPEDIDOS)
        } catch (error) {
            return res.json({ message: error.message })
        }

    },

    crearPedidos: async (req, res) => {


        try {
            const {
                unidades_totales,
                precio_total

            } = req.body
            const nuevoPedido = await productos.create({
                unidades_totales,
                precio_total
            })
            res.json(nuevoPedido)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = TOTALPEDIDOS
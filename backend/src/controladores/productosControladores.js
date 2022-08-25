const productos = require("../models/productosModelo")

const TOTALPRODUCTOS = {

    getProductos: async (req, res) => {

        try {
            const TODOSLOSPRODUCTOS = await productos.findAll()
            res.json(TODOSLOSPRODUCTOS)
        } catch (error) {
            return res.json({ message: error.message })
        }

    },

    crearProductos: async (req, res) => {


        try {
            const {
                nombre_prod,
                color,
                comentarios_prod,
                stock,
                precio

            } = req.body
            const nuevoProducto = await productos.create({
                nombre_prod,
                color,
                comentarios_prod,
                stock,
                precio
            })
            res.json(nuevoProducto)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = TOTALPRODUCTOS
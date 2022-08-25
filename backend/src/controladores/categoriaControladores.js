const categorias = require("../models/categoriaModelos")

const TOTALCATEGORIAS = {

    getCat: async (req, res) => {

        try {
            const CATEGORIAS = await categorias.findAll()
            res.json(CATEGORIAS)
        } catch (error) {
            return res.json({ message: error.message })
        }

    },

    crearCat: async (req, res) => {


        try {
            const {
                nombre_categoria
            } = req.body
            const NUEVACATEGORIA = await categorias.create({
                nombre_categoria
            })
            res.json(NUEVACATEGORIA)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = TOTALCATEGORIAS
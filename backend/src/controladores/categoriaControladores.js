const { categorias } = require("../database")

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

    }, borrarCategoria: async (req, res) => {
        const { id } = req.params
        try {
            const UNUSUARIO = await categoria.destroy({
                where: {
                    id,
                },
            })

            /*             res.status(204) */
            res.json(UNUSUARIO)
        } catch (error) {
            return res.json({ message: error.message })
        }

    }, actualizarCategoria: async (req, res) => {
        const { id } = req.params;
        const { nombre, apellido, email, contra } = req.body;
        try {

            const UNUSER = await categoria.findByPk(id)
            UNUSER.nombre_categoria = nombre_categoria

            await UNUSER.save()

            res.json(UNUSER)
        } catch (error) {
            return res.json({ message: error.message })
        }

    }, buscarUnaCategoria: async (req, res) => {
        const { id } = req.params

        try {
            const UNUSUARIO = await categoria.findOne({
                where: {
                    id
                }
            })
            res.json(UNUSUARIO)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }, buscarUnaCategoriaPorNombre: async (req, res) => {

        const { dato, contra } = req.body;
        try {
            const UNUSUARIO = await categoria.findOne({
                where: {
                    [Op.or]: [
                        { nombre: { [Op.like]: "%" + dato + "%" } },
                        { apellido: { [Op.like]: "%" + dato + "%" } },
                        { email: { [Op.like]: "%" + dato + "%" } }],
                    contra: contra
                }
            }

            )
            if (!UNUSUARIO) {
                return res.status(404).json({ message: "datos incorrectos o el usuario no existe" })
            } else {
                res.json(UNUSUARIO)
            }
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

module.exports = TOTALCATEGORIAS
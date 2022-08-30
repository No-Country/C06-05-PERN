const { productos } = require("../database")

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
                precio,
                id_categoria

            } = req.body
            const nuevoProducto = await productos.create({
                nombre_prod,
                color,
                comentarios_prod,
                stock,
                precio,
                id_categoria
            })
            res.json(nuevoProducto)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }, borrarProductos: async (req, res) => {
        const ID = res.params.id
        try {
            const UNPRODUCTO = await productos.findOne({
                where: {
                    id,
                }
            })
            res.json(UNPRODUCTO)
            res.sendStatus(204)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }

    }, actualizarProducto: async (req, res) => {
        const { id } = req.params;
        const { nombre_prod, color, comentarios_prod, stock, imagen, precio, id_categoria } = req.body;
        try {

            const UNUSER = await productos.findByPk(id)
            UNUSER.nombre_prod = nombre_prod
            UNUSER.color = color
            UNUSER.comentarios_prod = comentarios_prod
            UNUSER.stock = stock
            UNUSER.imagen = imagen
            UNUSER.precio = precio
            UNUSER.id_categoria = id_categoria
            await UNUSER.save()

            res.json(UNUSER)
        } catch (error) {
            return res.json({ message: error.message })
        }

    }, buscarUnProducto: async (req, res) => {
        const { id } = req.params

        try {
            const UNUSUARIO = await productos.findOne({
                where: {
                    id
                }
            })
            res.json(UNUSUARIO)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }, buscarUnProductoPorNombre: async (req, res) => {

        const { dato } = req.body;
        try {
            const UNUSUARIO = await productos.findOne({
                where: {
                    [Op.or]: [
                        { nombre_prod: { [Op.like]: "%" + dato + "%" } },
                        { nombre_prod: { [Op.like]: "%" + dato + "%" } }]
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

module.exports = TOTALPRODUCTOS
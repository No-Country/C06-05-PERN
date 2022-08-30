const { pedidos } = require("../database")

const TOTALPEDIDOS = {

    getPedidos: async (req, res) => {

        try {
            const TODOSLOSPEDIDOS = await pedidos.findAll()
            res.json(TODOSLOSPEDIDOS)
        } catch (error) {
            return res.json({ message: error.message })
        }

    },

    crearPedidos: async (req, res) => {


        try {
            const {
                unidades_totales,
                precio_total,
                id_usuario,
                id_productos

            } = req.body
            const nuevoPedido = await pedidos.create({
                unidades_totales,
                precio_total,
                id_usuario,
                id_productos
            })
            res.json(nuevoPedido)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }, borrarPedidos: async (req, res) => {
        const ID = res.params.id
        try {
            const UNPedido = await pedidos.findOne({
                where: {
                    id,
                }
            })
            res.json(UNPedido)
            res.sendStatus(204)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }

    }, actualizarPedido: async (req, res) => {
        const { id } = req.params;
        const { nombre_prod, color, comentarios_prod, stock, imagen, precio, id_categoria } = req.body;
        try {

            const UNUSER = await pedidos.findByPk(id)
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

    }, buscarUnPedido: async (req, res) => {
        const { id } = req.params

        try {
            const UNUSUARIO = await pedidos.findOne({
                where: {
                    id
                }
            })
            res.json(UNUSUARIO)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }, buscarUnPedidoPorNombre: async (req, res) => {

        const { dato } = req.body;
        try {
            const UNUSUARIO = await pedidos.findOne({
                where: {
                    id_usuario,
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

module.exports = TOTALPEDIDOS
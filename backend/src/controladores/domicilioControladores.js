const { domicilio } = require("../database")

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
                postal,
                id_usuario

            } = req.body
            const nuevoProducto = await usu_domicilio.create({
                direccion,
                numero,
                ciudad,
                prov_reg,
                postal,
                id_usuario
            })
            res.json(nuevoProducto)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }, borrarDomicilio: async (req, res) => {
        const { id } = req.params
        try {
            const UNUSUARIO = await domicilio.destroy({
                where: {
                    id,
                },
            })

            /*             res.status(204) */
            res.json(UNUSUARIO)
        } catch (error) {
            return res.json({ message: error.message })
        }

    }, actualizarDomicilio: async (req, res) => {
        const { id } = req.params;
        const { nombre, apellido, email, contra } = req.body;
        try {

            const UNUSER = await domicilio.findByPk(id)
            UNUSER.nombre = nombre
            UNUSER.apellido = apellido
            UNUSER.email = email
            UNUSER.contra = contra
            await UNUSER.save()

            res.json(UNUSER)
        } catch (error) {
            return res.json({ message: error.message })
        }

    }, buscarUnDomicilio: async (req, res) => {
        const { id } = req.params

        try {
            const UNUSUARIO = await domicilio.findOne({
                where: {
                    id
                }
            })
            res.json(UNUSUARIO)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }, buscarUnDomicilioPorNombre: async (req, res) => {

        const { dato, contra } = req.body;
        try {
            const UNUSUARIO = await domicilio.findOne({
                where: {
                    [Op.or]: [
                        { direccion: { [Op.like]: "%" + dato + "%" } },
                        { direccion: { [Op.like]: "%" + dato + "%" } },
                        { postal: { [Op.like]: "%" + dato + "%" } }],
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

module.exports = TOTALDOMICILIOS
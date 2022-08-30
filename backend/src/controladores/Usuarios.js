const { Sequelize } = require('sequelize');
const { usuarios } = require("../database")
const Op = Sequelize.Op
console.log(usuarios);

const USUARIOSTOTALES = {

    getUsuario: async (req, res) => {

        try {
            const TODOSLOSUSUARIOS = await usuarios.findAll()
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
            const nuevoUsuario = await usuarios.create({
                nombre,
                apellido,
                email,
                contra
            })
            res.json(nuevoUsuario)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }, borrarUsuarios: async (req, res) => {
        const { id } = req.params
        try {
            const UNUSUARIO = await usuarios.destroy({
                where: {
                    id,
                },
            })

            /*             res.status(204) */
            res.json(UNUSUARIO)
        } catch (error) {
            return res.json({ message: error.message })
        }

    }, actualizarUsuario: async (req, res) => {
        const { id } = req.params;
        const { nombre, apellido, email, contra } = req.body;
        try {

            const UNUSER = await usuarios.findByPk(id)
            UNUSER.nombre = nombre
            UNUSER.apellido = apellido
            UNUSER.email = email
            UNUSER.contra = contra
            await UNUSER.save()

            res.json(UNUSER)
        } catch (error) {
            return res.json({ message: error.message })
        }

    }, buscarUnUusario: async (req, res) => {
        const { id } = req.params

        try {
            const UNUSUARIO = await usuarios.findOne({
                where: {
                    id
                }
            })
            res.json(UNUSUARIO)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }, buscarUnUusarioPorNombre: async (req, res) => {

        const { dato, contra } = req.body;
        try {
            const UNUSUARIO = await usuarios.findOne({
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

module.exports = USUARIOSTOTALES
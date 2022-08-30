const { Sequelize } = require('sequelize');
const { usuarios } = require("../database")
const Op = Sequelize.Op
console.log(usuarios);

const jwt = require("jsonwebtoken");

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
    },

    signInUser: async (req, res) => {
        const { email, contra } = req.body;

        try {
            const userExist = await usuarios.findOne({
                where: {
                    email,
                },
            });

            if (!userExist) {
                res.json({
                    success: false,
                    message:
                        "No encontramos una cuenta asociada a este email, por favor, registrese",
                });
            } else {

                if (contra) {
                    let passwordMatches = await usuarios.findOne({
                        where: {
                            email: email,
                            contra: contra
                        }
                    }
                    );
                    console.log(passwordMatches);

                    if (passwordMatches) {
                        const userData = {
                            id: userExist.id,
                            nombre: userExist.nombre,
                            apellido: userExist.apellido,
                            email: userExist.email,
                        };
                        console.log("holaaaa");
                        console.log(userExist);

                        console.log(userData);
                        await userExist.save();
                        const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
                            expiresIn: 60 * 60 * 24,
                        });

                        res.json({
                            success: true,
                            response: { token, userData },
                            message: "bienvenido otra vez" + userData.nombre,
                        });
                    }
                } else {

                    res.json({
                        success: false,
                        from: from,
                        message: "su email o password es incorrecto",
                    });

                }
            }
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                message: "ohh, error de mantenimiento. Por favor, comuniquse con soporte",
            });
        }
    },




    signOutUser: async (req, res) => {
        console.log("usuario deslogueado");
        const email = req.body.userData;
        const user = await usuarios.findOne({
            where: {
                email,
            },
        });
        await user.save();
        res.json({
            success: true,
            message: "Su sesion ha sido cerrada",
        });
    },

    verifyToken: (req, res) => {
        if (!req.err) {
            res.json({
                success: true,
                response: {
                    id: req.user.id,
                    nombre: req.user.nombre,
                    apellido: req.user.apellido,
                    email: req.user.email,
                    from: "token",
                },
                message: "Bienvenido una vez mas " + req.user.nombre,
            });
        } else {
            res.json({ success: false, message: "Please signIn again" });
        }
    },









}

module.exports = USUARIOSTOTALES
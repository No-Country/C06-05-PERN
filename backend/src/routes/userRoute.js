
const userRouter = require("./index")
const { usuarios } = require('../database');

const UserService = require('../servicios/usuariosServicios');

const { createUsuarioSchema } = require('../controladores/Usuarios');

const service = new UserService();

userRouter.post('/usuarios',

    async (req, res, next) => {

        try {
            const body = req.body;
            const createUsuarioSchema = await usuarios.create(body);
            res.status(201).json(createUsuarioSchema);
        } catch (error) {
            next(error);
        }
    }
);



module.exports = userRouter;
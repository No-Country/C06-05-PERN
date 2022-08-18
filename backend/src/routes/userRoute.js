
const userRouter = require("./index")
const { models } = require('../database');

const UserService = require('../servicios/usuariosServicios');

const { createUsuarioSchema } = require('../controladores/Usuarios');

const service = new UserService();

userRouter.post('/usuarios',

    async (req, res, next) => {

        try {
            const body = req.body;
            const newCategory = await service.create(body);
            res.status(201).json(newCategory);
        } catch (error) {
            next(error);
        }
    }
);



module.exports = userRouter;

const userRouter = require("./ProductRoutes")
const USUARIOSTOTALES = require("../controladores/Usuarios")
const { getUsuario, crearUsuario } = USUARIOSTOTALES



userRouter.route("/usuarios")
    .get(getUsuario)
    .post(crearUsuario)

userRouter.route("/usuario/id")
    .get()
    .put()
    .delete()




module.exports = userRouter;
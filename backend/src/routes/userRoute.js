
const userRouter = require("./ProductRoutes")
const USUARIOSTOTALES = require("../controladores/Usuarios")
const { getUsuario, crearUsuario, borrarUsuarios, actualizarUsuario, buscarUnUusario, buscarUnUusarioPorNombre } = USUARIOSTOTALES



userRouter.route("/usuarios")
    .get(getUsuario)
    .post(crearUsuario)

userRouter.route("/usuarios/:id")
    .get(buscarUnUusario)
    .put(actualizarUsuario)
    .delete(borrarUsuarios)

userRouter.route("/usuariosnombre")
    .get(buscarUnUusarioPorNombre)



module.exports = userRouter;
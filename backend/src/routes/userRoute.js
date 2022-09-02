
const userRouter = require("./ProductRoutes")
const USUARIOSTOTALES = require("../controladores/Usuarios")
const passport = require("../passport");

const { getUsuario, crearUsuario, borrarUsuarios, actualizarUsuario, buscarUnUusario, buscarUnUusarioPorNombre, signInUser, signOutUser, verifyToken } = USUARIOSTOTALES



userRouter.route("/usuarios")
    .get(getUsuario)
    .post(crearUsuario)

userRouter.route("/usuarios/:id")
    .get(buscarUnUusario)
    .put(actualizarUsuario)
    .delete(borrarUsuarios)

userRouter.route("/usuariosnombre")
    .get(buscarUnUusarioPorNombre)

userRouter.route("/iniciosesion")
    .post(signInUser)

userRouter.route("/cierresesion")
    .post(signOutUser);


userRouter.route("/auth/signintoken").get(
    passport.authenticate("jwt", { session: false }),
    verifyToken);
module.exports = userRouter;
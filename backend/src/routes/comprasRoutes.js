const comprasRoutes = require("express").Router();
const TOTALCOMPRAS = require("../controladores/comprasControladores");
const passport = require("../passport");
const { getCompras, crearCompras } = TOTALCOMPRAS



comprasRoutes.route("/pedidos")
    .get(getCompras)
    .post(passport.authenticate('jwt', { session: false }), crearCompras)

comprasRoutes.route("/pedidos/:id")
    .get()
    .put()
    .delete()

module.exports = comprasRoutes
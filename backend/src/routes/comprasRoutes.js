const comprasRoutes = require("express").Router();
const TOTALCOMPRAS = require("../controladores/comprasControladores")
const { getCompras, crearCompras } = TOTALCOMPRAS



comprasRoutes.route("/pedidos")
    .get(getCompras)
    .post(crearCompras)

comprasRoutes.route("/pedidos/:id")
    .get()
    .put()
    .delete()

module.exports = comprasRoutes
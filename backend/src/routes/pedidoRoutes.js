const petRoutes = require("express").Router();
const TOTALPEDIDOS = require("../controladores/pedidoControladores")
const { getPedidos, crearPedidos } = TOTALPEDIDOS



petRoutes.route("/pedidos")
    .get(getPedidos)
    .post(crearPedidos)

petRoutes.route("/pedidos/id")
    .get()
    .put()
    .delete()

module.exports = petRoutes
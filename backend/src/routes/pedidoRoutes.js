const petRoutes = require("express").Router();
const { borrarPedidos, actualizarPedido, buscarUnPedido } = require("../controladores/pedidoControladores");
const TOTALPEDIDOS = require("../controladores/pedidoControladores")
const { getPedidos, crearPedidos } = TOTALPEDIDOS



petRoutes.route("/pedidos")
    .get(getPedidos)
    .post(crearPedidos)

petRoutes.route("/pedidos/id")
    .get(buscarUnPedido)
    .put(actualizarPedido)
    .delete(borrarPedidos)



module.exports = petRoutes
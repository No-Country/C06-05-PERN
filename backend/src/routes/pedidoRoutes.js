const petRoutes = require("express").Router();
const { borrarPedidos, actualizarPedido, buscarUnPedido } = require("../controladores/pedidoControladores");
const TOTALPEDIDOS = require("../controladores/pedidoControladores");
const passport = require("../passport");
const { getPedidos, crearPedidos } = TOTALPEDIDOS



petRoutes.route("/pedidos")
    .get(getPedidos)
    .post(passport.authenticate('jwt', { session: false }), crearPedidos)

petRoutes.route("/pedidos/:id")
    .get(buscarUnPedido)
    .delete(borrarPedidos)
    .put(passport.authenticate('jwt', { session: false }), actualizarPedido)


module.exports = petRoutes
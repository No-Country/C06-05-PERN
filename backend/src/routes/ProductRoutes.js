const goodsRouter = require("express").Router();
const TOTALPRODUCTOS = require("../controladores/productosControladores")
const { getProductos, crearProductos, borrarProductos, actualizarProducto, buscarUnProducto, buscarUnProductoPorNombre } = TOTALPRODUCTOS



goodsRouter.route("/productos")
    .get(getProductos)
    .post(crearProductos)

goodsRouter.route("/productos/id")
    .get(buscarUnProducto)
    .put(actualizarProducto)
    .delete(borrarProductos)

goodsRouter.route("/productosnombre")
    .get(buscarUnProductoPorNombre)

module.exports = goodsRouter
const goodsRouter = require("express").Router();
const TOTALPRODUCTOS = require("../controladores/productosControladores")
const { getProductos, crearProductos } = TOTALPRODUCTOS



goodsRouter.route("/productos")
    .get(getProductos)
    .post(crearProductos)

goodsRouter.route("/productos/id")
    .get()
    .put()
    .delete()

module.exports = goodsRouter
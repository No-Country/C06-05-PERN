const catRoutes = require("express").Router();
const TOTALCATEGORIAS = require("../controladores/categoriaControladores")
const { getCat, crearCat } = TOTALCATEGORIAS



catRoutes.route("/categorias")
    .get(getCat)
    .post(crearCat)

catRoutes.route("/categorias/id")
    .get()
    .put()
    .delete()

module.exports = catRoutes
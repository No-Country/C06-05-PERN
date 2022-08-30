const catRoutes = require("express").Router();
const { buscarUnaCategoria, actualizarCategoria, borrarCategoria } = require("../controladores/categoriaControladores");
const TOTALCATEGORIAS = require("../controladores/categoriaControladores")
const { getCat, crearCat } = TOTALCATEGORIAS



catRoutes.route("/categorias")
    .get(getCat)
    .post(crearCat)

catRoutes.route("/categorias/id")
    .get(buscarUnaCategoria)
    .put(actualizarCategoria)
    .delete(borrarCategoria)

module.exports = catRoutes
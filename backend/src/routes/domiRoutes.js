const domiRoutes = require("express").Router();
const { actualizarDomicilio, buscarUnDomicilio, borrarDomicilio } = require("../controladores/domicilioControladores");
const TOTALDOMICILIOS = require("../controladores/domicilioControladores")
const { getDomicilio, crearDomicilio } = TOTALDOMICILIOS



domiRoutes.route("/domicilio")
    .get(getDomicilio)
    .post(crearDomicilio)

domiRoutes.route("/domicilio/id")
    .get(buscarUnDomicilio)
    .put(actualizarDomicilio)
    .delete(borrarDomicilio)

module.exports = domiRoutes
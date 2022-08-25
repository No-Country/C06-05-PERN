const domiRoutes = require("express").Router();
const TOTALDOMICILIOS = require("../controladores/domicilioControladores")
const { getDomicilio, crearDomicilio } = TOTALDOMICILIOS



domiRoutes.route("/domicilio")
    .get(getDomicilio)
    .post(crearDomicilio)

domiRoutes.route("/domicilio/id")
    .get()
    .put()
    .delete()

module.exports = domiRoutes
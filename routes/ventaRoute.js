const express = require("express");
const route = express.Router();
const ventaControlador = require("../controllers/ventaController");

route.get("/reporte-ingresos-surtidor", ventaControlador.reporteIngresosPorSurtidor);

module.exports = route;
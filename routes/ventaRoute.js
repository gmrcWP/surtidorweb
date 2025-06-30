const express = require("express");
const route = express.Router();
const ventaControlador = require("../controllers/ventaController");

route.get("/reporte-ingresos-surtidor", ventaControlador.reporteIngresosPorSurtidor);
route.get("/reporte-comisiones-personal", ventaControlador.reporteComisionPersonal);

module.exports = route;
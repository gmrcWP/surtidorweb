const express = require("express");
const route = express.Router();
const abastecimientoController = require("../controllers/abastecimientoController");

route.get("/reporte/abastecimiento-detalle", abastecimientoController.getDetalleAbastecimiento);

module.exports = route;
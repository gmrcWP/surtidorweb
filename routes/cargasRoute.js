const express = require("express");
const route = express.Router();
const cargasController = require("../controllers/cargasController");

route.get("/reporte/facturas-pendientes", cargasController.getFacturasPendientes);
route.get("/reporte/detalle-recargas", cargasController.getDetalleRecarga);
route.get("/reporte/estado-factura", cargasController.getEstadoPago);

module.exports = route;
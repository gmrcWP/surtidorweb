const express = require("express");
const route = express.Router();
const ventasController = require("../controllers/ventasController");

route.get("/reporte/litros-vendidos", ventasController.getLitrosVendidos);
route.get("/reporte/ingresos-producto", ventasController.getIngresosProducto);
route.get("/reporte/ventas-sucursal-empleado", ventasController.getVentasSucursalEmpleado);

module.exports = route;
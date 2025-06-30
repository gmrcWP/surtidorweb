const ventasModel = require("../models/ventasModel");

exports.getLitrosVendidos = (req, res) => {
  const { tipoCombustible, tipoTurno } = req.query;
  ventasModel.litrosVendidos(tipoCombustible, tipoTurno, (err, ventaLitros) => {
    if (err) {
      console.log(err);
    }

    res.render("ventas/ventas_litros", { ventaLitros })
  })
};

exports.getIngresosProducto = (req, res) => {
  const { nombreProducto } = req.query;
  ventasModel.ingresosProducto(nombreProducto, (err, ingresos) => {
    if (err) {
      console.log(err);
    }

    res.render("ventas/ventas_productos", { ingresos })
  })
};

exports.getVentasSucursalEmpleado = (req, res) => {
  const { nombreSucursal, nombreEmpleado } = req.query;
  ventasModel.ventasSucursalEmpleado(nombreSucursal, nombreEmpleado, (err, ventaSucursalEmpleado) => {
    if (err) {
      console.log(err);
    }

    res.render("ventas/ventas_sucursal_empleado", { ventaSucursalEmpleado })
  })
};
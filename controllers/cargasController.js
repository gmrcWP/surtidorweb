const cargasModel = require("../models/cargasModel");

exports.getFacturasPendientes = (req, res) => {
  cargasModel.facturasPendientes((err, facturas) => {
    if (err) {
      console.log(err);
    }

    res.render("cargas/cargas_facturas_pendientes", { facturas })
  })
};

exports.getDetalleRecarga = (req, res) => {
  const { placaVehiculo, fechaInicio, fechaFin } = req.query;
  cargasModel.detalleRecarga(placaVehiculo, fechaInicio, fechaFin, (err, detalle) => {
    if (err) {
      console.log(err);
    }

    res.render("cargas/cargas_detalle_recarga", { detalle })
  })
};

exports.getEstadoPago = (req, res) => {
  const { estadoFactura, fechaInicio, fechaFin } = req.query;
  cargasModel.estadoPago(estadoFactura, fechaInicio, fechaFin, (err, estado) => {
    if (err) {
      console.log(err);
    }

    res.render("cargas/cargas_estado_factura", { estado })
  })
};
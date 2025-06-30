const abastecimientoModel = require("../models/abastecimientoModel");


exports.getDetalleAbastecimiento = (req, res) => {
  const { nombreProveedor, nombreProducto, fechaInicio, fechaFin } = req.query;
  abastecimientoModel.detalleAbastecimiento(nombreProveedor, nombreProducto, fechaInicio, fechaFin, (err, detalle) => {
    if (err) {
      console.log(err);
    }

    res.render("abastecimiento/abastecimiento_detalle", { detalle })
  })
};

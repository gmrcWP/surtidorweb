const db = require("../config/db");

exports.facturasPendientes = (callback) => {
  const consulta = "CALL facturas_pendientes_por_empresa();";
  db.query(consulta, (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.detalleRecarga = (placaVehiculo, fechaInicio, fechaFin, callback) => {
  const consulta = "CALL detalle_cargas_por_vehiculo(?, ?, ?);";
  db.query(consulta, [placaVehiculo, fechaInicio, fechaFin], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.estadoPago = (estadoFactura, fechaInicio, fechaFin, callback) => {
  const consulta = "CALL estado_de_facturas_por_cliente(?, ?, ?);";
  db.query(consulta, [estadoFactura, fechaInicio, fechaFin], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};
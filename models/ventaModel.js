const db = require("../config/db");


exports.ingresosPorSurtidor = (fechaInicio, fechaFin, tipo, metodoPago, callback) => {
  const consulta = "CALL ingresos_por_surtidor_tipo_pago(?,?,?,?);";
  db.query(consulta, [fechaInicio, fechaFin, tipo, metodoPago], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.ingresosContadoCredito = (fechaInicio, fechaFin, callback) => {
  const consulta = "CALL ingresos_contado_vs_credito(?,?);";
  db.query(consulta, [fechaInicio, fechaFin], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.recaudacionGeneral = (fechaInicio, fechaFin, callback) => {
  const consulta = "CALL resumen_recaudacion_general(?,?);";
  db.query(consulta, [fechaInicio, fechaFin], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

// exports.obtenerPedidosPorCamion = (fechaInicio, fechaFin, callback) => {
//   const consulta = "CALL ReportePedidoPorCamion (?, ?);";
//   db.query(consulta, [fechaInicio, fechaFin], (err, resultado) => {
//     if (err) return callback(err);

//     callback(null, resultado[0]);
//   })
// };
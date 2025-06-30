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

// LISTA DE EMPLEADOS
exports.listarEmpleados = (callback) => {
  const consulta = "SELECT id_empleado, nombre FROM empleado";
  db.query(consulta, (err, resultado) => {
    if (err) return callback(err);
    callback(null, resultado);
  });
};

exports.bonificacionEmpleado = (fechaInicio, fechaFin, idEmpleado, callback) => {
  const consulta = "CALL bonificaciones_por_empleado(?,?,?);";
  db.query(consulta, [fechaInicio, fechaFin, idEmpleado], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.bonificacionLitros = (fechaInicio, fechaFin, callback) => {
  const consulta = "CALL calculo_bonificaciones_por_litros(?,?);";
  db.query(consulta, [fechaInicio, fechaFin], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.turnosTrabajados = (callback) => {
  const consulta = "CALL turnos_por_empleado();";
  db.query(consulta, (err, resultado) => {
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
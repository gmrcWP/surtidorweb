const db = require("../config/db");

exports.litrosVendidos = (tipoCombustible, tipoTurno, callback) => {
  const consulta = "CALL litros_por_tipo_y_turno(?, ?);";
  db.query(consulta, [tipoCombustible, tipoTurno], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.ingresosProducto = (nombreProducto, callback) => {
  const consulta = "CALL ingresos_por_productos_complementarios(?);";
  db.query(consulta, [nombreProducto], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.ventasSucursalEmpleado = (nombreSucursal, nombreEmpleado, callback) => {
  const consulta = "CALL ventas_por_sucursal_y_operario(?, ?);";
  db.query(consulta, [nombreSucursal, nombreEmpleado], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

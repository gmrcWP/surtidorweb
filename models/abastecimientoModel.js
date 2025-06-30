const db = require("../config/db");

exports.detalleAbastecimiento = (nombreProveedor, nombreProducto, fechaInicio, fechaFin, callback) => {
  const consulta = "CALL nivel_actual_por_producto(?, ?, ?, ?);";
  db.query(consulta, [nombreProveedor, nombreProducto, fechaInicio, fechaFin], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};
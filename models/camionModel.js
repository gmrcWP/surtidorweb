const db = require("../config/db");

exports.traerTodosLosCamiones = (callback) => {
  const consulta = "SELECT * FROM camion";
  db.query(consulta, (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado);
  })
};


exports.obtenerCamionesNoUtilizados = (fechaInicio, fechaFin, callback) => {
  const consulta = "CALL CamionesNoUtilizados(?, ?);";
  db.query(consulta, [fechaInicio, fechaFin], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};

exports.obtenerPedidosPorCamion = (fechaInicio, fechaFin, callback) => {
  const consulta = "CALL ReportePedidoPorCamion (?, ?);";
  db.query(consulta, [fechaInicio, fechaFin], (err, resultado) => {
    if (err) return callback(err);

    callback(null, resultado[0]);
  })
};
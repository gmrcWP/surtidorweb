const camionModel = require("../models/camionModel");

exports.traerCamiones = (req, res) => {
  camionModel.traerTodosLosCamiones((err, camion) => {
    if (err) {
      console.log(err);
    }
    console.log(camion);
    res.render("camion/camion", { camion })
  })
};

// CAMIONES NO UTILIZADOS
exports.reporteCamionesNoUtilizados = (req, res) => {
  const { fechaInicio, fechaFin } = req.query;
  camionModel.obtenerCamionesNoUtilizados(fechaInicio, fechaFin, (err, camion) => {
    if (err) {
      console.log(err);
    }
    console.log(camion);
    res.render("camion/camionesNoUtilizados", { camiones: camion })
  })
};

exports.reportePedidosPorCamion = (req, res) => {
  const { fechaInicio, fechaFin } = req.query;
  camionModel.obtenerPedidosPorCamion(fechaInicio, fechaFin, (err, camion) => {
    if (err) {
      console.log(err);
    }
    console.log(camion);
    res.render("camion/pedidosPorCamion", { pedidos: camion })
  })
};
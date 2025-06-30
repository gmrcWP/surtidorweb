const ventaModel = require("../models/ventaModel");


// INGRESOS POR SURTIDOR
exports.reporteIngresosPorSurtidor = (req, res) => {
  let { fechaInicio, fechaFin, tipoProducto, metodoPago } = req.query;

  fechaInicio = fechaInicio || '2025-01-01';
  fechaFin = fechaFin || '2025-12-31';
  tipoProducto = tipoProducto || '%';
  metodoPago = metodoPago || '%';

  ventaModel.ingresosPorSurtidor( fechaInicio, fechaFin, tipoProducto, metodoPago, (err1, venta) => {
    if (err1) {
      console.log(err1);
    }

    ventaModel.ingresosContadoCredito( fechaInicio, fechaFin, (err2, ventasContadoCredito) => {
        if (err2) {
            console.log(err2);
        }

        ventaModel.recaudacionGeneral( fechaInicio, fechaFin, (err3, ventaRecaudacionGeneral) => {
            if (err3) {
                console.log(err3);
            }

            console.log(venta);
            res.render("venta/ingresosPorSurtidor", { 
                ventas: venta,
                fechaInicio: fechaInicio,
                fechaFin: fechaFin,
                tipoProducto: tipoProducto,
                metodoPago: metodoPago,
                ventasContadoCredito: ventasContadoCredito,    
                ventaRecaudacionGeneral: ventaRecaudacionGeneral,    
            })
        })
    })
    
  })
};

// exports.reportePedidosPorCamion = (req, res) => {
//   const { fechaInicio, fechaFin } = req.query;
//   camionModel.obtenerPedidosPorCamion(fechaInicio, fechaFin, (err, camion) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(camion);
//     res.render("camion/pedidosPorCamion", { pedidos: camion })
//   })
// };
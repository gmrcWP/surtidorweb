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


// COMISIONES POR PERSONAL
exports.reporteComisionPersonal = (req, res) => {
  let { fechaInicio, fechaFin, idEmpleado } = req.query;

  fechaInicio = fechaInicio || '2025-01-01';
  fechaFin = fechaFin || '2025-12-31';
  idEmpleado = idEmpleado || 0;

  ventaModel.listarEmpleados((errEmpleados, empleados) => {
    if (errEmpleados) {
      console.log(errEmpleados);
      return res.status(500).send("Error al obtener empleados");
    }

    ventaModel.bonificacionEmpleado( fechaInicio, fechaFin, idEmpleado, (err1, bonificacion) => {
      if (err1) {
        console.log(err1);
      }

      ventaModel.bonificacionLitros( fechaInicio, fechaFin, (err2, bonificacionLitros) => {
          if (err2) {
              console.log(err2);
          }

          ventaModel.turnosTrabajados( (err3, turnos) => {
              if (err3) {
                  console.log(err3);
              }

              console.log(empleados)
              console.log(bonificacion);
              res.render("bonos/bonos", { 
                  bonificaciones: bonificacion,
                  fechaInicio: fechaInicio,
                  fechaFin: fechaFin,
                  empleados: empleados,
                  idEmpleado: idEmpleado,
                  bonificacionLitros: bonificacionLitros,
                  turnos: turnos,
              })
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
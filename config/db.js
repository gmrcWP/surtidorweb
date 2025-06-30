const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'surtidordb',
});

connection.connect((error) => {
  if (error) {
    console.log("No se logro la conexion", error);
  } else {
    console.log("Se conecto exitosamente");
  }
});

module.exports = connection;

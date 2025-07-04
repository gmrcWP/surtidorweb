const express = require("express");
const app = express();
const engine = require("ejs-mate");
const camionRoute = require("./routes/camionRoute");
const ventaRoute = require("./routes/ventaRoute");
//const camionRoute = require("./routes/camionRoute");
const ventasRoute = require("./routes/ventasRoute");
const cargasRoute = require("./routes/cargasRoute");
const abastecimientoRoute = require("./routes/abastecimientoRoute");
const path = require("path");

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/bootstrap", express.static(path.join(__dirname, "node_modules/bootstrap/dist")));

app.get("/", (req, res) => {
  res.render("home"); // Asegúrate de tener views/index.ejs
});

app.use("/", ventaRoute);
//app.use("/", camionRoute);
app.use("/", ventasRoute);
app.use("/", cargasRoute);
app.use("/", abastecimientoRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server on");
})
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./back/routes/index");

// Configura el motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/front/views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/front/statics/")));

app.use(express.json());
app.use("/v1", routes);

app.listen(9999, () => {
  console.log("Servidor iniciado en http://localhost:9999");
});

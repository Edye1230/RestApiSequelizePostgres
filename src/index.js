/*const express = require('express');
const bodyParser = require('body-parser');*/

import app from "./app.js";
import { sequelize } from "./database/database.js";

/*import './models/Project.js';
import './models/Task.js'*/

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3000);
    console.log("Servidor arrancado en el puerto 3000");
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
}

main();

app.get("/", (req, res) => {
  res.send("Servidor en línea");
});

//npm init -y //inicializa el proyecto
//npm install express
//npm install postgres
//npm install sequelize
//npm install body-parser
//npm install --save pg pg-hstore # Postgres
//npm install nodemon -D
//npm install morgan

//npx nodemon index.js //inicia el servidor
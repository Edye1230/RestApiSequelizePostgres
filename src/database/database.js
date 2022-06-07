import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

/*const Sequelize = require('sequelize');

const PeliculasModel = require ('../../models/peliculas');

const sequelize = new Sequelize('sql10495580', 'sql10495580', 'RaFzpQp9n9', 
{ 
    host: 'sql10.freemysqlhosting.net',
    dialect: 'postgres'
});
//Configuración para la base de datos, libreria sequelize
const Peli = PeliculasModel(sequelize, Sequelize);

sequelize.sync( {force: false} )
    .then(() => {
        console.log('Tablas sincronizadas');
    });

module.exports = {
    Peli
};*/

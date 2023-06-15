import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "3919", {
  host: "127.0.0.1",
  dialect: "postgres",
  port: "5454"
});



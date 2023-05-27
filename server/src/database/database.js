import Sequelize from "sequelize";

// conexion a la base de datos
export const sequelize = new Sequelize("recetasdb", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres",
});

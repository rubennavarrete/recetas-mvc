import Sequelize from "sequelize";

// conexion a la base de datos
export const sequelize = new Sequelize("recetasdb", "postgres", "Holamundo14", {
  host: "localhost",
  dialect: "postgres",
});

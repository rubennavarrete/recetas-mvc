import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize(
  "railway",
  "postgres",
  "XTmJSgysEpXkeT3JVv2A",
  {
    host: "containers-us-west-118.railway.app",
    dialect: "postgres",
    port: 6052,
  }
);

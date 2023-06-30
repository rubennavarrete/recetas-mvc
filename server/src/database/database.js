import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize(
  "recetasdb",
   "postgres", 
   "pr@ct1c@5", 
   {
    host: "143.110.144.231",
    logging: false,
    dialect: "postgres",
  } 
);



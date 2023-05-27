import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Receta = sequelize.define(
  "receta",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    str_nombre: {
      type: DataTypes.STRING(100),
    },
    str_image: {
      type: DataTypes.TEXT,
    },
    str_preparacion: {
      type: DataTypes.TEXT,
    },
    str_dificultad: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
  }
);

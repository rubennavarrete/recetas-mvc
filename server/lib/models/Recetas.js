"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Receta = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var Receta = _database.sequelize.define("receta", {
  id_receta: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  str_receta_nombre: {
    type: _sequelize.DataTypes.STRING(100)
  },
  str_autor_nombre: {
    type: _sequelize.DataTypes.STRING
  },
  str_autor_telefono: {
    type: _sequelize.DataTypes.STRING
  },
  str_autor_correo: {
    type: _sequelize.DataTypes.STRING
  },
  str_receta_image: {
    type: _sequelize.DataTypes.TEXT
  },
  str_receta_preparacion: {
    type: _sequelize.DataTypes.TEXT
  },
  str_receta_dificultad: {
    type: _sequelize.DataTypes.STRING(50)
  }
}, {
  timestamps: false
  // schema: "alimentos",
});
exports.Receta = Receta;
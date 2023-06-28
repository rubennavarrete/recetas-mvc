"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usuario = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var _Recetas = require("./Recetas.js");
var Usuario = _database.sequelize.define("usuario", {
  id_usuario: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  str_nombre: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false
  },
  str_apellido: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false
  },
  str_email: {
    type: _sequelize.DataTypes.STRING(100),
    allowNull: false
  },
  str_password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  str_telefono: {
    type: _sequelize.DataTypes.STRING(10),
    allowNull: false
  }
}, {
  timestamps: false
  // schema: "alimentos",
});

/*Usuario.hasMany(Receta, { foreignKey: "usuarioId", sourceKey: "id" });
Receta.belongsTo(Usuario, { foreignKey: "usuarioId", sourceKey: "id" });*/
exports.Usuario = Usuario;
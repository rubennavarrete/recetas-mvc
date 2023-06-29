"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// conexion a la base de datos

var sequelize = new _sequelize["default"]("railway", "postgres", "XTmJSgysEpXkeT3JVv2A", {
  host: "containers-us-west-118.railway.app",
  dialect: "postgres",
  port: 6052
});
exports.sequelize = sequelize;
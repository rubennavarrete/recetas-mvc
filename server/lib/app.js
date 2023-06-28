"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _usuariosRoutes = _interopRequireDefault(require("./routes/usuarios.routes.js"));
var _recetasRoutes = _interopRequireDefault(require("./routes/recetas.routes.js"));
var _cors = _interopRequireDefault(require("cors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();

// mideleware
app.use(_express["default"].json());
var whiteList = ["http://localhost:4200", "https://localhost:4200", "https://inventario-espoch.rubenvn.com"];
app.use((0, _cors["default"])({
  credentials: true,
  origin: whiteList
}));
// routes

app.use(_usuariosRoutes["default"]);
app.use(_recetasRoutes["default"]);
var _default = app;
exports["default"] = _default;
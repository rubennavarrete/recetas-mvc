"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuariosController = require("../controllers/usuarios.controller.js");
var router = (0, _express.Router)();
router.use('/info', function (req, res, next) {
  res.json({
    status: 200,
    message: 'OK',
    version: '1.0.0'
  });
});

// /api/usuarios/
router.get("/usuario", _usuariosController.getUsuarios);
router.post("/usuario", _usuariosController.createUsuario);
router.get("/usuario/:id", _usuariosController.getUsuarioById);
router.put("/usuario/:id", _usuariosController.updateUsuario);
router["delete"]("/usuario/:id", _usuariosController.deleteUsuario);
router.get("/usuario/:id/recetas", _usuariosController.getUsuarioRecetas);
var _default = router;
exports["default"] = _default;
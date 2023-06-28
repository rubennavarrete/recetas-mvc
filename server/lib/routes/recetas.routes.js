"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _recetasController = require("../controllers/recetas.controller.js");
var router = (0, _express.Router)();
router.get("/receta", _recetasController.getRecetas);
router.get("/receta/:id", _recetasController.getRecetaById);
router.post("/receta", _recetasController.createReceta);
router.put("/receta/:id", _recetasController.updateReceta);
router["delete"]("/receta/:id", _recetasController.deleteReceta);
var _default = router;
exports["default"] = _default;
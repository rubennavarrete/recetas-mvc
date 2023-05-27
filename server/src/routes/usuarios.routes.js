import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  getUsuarioRecetas,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controllers/usuarios.controller.js";

const router = Router();

// /api/usuarios/
router.get("/usuario", getUsuarios);
router.post("/usuario", createUsuario);
router.get("/usuario/:id", getUsuarioById);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);
router.get("/usuario/:id/recetas", getUsuarioRecetas);

export default router;

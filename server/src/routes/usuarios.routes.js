import { Router } from "express";
import {
  getUsuarios,
  createUsuario,
  getUsuarioById,
} from "../controllers/usuarios.controller.js";

const router = Router();

// /api/usuarios/
router.get("/usuario", getUsuarios);
router.post("/usuario", createUsuario);
router.get("/usuario/:id", getUsuarioById);

export default router;

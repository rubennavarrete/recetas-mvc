import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  createUsuario
} from "../controllers/usuarios.controller.js";

const router = Router();

// /api/usuarios/
router.get("/usuario", getUsuarios);
router.get("/usuario/:id", getUsuarioById);
router.post("/usuario", createUsuario);

export default router;

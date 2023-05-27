import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
} from "../controllers/usuarios.controller.js";

const router = Router();

// /api/usuarios/
router.get("/usuario", getUsuarios);
router.get("/usuario/:id", getUsuarioById);

export default router;

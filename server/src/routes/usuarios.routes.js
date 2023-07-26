import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  getUsuarioRecetas,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  validarLogin
} from "../controllers/usuarios.controller.js";

const router = Router();

router.use('/info', (req, res, next) => {
  res.json({
    status: 200,
    message: 'OK',
    version: '1.0.0'
  })
});

//router.use(verificarToken);
router.post("/login", validarLogin);

router.get("/usuario", getUsuarios);
router.post("/usuario", createUsuario);
router.get("/usuario/:id", getUsuarioById);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);
router.get("/usuario/:id/recetas", getUsuarioRecetas);

export default router;

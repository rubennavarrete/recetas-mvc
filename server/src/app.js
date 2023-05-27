import express from "express";
import usuarioRautes from "./routes/usuarios.routes.js";
import recetaRoutes from "./routes/recetas.routes.js"


const app = express();

// mideleware
app.use(express.json());

// routes
app.use(usuarioRautes);
app.use(recetaRoutes)

export default app;

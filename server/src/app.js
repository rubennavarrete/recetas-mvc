import express from "express";
import usuarioRautes from "./routes/usuarios.routes.js";

const app = express();

// mideleware
app.use(express.json());

// routes
app.use(usuarioRautes);

export default app;

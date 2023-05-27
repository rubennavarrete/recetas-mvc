import { Usuario } from "../models/Usuario.js";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json({
      usuarios,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findOne({
      where: {
        id,
      },
    });

    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json({
      usuario,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const { str_nombre, str_apellido, str_email, str_password, str_telefono } =
      req.body;

    const usuario = await Usuario.create({
      str_nombre,
      str_apellido,
      str_email,
      str_password,
      str_telefono,
    });

    res.json({
      message: "Usuario creado satisfactoriamente",
      usuario,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

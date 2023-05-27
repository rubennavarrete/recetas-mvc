import { Usuario } from "../models/Usuario.js";
import { Receta } from "../models/Recetas.js";

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

export const getUsuarioRecetas = async (req, res) => {
  try {
    const { id } = req.params;
    const receta = await Receta.findAll({
      where: {
        usuarioId: id,
      },
    });
    res.json({
      receta,
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
    console.log("no se creo el usuario por: ", error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findOne({
      where: {
        id,
      },
    });

    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });

    usuario.set(req.body);
    await usuario.save();

    res.json({
      message: "Usuario actualizado satisfactoriamente",
      usuario,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.destroy({
      where: {
        id,
      },
    });

    if (!usuario)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

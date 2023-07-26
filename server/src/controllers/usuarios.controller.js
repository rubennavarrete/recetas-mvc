import { Usuario } from "../models/Usuario.js";
import { Receta } from "../models/Recetas.js";
import { sequelize } from "../database/database.js";
import jwt from "jsonwebtoken";
import { jwtVariables } from "../config/variables.config.js"


export const validarLogin = async (req, res) => {
  console.log("validaLogin");
  console.log(req.body);

  const tokenUsuario = {
    user: req.body.user,
    password: req.body.password

  };

  const token = jwt.sign(tokenUsuario, jwtVariables.jwtSecret, {
    expiresIn: "1d",
  });

  console.log("token generado",token);

  const token2 = jwt.verify(token, jwtVariables.jwtSecret);
  console.log("token con los datos",token2);


  /*res.cookie("token", token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // que sea misma hora que el token
    httpOnly: false,
    sameSite: "none",
    secure: true,
    damin:"localhost"
  });*/

  res.json({
    status: true,
    message: "Credenciales correctas",
    token: token,
  })
};

export const getUsuarios = async (req, res) => {

  const { usuario, contrasenia } = req.query;
  console.log(req.query);
  try {
    const validar = await sequelize.query(
      `SELECT * FROM alimentos.usuario  WHERE str_nombre = '${usuario}' AND str_password = '${contrasenia}'`
    );
   if(validar[0].length === 1){
    return res.json({
      status: true,
      message: "Credenciales correctas",
      body: validar[0],
    });
   }

   return res.json({
    status: false,
    message: "Credenciales incorrectas",
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

  
  //const { usuario, password } = req.body;
  const  usuario = req.body.data.usuario;
  const  password = req.body.data.password;
  console.log(usuario, password);
  
  try {
    const validar = await sequelize.query(
      `SELECT * FROM alimentos.usuario  WHERE str_nombre = '${usuario}' AND str_password = '${password}'`
    );
   if(validar[0].length === 1){
    return res.json({
      status: true,
      message: "Credenciales correctas",
      body: validar[0],
    });
   }

   return res.json({
    status: false,
    message: "Credenciales incorrectas",
  });
   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  /*try {
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
  }*/
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

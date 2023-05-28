import { Receta } from "../models/Recetas.js";

export const getRecetas = async (req, res) => {
  try {
    const recetas = await Receta.findAll();
    res.json({ recetas });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getRecetaById = async (req, res) => {
  try {
    const { id } = req.params;
    const receta = await Receta.findOne({
      where: {
        id,
      },
    });

    if (!receta)
      return res.status(400).json({ message: "Receta no encontrada" });

    res.json({
      receta,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const createReceta = async (req, res) => {
  try {
    // const {
    //   str_nombre,
    //   str_image,
    //   str_preparacion,
    //   str_dificultad,
    //   usuarioId,
    // } = req.body;

        const { str_nombre, str_image, str_preparacion, str_dificultad, usuarioId} = req.body;

    res.json({
      message: "Receta creada correctamente",
      receta,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteReceta = async (req, res) => {
  const { id } = req.params;

    try {
        const deleteRowReceta = await Receta.destroy({
            where: {
                id,
            }
        })
        console.log("La receta", deleteRowReceta, "se elimino con exito");
        return res.sendStatus(204) //significa ok

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
};

export const updateReceta = async (req, res) => {
  const { id } = req.params;
  try {
    const updateRecets = await Receta.findOne({
      where: {
        id,
      },
    });

    updateRecets.set(req.body);
    await updateRecets.save();
    return res.json(updateRecets);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

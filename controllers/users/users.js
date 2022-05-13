const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("../../models/usuario");

const getUsers = async (req = request, res = response) => {
  const users = await Usuario.find();

  if (users) {
    res.json({
      users,
    });
    return;
  }

  res.status(400).json({
    msg: "No se ha podido obtener los usuarios correctamente",
  });
};

const putUsers = async (req, res = response) => {
  const { id } = req.params;
  const { idPerson, nickname, status } = req.body;
  const user = await Usuario.findById(id);

  if (user) {
    user.idPerson = idPerson;
    user.nickname = nickname;
    user.status = status;
    await user.save();

    res.json({
      msg: "Usuario editado correctamente",
      user,
    });
    return;
  }

  res.json({
    msg: "Error al editar usuario",
  });
};

const loginUsers = async (req, res = response) => {
  const { correo, password } = req.body;

  const user = await Usuario.findOne({ correo });

  const isValidPassword = await bcryptjs.compare(password, user.password);

  if (isValidPassword) {
    const { estado, nombre, usuario } = user;
    res.status(200).json({
      msg: "Login exitoso",
      usuario: {
        estado,
        nombre,
        usuario,
        correo,
      },
    });
  } else {
    res.status(400).json({
      msg: "Contraseña incorrecta",
    });
  }
};

const postUsers = async (req, res = response) => {
  const { idPerson, nickname, password, status } = req.body;
  const user = new Usuario({ idPerson, nickname, password, status });

  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);
  //Guardar en BD
  await user.save();

  res.json({
    user,
  });
};
const deleteUsers = async (req, res = response) => {
  const { id } = req.params;
  const user = await Usuario.findById(id);

  if (user) {
    user.remove();
    res.json({
      msg: "Eliminado Correctamente",
    });
    return;
  }

  res.json({
    msg: "Error al eliminar usuario",
  });
};
const patchUsers = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

module.exports = {
  getUsers,
  putUsers,
  postUsers,
  deleteUsers,
  patchUsers,
  loginUsers,
};

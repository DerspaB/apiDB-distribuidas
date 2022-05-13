const { response, request } = require("express");
const Persona = require("../../models/persona");

const getPersons = async (req = request, res = response) => {
  const persons = await Persona.find();

  if (persons) {
    res.json({
      persons,
    });
    return;
  }

  res.status(400).json({
    msg: "No se ha podido obtener las personas correctamente",
  });
};

const putPersons = async (req, res = response) => {
  const { id } = req.params;
  const { name, lastname, email, phone } = req.body;
  const person = await Persona.findById(id);

  if (person) {
    person.name = name;
    person.lastname = lastname;
    person.email = email;
    person.phone = phone;
    await person.save();

    res.json({
      msg: "Persona editada correctamente",
      person: person,
    });
    return;
  }

  res.json({
    msg: "Error al editar persona",
  });
};

const postPersons = async (req, res = response) => {
  const { name, lastname, email, phone } = req.body;
  const person = new Persona({ name, lastname, email, phone });

  //Guardar en BD
  await person.save();

  res.json({
    person: person,
  });
};
const deletePersons = async (req, res = response) => {
  const { id } = req.params;
  const person = await Persona.findById(id);

  if (person) {
    person.remove();
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
  getPersons,
  putPersons,
  postPersons,
  deletePersons,
  patchUsers,
};

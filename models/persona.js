const mongoose = require("mongoose");

const dbAzure = mongoose.createConnection(process.env.MONGOAZURE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const personaSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  lastname: {
    type: String,
    required: [true, "The lastname is required"],
  },
  email: {
    type: String,
    required: [true, "The email is required"],
  },
  phone: {
    type: String,
    required: [true, "The phone is required"],
  },
});

personaSchema.methods.toJSON = function () {
  debugger;
  const { __v, ...persona } = this.toObject();
  return persona;
};

module.exports = dbAzure.model("Persona", personaSchema);

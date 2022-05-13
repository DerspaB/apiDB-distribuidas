const mongoose = require("mongoose");

const dbAtlas = mongoose.createConnection(process.env.MONGODBB_CNN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const usuarioSchema = mongoose.Schema({
  idPerson: {
    type: Number,
    required: [true, "The person id is required"],
  },
  nickname: {
    type: String,
    required: [true, "The nickname is required"],
  },
  password: {
    type: String,
    required: [true, "The password is required"],
  },
  status: {
    type: Boolean,
    default: false,
  },
});

usuarioSchema.methods.toJSON = function () {
  debugger;
  const { __v, ...usuario } = this.toObject();
  return usuario;
};

module.exports = dbAtlas.model("Usuario", usuarioSchema);

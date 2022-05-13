const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const dbAtlas = await mongoose.createConnection(process.env.MONGODBB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Base de datos online");
    return dbAtlas;
  } catch (error) {
    console.log(error);
    throw new Error("Error en la hora de iniciar la base de datos");
  }
};
const dbAzureConnection = async () => {
  try {
    const dbAzure = await mongoose.createConnection(process.env.MONGOAZURE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("Base de datos de azure online");
    return dbAzure;
  } catch (error) {
    console.log(error);
    throw new Error("Error en la hora de iniciar la base de datos de azure");
  }
};

module.exports = {
  dbConnection,
  dbAzureConnection,
};

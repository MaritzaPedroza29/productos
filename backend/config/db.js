//importaciones
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//se obtiene las variables de entorno
dotenv.config();

//función para conectarse a la base de datos
const connectDB = async () => {
  try {
  //hace una petición para conectarse a la base de datos, se utiliza la función de connect y se le pasa la configuración necesaria, como la url, el puerto y la familia
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      family: 4,
    });
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

//se exporta el modulo para poder utilizarlo en otra parte del código
module.exports = connectDB;


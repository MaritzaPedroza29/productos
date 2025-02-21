//exportamos librerias y modulos
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');
const precioEspecialRoutes = require("./routes/specialPriceRoutes");
const cors = require("cors");

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

const app = express(); // Inicializamos la aplicación Express

/**
 * Configuración de CORS para permitir solicitudes desde el frontend.
 * 
 * - `origin`: Solo permite solicitudes desde "http://localhost:3000".
 * - `methods`: Define los métodos HTTP permitidos (GET, POST, PUT, DELETE).
 * - `allowedHeaders`: Especifica los encabezados permitidos en las solicitudes.
 */
const corsOptions = {
  origin: "http://localhost:3000", // Permitir solo este frontend
  methods: "GET,POST,PUT,DELETE", // Métodos HTTP permitidos
  allowedHeaders: "Content-Type,Authorization", // Encabezados permitidos
};

// Aplicamos la configuración de CORS a nuestra aplicación
app.use(cors(corsOptions));

// Habilitamos la capacidad de Express para manejar datos en formato JSON
app.use(express.json());

// Conectamos la base de datos
connectDB();

// Definimos las rutas de la API para los productos
app.use('/api/products', productRoutes);

// Definimos las rutas de la API para los precios especiales
app.use("/api", precioEspecialRoutes);

/**
 * Definimos el puerto en el que correrá el servidor.
 * 
 * - Primero intenta obtener el puerto desde las variables de entorno (`process.env.PORT`).
 * - Si no está definido, usa el puerto 5000 por defecto.
 */
const PORT = process.env.PORT || 5000;

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

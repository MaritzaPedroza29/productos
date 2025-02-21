//se realiza la importación de la libreria de MongoDB.
const mongoose = require('mongoose');

//Definimos el esquema del producto en la base de datos.
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },// Nombre del producto, obligatorio
  price: { type: Number, required: true },// precio del producto, obligatorio
  description: { type: String, required: true },// descripción del producto, obligatorio
});

/**
 * Modelo de Producto basado en el esquema definido.
 * 
 * - Se guarda en la colección 'productos' en la base de datos.
 * - Permite realizar operaciones como crear, leer, actualizar y eliminar productos.
 */
const Product = mongoose.model('productos', productSchema);

// Exportamos el modelo para usarlo en otras partes del proyecto
module.exports = Product;
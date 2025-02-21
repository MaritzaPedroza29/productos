//exportamos librerias y modulos
const express = require('express');
const { getProducts, getProductByName} = require('../controllers/productController');

const router = express.Router();

//ruta para obtener los productos
router.get('/', getProducts);
// Ruta para obtener un producto por su nombre
router.get("/:name", getProductByName);

// Exportamos el modelo para usarlo en otras partes del proyecto
module.exports = router;
//exportamos librerias y modulos
const express = require("express");
const { addSpecialPrice, getSpecialPriceByUserAndProduct, getSpecialPrices } = require("../controllers/specialPriceController"); // Importar correctamente

const router = express.Router();

//Ruta para agregar un precio especial
router.post("/special-price", addSpecialPrice);
//Ruta para obtener los precios especiales
router.get("/special-price", getSpecialPrices);
// Ruta para obtener el precio especial de un usuario para un producto
router.get("/special-price/:userId/:productId", getSpecialPriceByUserAndProduct);

// Exportamos el modelo para usarlo en otras partes del proyecto
module.exports = router;
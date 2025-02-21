//se realiza la importación de la libreria de MongoDB.
const mongoose = require("mongoose");

//Definimos el esquema de los precios especiales en la base de datos.
const SpecialPriceSchema = new mongoose.Schema(
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },// el id del usuario de los precios especiales, obligatorio
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },// el id del producto de los precios especiales, obligatorio
      price: { type: Number, required: true },// el precio de los precios especiales, obligatorio
    },
    { timestamps: true } // Agrega createdAt y updatedAt automáticamente
  );

// El nombre del modelo es "preciosEspecialesPedroza29"
const SpecialPrice = mongoose.model("preciosEspecialesPedroza29", SpecialPriceSchema);

// Exportamos el modelo para usarlo en otras partes del proyecto
module.exports = SpecialPrice;
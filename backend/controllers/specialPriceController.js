//se realizan importaciones
const SpecialPrice = require("../models/SpecialPrice");
const Product = require("../models/Product"); // Product model

// agregar un precio especial
const addSpecialPrice = async (req, res) => {
  try {
    // Extraemos los datos del cuerpo de la solicitud
    const { userId, productId, price } = req.body;

    // Verificamos si ya existe un precio especial para este producto y usuario
    const existingSpecialPrice = await SpecialPrice.findOne({ userId, productId });

    if (existingSpecialPrice) {
      // Si ya existe, actualizamos el precio
      existingSpecialPrice.price = price;
      await existingSpecialPrice.save();

      return res.status(200).json({ 
        message: "Special price updated", 
        data: existingSpecialPrice 
      });
    }

    // Si no existe, creamos un nuevo precio especial
    const newSpecialPrice = new SpecialPrice({ userId, productId, price });
    await newSpecialPrice.save();

    res.status(201).json({ 
      message: "Special price added", 
      data: newSpecialPrice 
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Error processing special price", 
      error: error.message 
    });
  }
};


// función para obtener todos los precios especiales
const getSpecialPrices = async (req, res) => {
  try {
    //utiliza la función find para traer todo los registros del cluster con sus respectivas filas
    const prices = await SpecialPrice.find();

    //se envian mensajes de error o exito.
    res.status(200).json(prices);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving special prices", error });
  }
};

// función para obtener el precio especial por usuario y producto
const getSpecialPriceByUserAndProduct = async (req, res) => {
  try {
    const { userId, productId } = req.params;

    // encuentra si hay un precio especial para este usuario y producto
    const specialPrice = await SpecialPrice.findOne({ userId, productId });

    //si existe el precio especial envia el mensaje de exito con la información
    if (specialPrice) {
      return res.status(200).json({ productId: productId, price: specialPrice.price, message: "✅ Special price found" });
    }

    // Si no existe precio especial, devuelve el precio normal del producto
    const product = await Product.findById(productId);
    console.log(product);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    //se envian respectivos mensajes de error o exito.
    return res.status(200).json({ price: product.price, message: "No special price found, returning regular price." });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error retrieving special price", error });
  }
};

//se exporta el modulo para poder utilizarlo en otra parte del código
module.exports = { addSpecialPrice, getSpecialPrices, getSpecialPriceByUserAndProduct };


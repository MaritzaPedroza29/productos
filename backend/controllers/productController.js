const Product = require('../models/Product');

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    //se utiliza la función find para que me traiga todos los productos con todos las columnas
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//función para obtener el precio especial por usuario y el id del producto del cluster preciosespecialespedroza29
const getProductByName = async (req, res) => {
  try {
    const { name } = req.params; // Obtenemos el nombre del producto desde la URL

    // Buscamos el producto en la base de datos (sin distinción entre mayúsculas y minúsculas)
    const product = await Product.findOne({ name: new RegExp(`^${name}$`, "i") }).select("_id");
 
    //si el producto no existe envia un mensaje de error
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product by name:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//se exporta el modulo para poder utilizarlo en otra parte del código
module.exports = { getProducts, getProductByName};
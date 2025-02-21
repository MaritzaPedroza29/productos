// Importamos las dependencias necesarias
import React, { useEffect, useState } from "react";
import ProductTable from "../components/ProductTable"; // Importamos el componente de la tabla de productos
import axios from "axios";
import {
  PRODUCTOS_GET_ENDPOINT,
  OBTENER_PRECIOS_ESPECIALES_POR_USUARIO_GET_ENDPOINT,
} from "../connections/endpoints"; // Importamos los endpoints para obtener productos y precios especiales

// Definimos el ID del usuario de manera temporal (puede ser dinámico según la autenticación)
const userId = "67b6527e88ab734d17298a42";

/**
 * Componente Articles
 * 
 * Este componente obtiene la lista de productos desde la API y verifica si existen
 * precios especiales para cada producto según el usuario actual. Luego, muestra la
 * lista en una tabla.
 */
const Articles = () => {
  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /**
     * Función para obtener los productos y verificar si tienen precios especiales
     */
    const fetchProducts = async () => {
      try {
        // Obtener todos los productos desde la API
        const { data: products } = await axios.get(PRODUCTOS_GET_ENDPOINT);

        // Para cada producto, verificamos si tiene un precio especial asignado para el usuario actual
        const productsWithPrices = await Promise.all(
          products.map(async (product) => {
            try {
              // Construimos la URL para obtener el precio especial del producto y usuario actual
              const url = OBTENER_PRECIOS_ESPECIALES_POR_USUARIO_GET_ENDPOINT
                .replace(":userId", userId)
                .replace(":productId", product._id);

              // Realizamos la petición para obtener el precio especial
              const { data: specialPrice } = await axios.get(url);

              // Buscamos si hay un precio especial para el producto actual
              const newSpecialPrice = specialPrice.find(p => String(p.productId) === String(product._id));

              // Establecemos el precio final, priorizando el precio especial si existe
              let endPrice = product.price;
              endPrice = newSpecialPrice ? newSpecialPrice.price : product.price;

              // Retornamos el producto con su precio actualizado
              return { ...product, endPrice };
            } catch (error) {
              console.error(`❌ Error obteniendo precio especial para ${product._id}:`, error);
              // Si hay un error, retornamos el producto con su precio normal
              return { ...product, endPrice: product.price };
            }
          })
        );

        // Guardamos la lista de productos con los precios actualizados en el estado
        setProducts(productsWithPrices);
      } catch (error) {
        console.error("Error obteniendo productos", error);
      }
    };

    // Ejecutamos la función al montar el componente
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="tittlearticle">Lista de productos</h2>
      <ProductTable products={products} /> {/* Mostramos los productos en la tabla */}
    </div>
  );
};

// Exportamos el componente para su uso en otros archivos
export default Articles;

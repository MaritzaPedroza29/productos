// Importamos React para construir el componente
import React from "react";

// Importamos los estilos desde el archivo CSS
import "../assets/css/App.css"; 

/**
 * Componente ProductTable
 * 
 * Muestra una tabla con la información de los productos recibidos como props.
 * 
 * @param {Array} products - Lista de productos a mostrar en la tabla.
 */
const ProductTable = ({ products }) => {
  return (
    <div className="table-container"> {/* Contenedor principal de la tabla */}
      <table className="product-table"> {/* Tabla de productos */}
        <thead>
          <tr> {/* Encabezado de la tabla con los nombres de las columnas */}
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeamos el array de productos para mostrar cada producto en una fila */}
          {products.map((product, index) => (
            <tr key={index}> {/* Cada fila representa un producto */}
              <td>{product.name}</td> {/* Nombre del producto */}
              <td>{product.endPrice.toFixed(2)}</td> {/* Precio con dos decimales */}
              <td>{product.category}</td> {/* Categoría del producto */}
              <td>{product.description}</td> {/* Descripción del producto */}
              <td className={product.stock > 0 ? "in-stock" : "out-of-stock"}>
                {/* Si hay stock, muestra la cantidad, si no, muestra "Agotado" */}
                {product.stock > 0 ? product.stock : "Agotado"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exportamos el componente para poder utilizarlo en otras partes de la aplicación
export default ProductTable;

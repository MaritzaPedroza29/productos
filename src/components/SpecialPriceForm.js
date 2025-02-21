// Importamos React y el hook useState para manejar el estado del formulario
import React, { useState } from "react";

// Importamos los estilos CSS
import "../assets/css/App.css"; 

/**
 * Componente SpecialPriceForm
 * 
 * Formulario para crear un precio especial para un producto.
 * 
 * @param {Function} onSubmit - Función que se ejecuta al enviar el formulario.
 */
const SpecialPriceForm = ({ onSubmit }) => {
  // Estados para almacenar el nombre del producto y el precio especial
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  /**
   * Maneja el envío del formulario.
   * Evita que se envíe el formulario si algún campo está vacío.
   * Llama a la función onSubmit con los datos ingresados y limpia el formulario.
   * 
   * @param {Event} e - Evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Validación: si algún campo está vacío, muestra una alerta y detiene el envío
    if (!productName || !price) return alert("Todos los campos son obligatorios");

    // Llama a la función onSubmit pasando los datos del formulario
    onSubmit({ productName, price });

    // Limpia los campos del formulario después de enviarlo
    setProductName("");
    setPrice("");
  };

  return (
    <div className="form-container"> {/* Contenedor del formulario */}
      <form className="special-price-form" onSubmit={handleSubmit}>
        <h2>Crear Precio Especial</h2> {/* Título del formulario */}

        {/* Campo para ingresar el nombre del producto */}
        <div className="form-group">
          <label>Nombre del Producto</label>
          <input
            type="text"
            placeholder="Ej. Audífonos Bluetooth"
            value={productName}
            onChange={(e) => setProductName(e.target.value)} // Actualiza el estado
          />
        </div>

        {/* Campo para ingresar el precio especial */}
        <div className="form-group">
          <label>Precio Especial</label>
          <input
            type="number"
            placeholder="Ej. 99.99"
            value={price}
            onChange={(e) => setPrice(e.target.value)} // Actualiza el estado
          />
        </div>

        {/* Botón para enviar el formulario */}
        <button type="submit" className="submit-btn">Guardar Precio</button>
      </form>
    </div>
  );
};

// Exportamos el componente para poder usarlo en otras partes de la aplicación
export default SpecialPriceForm;

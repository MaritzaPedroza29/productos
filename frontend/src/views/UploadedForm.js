// Importamos las dependencias necesarias
import React from "react";
import Swal from "sweetalert2"; // Importamos SweetAlert2 para mostrar alertas personalizadas
import SpecialPriceForm from "../components/SpecialPriceForm"; // Importamos el formulario de precios especiales
import { 
  OBTENER_ID_PRODUCTO_POR_NOMBRE_GET_ENDPOINT, 
  SUBIR_PRECIOS_ESPECIALES_POST_ENDPOINT 
} from "../connections/endpoints"; // Importamos los endpoints para obtener el ID del producto y subir precios especiales
import axios from "axios"; // Importamos axios para realizar las peticiones HTTP

/**
 * Componente UploadedForm
 * 
 * Este componente maneja la lógica para obtener el ID de un producto según su nombre
 * y enviar un precio especial para dicho producto. También muestra alertas de éxito o error
 * utilizando SweetAlert2.
 */
const UploadedForm = () => {
  /**
   * Maneja el envío del formulario de precios especiales.
   * Obtiene el ID del producto y luego guarda el precio especial.
   * 
   * @param {Object} data - Datos del formulario (nombre del producto y precio especial).
   */
  const handleSpecialPriceSubmit = async (data) => {

    try {
      // Realiza una solicitud GET para obtener el ID del producto a partir de su nombre
      const response = await axios.get(`${OBTENER_ID_PRODUCTO_POR_NOMBRE_GET_ENDPOINT}/${data.productName}`);
      const productId = response.data; // Almacena el ID del producto obtenido
      
      // Llamamos a la función para enviar el precio especial
      await sendSpecialPrice("67b6527e88ab734d17298a42", productId, data.price);
    } catch (error) {
      console.error("❌ Error obteniendo el ID del producto:", error);
      
      // Muestra una alerta de error si no se pudo obtener el ID del producto
      Swal.fire({
        icon: "error",
        title: "Error al obtener el ID",
        text: "No se pudo obtener el ID del producto. Intenta nuevamente.",
      });
    }
  };

  /**
   * Envía un precio especial para un producto asociado a un usuario.
   * 
   * @param {string} userId - ID del usuario que asigna el precio especial.
   * @param {string} productId - ID del producto al que se le asigna el precio especial.
   * @param {number} price - Precio especial a asignar.
   */
  const sendSpecialPrice = async (userId, productId, price) => {
    try {
      // Realiza una solicitud POST para guardar el precio especial
      const response = await axios.post(SUBIR_PRECIOS_ESPECIALES_POST_ENDPOINT, {
        userId, 
        productId, 
        price
      });
      
      // Muestra una alerta de éxito cuando el precio especial se guarda correctamente
      Swal.fire({
        icon: "success",
        title: "Precio guardado",
        text: "El precio especial se ha guardado correctamente.",
      });
    } catch (error) {
      console.error("❌ Error al guardar el precio especial:", error.response?.data || error.message);
      
      // Muestra una alerta de error si no se pudo guardar el precio especial
      Swal.fire({
        icon: "error",
        title: "Error al guardar",
        text: "Hubo un problema al guardar el precio especial. Inténtalo nuevamente.",
      });
    }
  };

  return (
    <div>
      {/* Renderizamos el formulario y pasamos la función que manejará el envío */}
      <SpecialPriceForm onSubmit={handleSpecialPriceSubmit} />
    </div>
  );
};

// Exportamos el componente para su uso en otros archivos
export default UploadedForm;

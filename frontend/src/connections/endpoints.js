// Definimos la URL base de la API, que apunta al backend local en el puerto 5000
const API_URL = "http://localhost:5000";

/**
 * Endpoints de la API
 * 
 * Se definen constantes para las diferentes rutas de la API, lo que facilita
 * su uso en distintas partes de la aplicación y mejora la mantenibilidad del código.
 */

// Endpoint para obtener la lista de productos
export const PRODUCTOS_GET_ENDPOINT = API_URL + "/api/products";

// Endpoint para obtener los precios especiales registrados
export const PRECIOS_ESPECIALES_GET_ENDPOINT = API_URL + "/api/special-price";

// Endpoint para subir un nuevo precio especial
export const SUBIR_PRECIOS_ESPECIALES_POST_ENDPOINT = API_URL + "/api/special-price";

// Endpoint para obtener los precios especiales asignados a un usuario
export const OBTENER_PRECIOS_ESPECIALES_POR_USUARIO_GET_ENDPOINT = API_URL + "/api/special-price";

// Endpoint para obtener el ID de un producto a partir de su nombre
export const OBTENER_ID_PRODUCTO_POR_NOMBRE_GET_ENDPOINT = API_URL + "/api/products";

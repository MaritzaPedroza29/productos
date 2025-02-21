Introducción
ProMarket es una aplicación para gestionar productos y precios especiales de manera eficiente. Permite visualizar productos, asignar precios especiales a usuarios y actualizar la información de manera dinámica.

Pasos para ejecutar localmente

1️⃣ Clonar el repositorio
cd productos

2️⃣ Configurar el backend
Instalar dependencias:
cd backend
npm install

Crear un archivo .env y definir las variables necesarias (ejemplo):
env
PORT=5000
MONGO_URI="aqui se pone la url de la prueba que dan en el documento"

Ejecutar el servidor:
npm start

3️⃣ Configurar el frontend
Instalar dependencias:
npm install

Ejecutar la aplicación:
npm start

Justificación de elecciones técnicas
React.js para la interfaz de usuario, facilitando la actualización dinámica de datos.
Node.js + Express.js para construir la API de backend, optimizando el manejo de peticiones HTTP.
MongoDB + Mongoose para la persistencia de datos, permitiendo una estructura flexible de productos y precios especiales.
Axios para realizar peticiones HTTP asincrónicas entre frontend y backend.
SweetAlert2 para mejorar la experiencia del usuario con alertas visualmente atractivas.

Descripción de la estructura del proyecto

📦 products
 ┣ 📂 backend
 ┃ ┣ 📂 models          # Esquemas de la base de datos (Productos, Precios Especiales, Usuarios)
 ┃ ┣ 📂 routes          # Definición de rutas API (Productos, Precios Especiales)
 ┃ ┣ 📂 controllers     # Lógica de negocio de cada endpoint
 ┃ ┣ 📜 server.js       # Configuración principal del servidor Express
 ┃ ┗ 📜 .env            # Variables de entorno
 ┃
 ┣ 📂 src               # Código fuente del frontend
 ┃ ┣ 📂 components      # Componentes reutilizables de React (NavBar, Formularios, etc.)
 ┃ ┣ 📂 views           # Vistas principales (Artículos, Formulario de Precios Especiales)
 ┃ ┣ 📂 assets          # Imágenes, estilos CSS, etc.
 | ┣ 📂 routes          # Componente principal de la aplicación
 ┃ ┣📂 test             # Archivo con los que se hacen los test
 ┃ ┣ 📜 index.js        # Punto de entrada de la aplicación React
 ┃ ┗ 📂 connections     # Archivos con endpoints de la API
 ┃
 ┣ 📜 package.json      # Dependencias y scripts del frontend
 ┣ 📜 .gitignore        # Archivos ignorados en el repositorio
 ┗ 📜 README.md         # Documentación del proyecto


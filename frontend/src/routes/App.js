// Importamos las dependencias necesarias
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importamos los componentes que se usarán en las rutas
import NavBar from '../components/NavBar'; // Barra de navegación
import Articles from '../views/Articles'; // Vista de artículos
import UploadedForm from '../views/UploadedForm'; // Vista de subida de precios especiales

/**
 * Componente principal de la aplicación.
 * 
 * Este componente define las rutas principales de la aplicación y la estructura
 * general, incluyendo la barra de navegación y la configuración del enrutamiento.
 */

const App = () => {
  return (
    <Router> {/* Componente que maneja la navegación de la aplicación */}
      <NavBar /> {/* Barra de navegación que estará presente en todas las páginas */}
      <Routes> {/* Definimos las rutas de la aplicación */}
        <Route exact path="/" element={<Articles />} /> {/* Página de artículos */}
        <Route path="/subida" element={<UploadedForm />} /> {/* Página de subida de precios especiales */}
      </Routes>
    </Router>
  );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos
export default App;

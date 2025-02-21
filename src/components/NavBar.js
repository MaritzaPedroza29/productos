// Importamos React y el componente Link de react-router-dom para la navegación
import React from 'react';
import { Link } from 'react-router-dom';

// Importamos el logo desde la carpeta de assets
import logo from '../assets/image/logoproductos.png';

// Importamos los estilos desde el archivo CSS
import '../assets/css/App.css';

/**
 * Componente NavBar: Barra de navegación de la aplicación
 * 
 * Este componente muestra un menú de navegación con un logo y enlaces 
 * a las secciones principales de la aplicación.
 */
const NavBar = () => {
  return (
    <nav className="navbar"> {/* Contenedor principal de la barra de navegación */}
      <div className="logo-container"> {/* Contenedor del logo y el título */}
        <img src={logo} alt="Logo" className="logo" /> {/* Logo de la aplicación */}
        <h1 className="title">ProMarket</h1> {/* Nombre de la aplicación */}
      </div>
      <ul className="nav-links"> {/* Lista de enlaces de navegación */}
        <li><Link to="/" className="link">Artículos</Link></li> {/* Enlace a la página principal */}
        <li><Link to="/subida" className="link">Subida</Link></li> {/* Enlace a la página de subida de productos */}
      </ul>
    </nav>
  );
};

// Exportamos el componente para su uso en otras partes de la aplicación
export default NavBar;


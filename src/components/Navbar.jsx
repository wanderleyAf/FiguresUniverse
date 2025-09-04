import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="w-full text-white shadow-md">
      <div className="absolute top-0 left-0 w-full z-10 px-4 py-0.05 bg-[#524948]/30 flex items-center justify-between">
        
        {/* Logo con Link a la página principal */}
        <Link to="/" className="flex items-center">
          <img 
            src="/assets/images/logo.png"   // 👈 reemplaza con la ruta de tu logo
            alt="Logo"
            className="h-20  "
          />
        </Link>

        {/* Menú */}
        <div className="flex items-center space-x-6">
          <nav className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:text-pink-400">Inicio</Link>
            <Link to="/" className="hover:text-pink-400">Galleria</Link>
            <Link to="/" className="hover:text-pink-400">Why</Link>
            <Link to="/" className="hover:text-pink-400">Contacto</Link>
          </nav>

          {/* Íconos */}
          <div className="space-x-4">
            <button className="hover:text-pink-400">🛒</button>
            <button className="hover:text-pink-400">👤</button>
          </div>
        </div>
      </div>
    </header>
  );
};

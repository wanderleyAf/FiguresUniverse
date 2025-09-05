import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export const FloatingButtons = () => {
  return (
    <>
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/51991283718?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex items-center justify-start 
                   font-semibold shadow-lg rounded-full
                   transition-all duration-300 ease-in-out overflow-hidden
                   w-14 h-14 hover:w-44 group bg-green-500 text-white"
      >
        <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
          <FaWhatsapp className="text-3xl text-white" />
        </div>
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          WhatsApp
        </span>
      </a>

      {/* Botón de Instagram */}
      <a
        href="https://www.instagram.com/figures.universe/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 flex items-center justify-start 
                   font-semibold shadow-lg rounded-full
                   transition-all duration-300 ease-in-out overflow-hidden
                   w-14 h-14 hover:w-44 group bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white"
      >
        <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
          <FaInstagram className="text-3xl text-white" />
        </div>
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Instagram
        </span>
      </a>

      {/* Botón de YouTube */}
      <a
        href="https://www.youtube.com/tuCanal"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-44 right-6 flex items-center justify-start 
                   font-semibold shadow-lg rounded-full
                   transition-all duration-300 ease-in-out overflow-hidden
                   w-14 h-14 hover:w-44 group bg-red-600 text-white"
      >
        <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
          <FaYoutube className="text-3xl text-white" />
        </div>
        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          YouTube
        </span>
      </a>
    </>
  );
};

import { useParams } from "react-router-dom";
import data from "../../data.json";
import { ProductGallery } from "../components/ProductGallery";

export const ImagePage = () => {
  const { id } = useParams();
  const product = data.find(item => String(item.id) === id);

  if (!product) {
    return <div className="text-white p-10">Imagen no encontrada.</div>;
  }

  return (
    <div className="bg-gradient-to-b from-black via-[#020C1A] text-white pt-30">
      <div className="mx-auto px-5 py-1 max-w-[1500px] grid md:grid-cols-3 gap-10">
        
        {/* Galería a la izquierda (ocupa 2 columnas) */}
         <div className="md:col-span-2 min-h-[800px] flex items-center">
          <ProductGallery  
            images={product.images} 
            videoUrl="https://www.youtube.com/embed/rTOo_ZCCC8I" 
          />
        </div>

        {/* Información del producto a la derecha (1 columna) */}
        <div className="flex flex-col">
          {/* Nombre */}
          <h1 className="text-5xl font-extrabold mb-6">{product.name}</h1>
          
          {/* Descripción */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Descripción</h2>
            <p className="text-gray-300 text-xl">{product.description}</p>
            <div className="border-t border-gray-600 mt-4"></div>
          </div>

          {/* Detalles adicionales */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Detalles</h2>
            <p className="text-lg">{product.details}</p>
            <div className="border-t border-gray-600 mt-4"></div>
          </div>

          {/* Materiales */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Materiales</h2>
            {product.details2.map((details2, index) => (
              <p key={index} className="text-lg">{details2}</p>
            ))}
            <div className="border-t border-gray-600 mt-4"></div>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 justify-center" >
            <a
              href="https://wa.me/999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
          <button className="bg-gradient-to-r from-yellow-800 via-yellow-500 to-yellow-600 
            hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 
            text-white font-extrabold px-6 py-3 rounded-xl shadow-lg tracking-wide 
            cursor-pointer transition-all duration-300">
            ✨ Descubrir la pieza ✨
          </button>
          </a>
          <a
            href="/"
            className="border-2 border-yellow-500 text-yellow-500 hover:bg-red-500 
            hover:text-white px-6 py-3 rounded-xl font-semibold cursor-pointer 
            transition-all duration-300"
          >
            Volver a Galería
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

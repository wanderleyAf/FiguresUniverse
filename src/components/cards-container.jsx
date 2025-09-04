import { Link } from 'react-router-dom';  // Importar Link de react-router-dom
import { ProductCard } from './product-card';
import data from '../../data.json';

export const CardsContainer = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Grid con las imágenes, centrado y con ancho limitado */}
      <div className="grid md:grid-cols-4 gap-6 mb-6 max-w-[1508px] w-full mx-auto">
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/image/${item.id}`}  // Usamos `to` de React Router para navegar internamente
            target="_blank"  // Esto abrirá la ruta en una nueva pestaña
            rel="noreferrer"            
            className="cursor-pointer"
          >
            <ProductCard image={item.image}/>
          </Link>
        ))}
      </div>

     {/* Botón "Ver más" centrado */}
      <div className="flex justify-center mb-12">
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-5 rounded-xl shadow-md transition-transform transform hover:scale-110 cursor-pointer">
          Ver más
        </button>
      </div>

      {/* Sección grande fuera del contenedor limitado */}
      <section className="relative mx-auto">
        <img
          src="/assets/images/30.jpg"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-transparent rounded-lg pointer-events-none"></div>

        {/* Texto encima de la imagen */}
        <div className="absolute inset-0 flex-col p-50 pl-20 text-5xl">

          <div className="max-w-2xl mt-10 text-2xl">
            <p className="text-white">
              Este proyecto nace del amor por el modelado 3D y el coleccionismo. Aquí encontrarás piezas únicas y un FAN ART que refleja la pasión por la escultura y el detalle en cada figura.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

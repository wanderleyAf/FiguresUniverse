// src/components/ImageSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// 🔹 Ahora cada imagen tiene su src + link personalizado
const images = [
  { src: '/assets/images/999.jpg', link: '/image/3' },
  { src: '/assets/images/998.jpg', link: '/image/2' },
  { src: '/assets/images/997.jpg', link: '/image/1' }
]

export const ImageSlider = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx} className="relative">
            {/* Imagen */}
            <img
              src={item.src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-contain object-top"
            />

            {/* Overlay con texto + botón */}
            <div
              className="absolute inset-0 flex flex-col items-start justify-center text-left text-white bg-black/30 pl-8 md:pl-20"
              style={{ animation: "fadeInMove 0.8s ease-out 1s both" }}
            >
              <style>{`
                @keyframes fadeInMove {
                  from { opacity: 0; transform: translateX(-20px); }
                  to   { opacity: 1; transform: translateX(0); }
                }
              `}</style>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                Descubre lo nuevo
              </h2>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-400 hover:bg-pink-300 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold shadow-lg transition duration-1000"
              >
                Ver figura
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const ProductGallery = ({ images, videoUrl }) => {
  const items = images.map(img => ({
    original: img.full,
    thumbnail: img.thumb,
  }));

  // 🔹 Imagen con zoom en hover
  const ZoomImage = ({ src, alt }) => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [isZoomed, setIsZoomed] = useState(false);

    const handleMouseMove = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 120;
      const y = ((e.pageY - top) / height) * 120;
      setPosition({ x, y });
      setIsZoomed(true);
    };

    const handleMouseLeave = () => {
      setIsZoomed(false);
      setPosition({ x: 50, y: 50 }); // vuelve al centro
    };

    return (
<div
 className="relative overflow-hidden w-full h-[700px] bg-black rounded-lg cursor-pointer"

  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <img
    src={src}
    alt={alt}
    className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-200"
    style={{
      transformOrigin: `${position.x}% ${position.y}%`,
      transform: isZoomed ? "scale(2)" : "scale(1)",
    }}
  />
</div>

    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* 🔹 Galería con zoom */}
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={true}
         showNav={true} 
        thumbnailPosition="bottom"
        additionalClass="custom-gallery"
        renderItem={(item) => (
          <ZoomImage src={item.original} alt={item.original} />
        )}
        
      />

      {/* 🔹 Video debajo */}
      {videoUrl && (
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

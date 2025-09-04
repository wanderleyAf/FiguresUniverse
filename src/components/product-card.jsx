export const ProductCard = ({ image }) => {
  return (
   <div className="relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,183,255,0.8)]">    
      <picture>
        <source media="(min-width: 1240px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img
          className="rounded-lg mb-[20px]"
          src={image.mobile}
          alt="image-baklava-mobile"
        />
      </picture>
    </div>
  );
};

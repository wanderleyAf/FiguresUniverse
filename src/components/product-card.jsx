import { useState } from 'react';

export const ProductCard = ({image, name, category, price}) => {
  const [quantity, setQuantity] = useState(0);

  const addOne = () => {
    setQuantity(quantity + 1);
  };

  const subtractOne = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className='relative'>

      <picture>
        <source media="(min-width: 1440px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img
          className='rounded-lg mb-[38px]'
          src={image.mobile}
          alt='image-baklava-mobile'
        />
      </picture>

      {quantity === 0 ? (
        <button
          onClick={addOne}
          className='bg-Rose-50 border-2 border-Rose-300 w-40 rounded-full flex justify-center gap-2 p-3 absolute inset-x-0 mx-auto top-[190px] cursor-pointer hover:border-Red transition-colors'
        >
          <img
            src='/public/assets/images/icon-add-to-cart.svg'
            alt='icon-add-to-cart'
          />
          <span>Add to Cart</span>
        </button>
      ) : (
        <div className='bg-Red w-40 rounded-full flex justify-between items-center gap-2 p-3 absolute inset-x-0 mx-auto top-[190px] cursor-pointer'>
          <img
            onClick={subtractOne}
            className='border border-Rose-50 size-[18px] rounded-full p-1'
            src='/assets/images/icon-decrement-quantity.svg'
            alt='icon-decrement-quantity'
          />
          <p className='text-Rose-50'>{quantity}</p>
          <img
            onClick={addOne}
            className='border border-Rose-50 size-[18px] rounded-full p-1'
            src='/assets/images/icon-increment-quantity.svg'
            alt='icon-increment-quantity'
          />
        </div>
      )}

      <p className='text-Rose-500 text-sm'>{category}</p>
      <h2 className='font-bold'>{name}</h2>
      <p className='text-Red font-semibold'>${price}</p>
    </div>
  );
};

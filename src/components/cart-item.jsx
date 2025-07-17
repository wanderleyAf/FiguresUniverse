export const CartItem = () => {
  return (
    <div className='border-1 border-transparent border-b-Rose-300 text-sm py-4'>
      <div className='flex justify-between items-center'>
        <div>
          <h3>Vanilla Panna</h3>
          <div className='flex gap-2'>
            <p className='text-Red font-semibold'>1x</p>
            <p className='text-Rose-500'>@$6.50</p>
            <p className='font-semibold text-Rose-500'>$13</p>
          </div>
        </div>
        <img className='size-[18px] border border-Rose-300 rounded-full p-0.5 cursor-pointer' src="/assets/images/icon-remove-item.svg" alt="" />
      </div>
    </div>
  )
}

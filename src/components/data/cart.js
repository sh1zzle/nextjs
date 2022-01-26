import { useState } from 'react';

export default function Cart(props) {
  const { cartItems, onAddToCart, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const { countCartItems } = props;
  const [viewCart, setIsViewCart] = useState(false);
  const [viewTotal, setIsViewTotal] = useState(false);

  const ViewTotalPrice = () => {
    return (
      <div>
        <h2 class='text-xs text-indigo-500 tracking-widest font-medium title-font my-4 text-center'>
          Free shipping for orders over $2000!
        </h2>
        <div class='flex my-4'>
          <div className='w-3/4 font-semibold text-xs'>Total Items:</div>
          <div className='w-1/4 text-right font-semibold text-xs'>
            ${itemsPrice.toFixed(2)}
          </div>
        </div>
        <hr></hr>
        <div class='flex my-4'>
          <div className='w-3/4 font-semibold text-xs'>Tax Price:</div>
          <div className='w-1/4 text-right font-semibold text-xs'>
            ${taxPrice.toFixed(2)}
          </div>
        </div>
        <hr></hr>
        <div class='flex my-4'>
          <div className='w-3/4 font-semibold text-xs'>Shipping Price:</div>
          <div className='w-1/4 text-right font-semibold text-xs'>
            ${shippingPrice.toFixed(2)}
          </div>
        </div>
        <hr></hr>
        <div class='flex my-4'>
          <div className='w-3/4 font-semibold text-xs'>Total Price:</div>
          <div className='w-1/4 text-right font-semibold text-xs'>
            ${totalPrice.toFixed(2)}
          </div>
        </div>
        <div className='text-center py-4'>
          <button class='bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 border border-green-700 rounded w-full'>
            Checkout
          </button>
        </div>
      </div>
    );
  };

  const IsCartOpen = () => {
    return (
      <div>
        {cartItems.length === 0 && (
          <h2 class='text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 text-center'>
            Your cart is empty, add some items!
          </h2>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className='flex flex-wrap mb-4'>
            <div className='w-1/3 text-gray-600 text-xs font-bold'>
              {item.name}
            </div>
            <div className='w-2/3 text-right text-gray-600 text-xs'>
              <button
                class='bg-transparent hover:bg-gray-400 text-black-700 font-semibold hover:text-white py-1 px-2.5 border border-black-700 hover:border-transparent rounded mr-2'
                onClick={() => onAddToCart(item)}
              >
                +
              </button>
              <input
                className='w-4 font-semibold'
                placeholder={item.quantity}
              ></input>
              <button
                class='bg-transparent hover:bg-gray-400 text-black-700 font-semibold hover:text-white py-1 px-3 border border-black-700 hover:border-transparent rounded mr-2'
                onClick={() => onRemove(item)}
              >
                -
              </button>
              x ${item.price}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <button
            onClick={() => setIsViewTotal(!viewTotal)}
            class='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full mt-4 text-sm'
          >
            View Order Summary
          </button>
        )}
        {cartItems.length !== 0 && (viewTotal ? <ViewTotalPrice /> : '')}
      </div>
    );
  };

  return (
    <div>
      <div className='px-4'>
        <h2 className='text-xl mb-4 text-gray-600 body-font px-5 py-5 text-center'>
          <button
            onClick={() => setIsViewCart(!viewCart)}
            class='py-4 px-1 relative border-2 border-transparent text-gray-800
  rounded-full hover:text-gray-400 focus:outline-none
  focus:text-gray-500 transition duration-150 ease-in-out'
            aria-label='Cart'
          >
            <svg
              class='h-6 w-6'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'></path>
            </svg>
            <span class='absolute inset-0 object-right-top -mr-6'>
              <div class='inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white'>
                {countCartItems ? <button>{countCartItems}</button> : '0'}
              </div>
            </span>
          </button>
        </h2>
      </div>
      {viewCart ? <IsCartOpen /> : ''}
    </div>
  );
}

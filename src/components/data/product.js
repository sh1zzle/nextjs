export default function Product(props) {
  const { product, onAddToCart } = props;
  return (
    <div>
      <img className='mb-2 rounded-md' src={product.image} alt={product.name} />
      <div class='flex mb-4'>
        <div className='w-3/4 font-bold'>{product.name}</div>

        <div className='w-1/4 text-right font-bold'>${product.price}</div>
      </div>
      <div>
        <button
          class='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full'
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

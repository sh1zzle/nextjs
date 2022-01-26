import Product from './product';

export default function Items(props) {
  const { products, onAddToCart } = props;
  return (
    <section class='text-gray-600 text-sm'>
      <div class='container px-4 py-4 mx-auto'>
        <h2 className='text-lg font-semibold mb-4'>Products</h2>
        <div class='grid gap-4 grid-cols-3 '>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

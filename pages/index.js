import Head from 'next/head';
import Layout from '../src/components/layout/layout';
import Items from '../src/components/data/items';
import Cart from '../src/components/data/cart';
import data from '../src/components/data/data';
import { useState } from 'react';

export default function Home() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>Store</title>
      </Head>
      <div class='flex mb-4'>
        <Items onAddToCart={onAddToCart} products={products} />
        <Cart
          onAddToCart={onAddToCart}
          onRemove={onRemove}
          cartItems={cartItems}
          countCartItems={cartItems.length}
        />
      </div>
    </Layout>
  );
}

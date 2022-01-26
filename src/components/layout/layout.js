import Footer from '../footer/footer';
import Header from '../header/header';
import { useState } from 'react';

function Layout({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Header countCartItems={cartItems.length} />
      <div className='min-h-60vh'>{children}</div>
      <div className='text-center'>
        <button className='text-lg font-semibold pt-4 tracking-wide underline'>
          See More
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;

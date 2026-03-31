import React, { useState } from 'react';
import Products from './Products';
import Cart from './Cart';
import './App.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentView, setCurrentView] = useState<'products' | 'cart'>('products');

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div className="App">
      <nav style={{ padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
        <button onClick={() => setCurrentView('products')} style={{ marginRight: '10px' }}>Products</button>
        <button onClick={() => setCurrentView('cart')}>Cart ({cart.length})</button>
      </nav>
      {currentView === 'products' ? (
        <Products addToCart={addToCart} />
      ) : (
        <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
      )}
    </div>
  );
}

export default App;

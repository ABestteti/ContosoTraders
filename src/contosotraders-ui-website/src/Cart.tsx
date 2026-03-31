import React from 'react';

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

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price.toFixed(2)} each</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <span>Qty: {item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '20px', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px' }}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h2>Total: ${total.toFixed(2)}</h2>
          <button style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '1.1em',
            cursor: 'pointer'
          }}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
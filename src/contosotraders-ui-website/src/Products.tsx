import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // For now, using mock data since the API might not be running
      const mockProducts: Product[] = [
        { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 999.99, category: 'Electronics' },
        { id: 2, name: 'Mouse', description: 'Wireless optical mouse', price: 29.99, category: 'Electronics' },
        { id: 3, name: 'Keyboard', description: 'Mechanical gaming keyboard', price: 149.99, category: 'Electronics' },
        { id: 4, name: 'Monitor', description: '27-inch 4K display', price: 399.99, category: 'Electronics' },
        { id: 5, name: 'Headphones', description: 'Noise-cancelling wireless headphones', price: 199.99, category: 'Electronics' }
      ];
      setProducts(mockProducts);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch products');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contoso Traders - Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p style={{ color: '#007bff', fontSize: '1.2em', fontWeight: 'bold' }}>
              ${product.price.toFixed(2)}
            </p>
            <button style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
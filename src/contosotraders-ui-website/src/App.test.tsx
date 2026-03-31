import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Contoso Traders products page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Contoso Traders - Products/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders product cards', () => {
  render(<App />);
  const laptopElement = screen.getByText(/Laptop/i);
  expect(laptopElement).toBeInTheDocument();
});

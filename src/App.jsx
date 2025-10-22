import React from 'react';
import { useState } from 'react';
import './index.css';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />  
      <AppRoutes />
      <Footer />
    </>
  );
} 




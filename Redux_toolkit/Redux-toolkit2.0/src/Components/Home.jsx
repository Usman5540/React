// Home.jsx
import React from 'react';
import Products from './Components/Extra/Products'; // Import without curly braces

function Home() {
  return (
    <div>
      <h1 className='heading'>Welcome To Redux Store</h1>
      <select>
        <h2>Products</h2>
        <Products /> {/* Use the default import without curly braces */}
      </select>
    </div>
  );
}

export default Home;

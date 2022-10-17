import React from 'react';
import { useState, useEffect } from 'react';
import Reviews from './Reviews/Reviews.jsx';
import View from './View/View.jsx';
import Questions from './Questions/Questions.jsx';


const App = () => {
  const randomId = 37311 + Math.floor(Math.random() * 4);
  const [product, setProduct] = useState(randomId);

  // useEffect(() => {
  //   const start = 37311;

  //   setProduct(randomId);
  // }, []);

  return (
    <div id="app">
      <h1>House Greyjoy</h1>
      <View productId = {product} />
      <Questions productId = {product} />
      <Reviews productId={product} />
    </div>
  );
};

export default App;
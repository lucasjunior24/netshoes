import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';

import { ProductList } from './styles';
import api from '../../services/api';

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('products')
        .then(response => {
          const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
          }));
          setProducts(data);
        });
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.key}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type='button'>
            <div>
              <MdAddShoppingCart size={16} color='#fff' /> 3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))};
    </ProductList>
  );
}

export default Home;
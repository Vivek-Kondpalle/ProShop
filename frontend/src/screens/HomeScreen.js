import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //console.log("object")
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {' '}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch(
      'https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/products'
    );
    result = await result.json();
    setProducts(result);
  };
  console.log('producsts ', products);

  const deleteProduct = async (id) => {
    console.log(id);
    let result = await fetch(
      `https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/product/${id}`,
      {
        method: 'delete',
      }
    );
    result = await result.json();
    if (result) {
      alert('Record deleted');
      getProducts();
    }
  };

  const searchHandle = async (e) => {
    console.log(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(
        `https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/search/${key}`
      );
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    }else{
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h1>Product List</h1>

      <input
        type="text"
        className="search-product-box"
        placeholder="Search Product"
        onChange={searchHandle}
      />

      <ul className="list-header">
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>

      {
         products.length > 0 ?  products.map((item, index) => 
          <ul key={index}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>₹ {item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button type="button" onClick={() => deleteProduct(item._id)}>
                Delete
              </button>
              <Link to={'/update/' + item._id}>Update</Link>
            </li>
          </ul>
        ) : <h2>No result found</h2>
      }
    </div>
  );
};

export default ProductList;

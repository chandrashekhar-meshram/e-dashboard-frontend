import React, { useState, useEffect } from 'react';


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

  const deleteProduct = async (id)=> {
    console.log(id);
    let result = await fetch(`https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/product/${id}`, {
      method: "delete"
    });
    result = await result.json();
    if(result){
      alert('Record deleted');
      getProducts();
    }
  }

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul className = 'list-header'>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>

      {products.map((item, index) => (
        <ul key={index}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>₹ {item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button type = 'button' onClick = {()=> deleteProduct(item._id)}>
              Delete
            </button> 
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;

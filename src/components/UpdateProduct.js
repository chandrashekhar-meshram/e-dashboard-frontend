import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateProduct = ()=> {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=> {
    console.log(params);
    getProductDetails();
  }, []);

  const getProductDetails = async ()=> {
    let result = await fetch(`https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/product/${params.id}`);
    result = await result.json();
    setName(result.name);   
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  }
  
  const updateProduct = async ()=> {
    console.log(name, price, category, company);
    let result = await fetch(`https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/product/${params.id}`, {
      method: 'Put',
      body: JSON.stringify({name, price, category, company}),
      headers: {
        'Content-Type' : 'Application/json'
      }
    });
    result = await result.json();
    console.log(result);
    
    navigate('/');
  };

  return(
    <div className = 'product'>
      <h1>UpdateProduct</h1>
      <input
        type = 'text'
        className = 'inputBox'
        placeholder = 'Enter product name'
        value = {name}
        onChange = {(e)=> setName(e.target.value)} 
      />
      <input
        type = 'text'
        className = 'inputBox'
        placeholder = 'Enter product price'
        value = {price}
        onChange = {(e)=> setPrice(e.target.value)} 
      />
      <input
        type = 'text'
        className = 'inputBox'
        placeholder = 'Enter product category'
        value = {category}
        onChange = {(e)=> setCategory(e.target.value)} 
      />
      <input
        type = 'text'
        className = 'inputBox'
        placeholder = 'Enter product company'
        value = {company}
        onChange = {(e)=> setCompany(e.target.value)} 
      />
      <button 
        type = 'button'
        className = 'appButton'
        onClick = {updateProduct} 
      >
        UpdateProduct
      </button>
    </div>
  )
}

export default UpdateProduct;


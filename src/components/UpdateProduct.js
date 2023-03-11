import React, {useState} from 'react';

const UpdateProduct = ()=> {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');

  const updateProduct = ()=> {
    console.log(name, price, category, company);
  }

  return(
    <div>
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


import React, {useState} from 'react';

const AddProduct = ()=> {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');

  const addProduct = ()=> {
    console.log(name, price, category, company)
  }

  return(
    <div className = 'product'>
      <h1>Add Product</h1>
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
        className = 'appButton'
        type = 'button'
        onClick = {addProduct}
      >
        Add Product
      </button> 

    </div>
  )
}

export default AddProduct;
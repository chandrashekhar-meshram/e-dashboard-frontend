import React, {useState} from 'react';

const AddProduct = ()=> {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState(false);

  const addProduct = async ()=> {    
    if(!name || !price || !category || !company){
      setError(true);
      return false;
    }
    console.log(name, price, category, company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch('https://React-and-node-js-project-MERN-stack.chandrashekha42.repl.co/add-product', {
      method: 'post',
      body: JSON.stringify({name, price, category, company, userId}),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}` ,
      }
    });
    result = await result.json();
    alert('Product added successfully');
    console.log(result);
    setName('');
    setPrice('');
    setCategory('');
    setCompany("");
    setError("");
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
      {error && !name && <span className = 'invalid-input'>Enter valid name</span>}

      <input 
        type = 'text'
        className = 'inputBox'
        placeholder = 'Enter product price'
        value = {price}
        onChange = {(e)=> setPrice(e.target.value)}
      />
      {error && !price &&<span className = 'invalid-input'>Enter valid Price</span>}

      <input 
        type = 'text'
        className = 'inputBox'
        placeholder = 'Enter product category'
        value = {category}
        onChange = {(e)=> setCategory(e.target.value)}
      />
      {error && !category && <span className = 'invalid-input'>Enter valid Category</span>}

      <input 
        type = 'text'
        className = 'inputBox'
        placeholder = 'Enter product company'
        value = {company}
        onChange = {(e)=> setCompany(e.target.value)}
      />
      {error && !company && <span className = 'invalid-input'>Enter valid company</span>}

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
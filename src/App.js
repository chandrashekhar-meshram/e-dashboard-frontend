import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route element={<PrivateComponent />}>
              <Route path="/" element={<ProductList />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/update/:id" element={<UpdateProduct />} />
              <Route path="/logout" element={<h1>Logout Component</h1>} />
              <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Route>
          
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

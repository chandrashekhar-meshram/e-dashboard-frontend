import React from 'react';
import './style.css';
import Nav from './Nav';
import {BrowserRouter} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <h1>E-Dashboard (Frontend)!</h1>
      </BrowserRouter>
    </div>
  );
}

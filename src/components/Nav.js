import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const Logout = ()=> {
    localStorage.clear();
    navigate('/login');
  } 

  return (
    <div>
      <img
        className = "logo"
        src = 'https://yt3.ggpht.com/ytc/AKedOLR09bCpy_XTq2scU91URc0pWG0EqS_Yc_Zg-r9pBQ=s900-c-k-c0x00ffffff-no-rj'
        alt = 'Logo' 
      />
      {
        auth ? 
        <ul className="nav-ul">
            <li>
              <Link to="/">Product</Link>
            </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>
            <li>
              <Link to="/update">Update Product</Link>
            </li>
            <li>
              
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link onClick={Logout} to='/login'> Logout ( { JSON.parse(auth).name } ) </Link>
            </li>
        </ul> :
         <ul className = 'nav-ul nav-right'>      
            <li><Link to='/login'>Login</Link></li>   
            <li><Link to='/signup'>SignUp</Link></li>            
         </ul>
      }      
    </div>
  );
};

export default Nav;

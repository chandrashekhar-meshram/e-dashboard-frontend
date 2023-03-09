import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const Logout = ()=> {
    localStorage.clear();
    navigate('/signup');
  } 

  /*<img
            alt='logo'
            className='logo'
             src='https://yt3.ggpht.com/ytc/AKedOLR09bCpy_XTq2scU91URc0pWG0EqS_Yc_Zg-r9pBQ=s900-c-k-c0x00ffffff-no-rj' /> */

  return (
    <div>
      <img
        className = "logo"
        src = 'https://yt3.ggpht.com/ytc/AKedOLR09bCpy_XTq2scU91URc0pWG0EqS_Yc_Zg-r9pBQ=s900-c-k-c0x00ffffff-no-rj'
        alt = 'Logo' 
      />
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
        {/* <li>
          {
            auth ? 
            <Link onClick={Logout} to='/signup'>Logout</Link> :  
            <Link to='/signup'>SignUp</Link>
          }         
        </li>
        <li><Link to='/login'>Login</Link></li> */}
        {
          auth ? 
          <li><Link onClick={Logout} to='/signup'>Logout</Link> </li> :
          <>
          <li><Link to='/signup'>SignUp</Link></li>
          <li><Link to='/login'>Login</Link></li>
          </>
        }
      </ul>
    </div>
  );
};

export default Nav;

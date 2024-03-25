// import React from 'react'

// const Header = () => {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#">Navbar</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Link</a>
//                             </li>
//                             <li class="nav-item dropdown">
//                                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Dropdown
//                                 </a>
//                                 <ul class="dropdown-menu">
//                                     <li><a class="dropdown-item" href="#">Action</a></li>
//                                     <li><a class="dropdown-item" href="#">Another action</a></li>
//                                     <li><hr class="dropdown-divider" /></li>
//                                     <li><a class="dropdown-item" href="#">Something else here</a></li>
//                                 </ul>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link disabled" aria-disabled="true">Disabled</a>
//                             </li>
//                         </ul>
//                         <form class="d-flex" role="search">
//                             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button class="btn btn-outline-success" type="submit">Search</button>
//                         </form>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Header


import React from 'react';
import '../App.css';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const cartLength = useSelector((state)=> state.handleCart);
  return (
    <>
      <header>
        <div className='container'>
          <div className='flexSB'>
            <div className='logo'>
              <img src="../images/logo.jpeg" />
            </div>
            <ul className='flexSB'>
              <li className='headerMenuItem'>Home</li>
              <li className='headerMenuItem'>About</li>
              <NavLink className='navItem' to='/'><li className='headerMenuItem'>Products</li></NavLink>
              <li className='headerMenuItem'>
                <button className='btn btn-outline-light'>Login</button>
              </li>
              <li className='headerMenuItem'>
                <NavLink to='/cart'><button className='btn btn-outline-light'><FaShoppingCart/> Cart ({cartLength.length})</button></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;

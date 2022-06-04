import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
     <nav className="navbar">
        <a className="navbar-logo" href="#">
          <img  src="./logo.png" />
        </a>
        <ul className='menu-items'>
          <li className='menu-items_item'>Home</li>
          <li className='menu-items_item'>Items</li>
          <li className='menu-items_item'>About</li>
        </ul>
          <a className="shopping-logo" href="#">
          <img  src="./shopping.svg" />
        </a>
    </nav>
     
    );
  }
}



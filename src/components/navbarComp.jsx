
import React, { Component } from "react";
import { MenuItems } from "./menuItems";
import './navbarComp.css'

class Navbar extends Component{
  state= {clicked:false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }
  
  render(){
    return(
      <nav className="navBar">
        <div className="logo">E-STORE</div>
        <div className="menu" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars' }></i>
          </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 
        'nav-menu'}>
          {MenuItems.map((item, index) => {
            debugger
            return(
              <li  key={index}>
                  <a className= 'list' classname={item.cName} href={item.url}>
                  {item.title}
                  </a>
                </li>
            )
          })} 
          
        </ul>
      </nav>

    )
  }
}

export default Navbar;
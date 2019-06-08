import React, {Component} from 'react';
import './Header.css';
import logo from '../img/logoredandwhite.png';
import logoInstagram from '../img/LogoInstaInvertido.png';
import{ 
    Link
  } from "react-router-dom"

class Header extends Component {
    showSettings (event) {
        event.preventDefault();       
      }

  render(){
    let navBar;
    let socialIcons = "";
    if(this.props.isDesktop === false)     
    {
        navBar = ""
        socialIcons="";
    }   
    else
    {

        navBar =  
        <div>
            <div className="navs">                               
                <Link to="/Photos" >Fotos</Link>                  
                <Link to="/About" >Nosotros</Link>  
                <Link to="/Contact" >Contacto</Link>                                 
            </div>                
        </div>

        socialIcons =   
        <div className="socialNavIcons">
            <a target="blank" className="menu-item--small" href="https://www.instagram.com/madbros.spain/">            
                <img className="logoInstaHeader" alt="logo" src = {logoInstagram}></img>                        
            </a>               
        </div>
    }

      return(         
        <div className="bg-light-gray">
            <div className= "header">                
                <div className= "logo" >
                    <Link to="/">
                    <img className="" alt="logo" src = {logo}></img>
                    </Link>
                </div>                 
                <Link to="/" className="lettersLink">     
                    <div className="lettersLogoContainer">
                        <h1 className='letterLogo'>Mad</h1>
                        <h1 className='letterLogo' id="brosRed">Bros</h1>
                    </div>                                
                </Link>                                                                   
                {navBar}
                {socialIcons}
            </div>          
        </div>        
          ); 
  }   
}

export default Header;
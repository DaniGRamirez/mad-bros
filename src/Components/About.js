import React, {Component} from 'react';
import './About.css';

class About extends Component {   

  render(){  
      return(         
        <div className="mainContainer">   
          <div className="usContainer">
            <img className="usItem" src="http://lorempixel.com/256/256"></img>            
            <div className="usItem" id="usText">
              <h1>Quien coño somos</h1>
              <p>Esto es el parrafo para el about sobre nosotros, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              Esto es el parrafo para el about sobre nosotros, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>     
            <img className="usItem" src="http://lorempixel.com/256/256"></img>                  
          </div>    
          <div className="madBrosImgContainer">           
            <img id="madBrosImg" src="http://lorempixel.com/1024/1024"></img>            
          </div>                       
        </div>        
        
          ); 
  }   
}

export default About;
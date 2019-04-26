import React, {Component} from 'react';
import './About.css';
// import photoDani from '../img/Dani.jpg';
// import photoMarcos from '../img/Marcos.jpg';

class About extends Component {   

  render(){  
      return(         
        <div className="mainContainer">   
          <div className="usContainer">
            <img className="usItem imgUs" src="img/Us/Marcos.jpg"></img>            
            <div className="usItem" id="usText">
              <h1>Quiénes somos ?</h1>
              <p>Mad Bros esta formado por Dani y Marcos García Ramírez, dos hermanos residentes en Madrid.</p>            
              <p>Después de varios años de experiencia desarrolando la cuenta de instagram   
                <a id="linkInstaLife" target="_blank" href="https://www.instagram.com/lifeinredandwhite/?hl=es">@lifeinredandwhite</a>
                nos hemos profesionalizado para llevar nuestras ideas y experiencia a todo aquel que quiera mejorar su imagen
                o la de su producto.</p>
            </div>     
            <img className="usItem imgUs" src="img/Us/Dani.jpg"></img>                  
          </div>    
          {/* <div className="madBrosImgContainer">           
            <img id="madBrosImg" src={photoDani}></img>            
          </div>                        */}
        </div>        
        
          ); 
  }   
}

export default About;
import React, {Component,Fragment} from 'react';
import './Home.css';
import photoMain from '../img/foto-8.jpg';
// import './InstaFeed';


class Home extends Component {   
  
  render(){  
      return(         
        <div>           
            <div className="fullImage">
                <img src={photoMain}/>
            </div>
            <div className="quoteContainer">            
                <h1>"Mejoramos tu imagen personal y la de tu producto"</h1>                         
            </div>             
            <div className= "InstaFeed">              
              <div className="powr-instagram-feed" id="d9174698_1553704120"></div>
            </div>     
        </div>        
          ); 
  }   
}

export default Home;
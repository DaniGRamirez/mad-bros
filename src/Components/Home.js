import React, {Component,Fragment} from 'react';
import './Home.css';
import photoMain from '../img/foto-8.jpg';
import './InstaFeed';
import InstaFeed from './InstaFeed';

class Home extends Component {   
  
  render(){  
      return(         
        <div>           
            <div className="fullImage">
                <img src={photoMain}/>
            </div>
            <div className="quoteContainer">            
                <h1>"Too fast to live, too young to die"</h1>                         
            </div>
            <div className="powr-instagram-feed" id="d9174698_1553704120"></div>
            <InstaFeed/>
        </div>        
          ); 
  }   
}

export default Home;
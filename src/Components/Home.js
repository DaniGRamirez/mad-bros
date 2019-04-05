import React, {Component} from 'react';
import './Home.css';

class Home extends Component {   
  render(){  
      return(         
        <div>           
            <div className="fullImage">
                <img src="http://lorempixel.com/1024/1024" />
            </div>
            <div className="quoteContainer">            
                <h1>"Too fast to live, too young to die"</h1>                         
            </div>
            <div className="powr-instagram-feed" id="d9174698_1553704120"></div>
        </div>        
          ); 
  }   
}

export default Home;
import React, {Component,Fragment} from 'react';
import './Home.css';
import photoMain from '../img/foto-8.jpg';
import { buildUrl } from 'react-instafeed'

const options = {
  accessToken: 'access...',
  clientId: 'client...',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 123,
}

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
        </div>        
          ); 
  }   
}

export default Home;
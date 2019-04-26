
import React, {Component} from 'react';
import { debug } from 'util';
import { debuglog } from 'util';
import './SimpleContact.css';

class SimpleContact extends Component {   
  
    render(){
      return(      
      <div className="contactContainer">
        <h1>Mail de contacto:</h1>
        <p>contact@madbrosspain.com</p>
      </div>
          ); 
  }     
}

export default SimpleContact;
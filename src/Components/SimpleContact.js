
import React, {Component} from 'react';
import { debug } from 'util';
import { debuglog } from 'util';
import './SimpleContact.css';

class SimpleContact extends Component {   
  
    render(){
      return(      
      <div className="contactContainer">
        <h1>Contact mail</h1>
        <p>madbros.spain@gmail.com</p>
      </div>
          ); 
  }     
}

export default SimpleContact;
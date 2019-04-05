
import React, {Component} from 'react';
import { debug } from 'util';
import { debuglog } from 'util';
import './Contact.css';
// import { StyleSheet, Button, View } from 'react-native'
// //import email from 'react-native-email'

class Contact extends Component {   
  test(){
console.log("Send mail");
  }

  render(){
      return(         
        <div className="container">
        <div styles="text-align:center" className="introContainer">
          <h2>Contacta con nosotros</h2>
          <p>Mandanos un mail</p>
        </div>
        <div className="row">
          <div className="column">
            <img src="https://picsum.photos/1920/1080"/>
          </div>
          <div className="column">
            <form>
              <label htmlFor="fname">Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
              <label htmlFor="lname">Email</label>
              <input type="email" id="lname" name="email" placeholder="Your email.."/>             
              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." styless="height:170px"></textarea>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>     
      </div>         
          ); 
  }   

  Test()
  {
    console.log("Test email");
  }

}

export default Contact;
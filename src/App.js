import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Contact from './Components/Contact'
import PhotoGallery from './Components/PhotosGallery';
import Home from './Components/Home';
import About from './Components/About'
import BurguerMenu from './Components/BurguerMenu';
import SimpleContact from './Components/SimpleContact';

import{
  BrowserRouter as Router,
  Route,  
} from "react-router-dom"

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    // console.log(window.innerWidth);
    this.setState({ isDesktop: window.innerWidth > 500 });
  }

  render() {
    let navBurguerMenu;
    if(this.state.isDesktop === false)        
      navBurguerMenu = <BurguerMenu/>;
    else
      navBurguerMenu = ""

    return (
      <Router>
      <div>
        <Header isDesktop={this.state.isDesktop}/>      
        {navBurguerMenu}
        <Route exact path='/Home' component={Home}/> 
        <Route exact path='/Photos' component={PhotoGallery}/>        
        <Route exact path='/About' component={About}/>  
        <Route exact path='/Contact' component={SimpleContact}/>   
      </div>
      </Router>
    );
  }
}

export default App;

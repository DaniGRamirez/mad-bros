import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Header from './components/Header'
import Contact from './components/Contact'
import PhotoGallery from './components/PhotosGallery';
import Photos from './components/Photos';
import Home from './components/Home';
import About from './components/About'
import BurguerMenu from './components/BurguerMenu';
import SimpleContact from './components/SimpleContact';

import{
  BrowserRouter as Router,
  Route,  
} from "react-router-dom"

import {setCategory} from './redux/Actions.js'

const mapStateToProps = state =>{ 
  // console.log(state.categorySelected);
  return {    
    categorySelected: state.categorySelected
  }
}

// const mapDispatchToProps = (dispatch) =>{
//      return dispatch(setCategory("Text"));
// //  (event) => dispatch(setCategory("Test1"))
// }

class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
    componentDidMount() {
      // console.log("Mount in App");
      // console.log(this.props.store);
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
      // console.log(this.props);
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
        <Route exact path='/' component={Home}/> 
        <Route exact path='/Photos' component={Photos}/>        
        <Route exact path='/About' component={About}/>  
        <Route exact path='/Contact' component={SimpleContact}/>   
      </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps,null)(App);
//export default App;

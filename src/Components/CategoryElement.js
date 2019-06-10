import React, {Component} from 'react';
import  './CategoryElement.css';
import {setCategory} from "../redux/Actions.js"
import {connect} from 'react-redux';

import{ 
  Link
} from "react-router-dom"

const mapStateToProps = state =>{ 
  // console.log(state.categorySelected);
  return {    
    categorySelected: state.categorySelected
  }
}

class CategoryElement extends Component {   
      
    constructor()
    {
      super();
      this.DoLogicOnClick = this.DoLogicOnClick.bind(this);      
      this.state = 
      {
          selected: false          
      };
    }

    DoLogicOnClick()          
    {                    
      const action_change = this.props.onCategoriesChanged.bind(this);
      console.log("click on " + this.props.CategoryInfo.id);
      const action = setCategory(this.props.CategoryInfo.id);      
      action_change(this.props.CategoryInfo.id);
      this.props.dispatch(action);  
      //console.log('The link was clicked.');        
    }

    componentDidMount() {
      // console.log("Mount in Category");            
      // console.log(this.props.CategoryInfo);      
    }       

  drawCategory()
  {
    if(this.props.categorySelected == this.props.CategoryInfo.id){
      return(
      <div className="category selected"  id={this.props.CategoryInfo.id}>
       <Link to="/Photos" onClick={this.DoLogicOnClick}> {this.props.CategoryInfo.name}</Link>
      </div>); 
     }
     else
     {
      return(
        <div className=" category" id={this.props.CategoryInfo.id}>
         <Link to="/Photos"  onClick={this.DoLogicOnClick}> {this.props.CategoryInfo.name}</Link>
        </div>); 
     }
  }

  render(){           
    return(         
      this.drawCategory())
  }   
}

export default connect(mapStateToProps,null)(CategoryElement);
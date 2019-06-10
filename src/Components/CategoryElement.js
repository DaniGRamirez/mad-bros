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
      action_change();
      const action = setCategory(this.props.CategoryInfo.id);      
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
       <a  onClick={this.DoLogicOnClick}> {this.props.CategoryInfo.name}</a>
      </div>); 
     }
     else
     {
      return(
        <div className=" category" id={this.props.CategoryInfo.id}>
         <a  onClick={this.DoLogicOnClick}> {this.props.CategoryInfo.name}</a>
        </div>); 
     }
  }

  render(){           
    return(         
      this.drawCategory())
  }   
}

export default connect(mapStateToProps,null)(CategoryElement);
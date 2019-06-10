import React, {Component,Fragment} from 'react';
import './Photos.css';
import PhotoGallery from './PhotosGallery';
import CategoryElement from './CategoryElement';
import {setCategory} from '../redux/Actions.js' 
import {connect} from 'react-redux';
import { ReactReduxContext } from 'react-redux'
import {SELECT_CATEGORY} from '../redux/Constants'
import { selectedPhotos, getSelectedPhotos}from '../FoldersCategories'

var categories = 
[
  {
     name: "Deportes",
     id: "Sport",
     icon: "All", 
     folder_1_1: 0,   
     folder_2_3: 0,
     folder_3_2: 15,
     folder_4_3: 2,
     folder_3_4: 0,
     folder_5_4: 0,     
  },
  {
    name: "Retratos",
    id: "Portrait",
    icon: "All", 
    folder_1_1: 1,   
    folder_2_3: 2,
    folder_3_2: 6,
    folder_4_3: 1,
    folder_3_4: 0,
    folder_5_4: 2,     
 },   
 {
  name: "Producto",
  id: "Product",
  icon: "All", 
  folder_1_1: 0,   
  folder_2_3: 0,
  folder_3_2: 2,
  folder_4_3: 0,
  folder_3_4: 0,
  folder_5_4: 0,     
},   
]

var category_all = 
{
  name: "Todo",
  id: "All",
  icon: "All", 
}


const mapStateToProps = state =>{   
  return {    
    categorySelected: state.categorySelected
  }
}

var categories_selected = [];

function SetCategories(_categorySelected)
{  
  categories_selected = [];
   console.log("Debug category selcted");
  // console.log(_categorySelected);
  switch(_categorySelected)
  {
    case "All":
        categories_selected.push(categories[0]);
        categories_selected.push(categories[1]);      
        categories_selected.push(categories[2]);  
        break;
      case "Sport":
          categories_selected.push(categories[0]);        
        break;
      case "Portrait":
          categories_selected.push(categories[1]);      
      break;
      case "Product":
          categories_selected.push(categories[2]);      
      break;
        default:
          break;

        }            
  // console.log(categories_selected);
  return <h1></h1>;
}

const CategoriesElements = categories.map((user,i) =>
{          
  return <CategoryElement key={i} CategoryInfo={categories[i]} onCategoriesChanged = {onCategoriesChanged}></CategoryElement>      
})

class Photos extends Component {   
     
    constructor()
    {
      super();         
      this.onCategoriesChanged = this.updatePredicate.bind(this);
    }
       
    onCategoriesChanged()
    {
      SetCategories(this.props.categorySelected);
      getSelectedPhotos(categories_selected);
    }

    componentDidMount() {   
      this.onCategoriesChanged();
      // console.log("Mount in photos");
      //  console.log(this.props.categorySelected);               
      // console.log(selectedPhotos);
  }  

  render(){      

    // console.log("Props photo -");
    // console.log(this.props);
      return(        
        <div>                   
            <div className="navCategories">  
                <CategoryElement CategoryInfo={category_all} onCategoriesChanged = {this.onCategoriesChanged}></CategoryElement>       
                {CategoriesElements}               
            </div>                                  
            <PhotoGallery selectedPhotos = {selectedPhotos} ></PhotoGallery>
        </div>        
          ); 
  }   
}

export default connect(mapStateToProps,setCategory)(Photos);
//export default Photos;
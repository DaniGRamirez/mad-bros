import React, {Component,url} from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import './PhotosGallery.css';
import logoInstagram from '../img/LogoInstaBN.png';
import sizeOf from 'image-size';

  const selectedPhotos = []; 

  function getSelectedPhotos(categoriesSelected)
  {       
    if(categoriesSelected.length == 0)
      return;

    selectedPhotos.length = 0;    

    for (let i = 0; i < categoriesSelected.length; i++) {
     
      AddPhotosInFolder(categoriesSelected[i].name+"/1_1",1,1,categoriesSelected[i].folder_1_1);
      AddPhotosInFolder(categoriesSelected[i].name+"/3_2",3,2,categoriesSelected[i].folder_3_2);
      AddPhotosInFolder(categoriesSelected[i].name+"/2_3",2,3,categoriesSelected[i].folder_2_3);            
      AddPhotosInFolder(categoriesSelected[i].name+"/4_3",4,3,categoriesSelected[i].folder_4_3);      
      AddPhotosInFolder(categoriesSelected[i].name+"/3_4",3,4,categoriesSelected[i].folder_3_4);      
      AddPhotosInFolder(categoriesSelected[i].name+"/5_4",5,4,categoriesSelected[i].folder_5_1);    
    } 

    shuffle(selectedPhotos);
    console.log(selectedPhotos);
    console.log("invoking getselected");

  };

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  function changeDimensions(indexToChange,_width,_heigth)
  {       
    indexToChange.forEach((element)=>
    {     
      selectedPhotos[element].width = _width;
      selectedPhotos[element].height = _heigth;      
    });    
  }  

  function AddPhotosInFolder(folder,_width,_height,_number_of_photos)
  {            
    for (let index = 0; index < _number_of_photos; index++) {            
      let indexPhoto = index+1;
      selectedPhotos.push(
      {        
        src: 'img/' + folder + "/"+ "Foto" + indexPhoto + ".jpg",         
        width: _width,
        height: _height
      }    
      )
    }  
  }

class GalleryTest extends Component {

  constructor() {
    super();    
    this.state = 
    {
       currentImage: 0 
       
      };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);    
  }
  
  componentDidMount() {   
    console.log("Mount in photos"); 
    console.log(this.props.categoriesSelected);
    getSelectedPhotos(this.props.categoriesSelected);    
    //this.props.setCategory("Photos");
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  drawGallery()
  {
    if(selectedPhotos.length != 0)
    {
      return(        
        <div>
          <Gallery photos={selectedPhotos}  columns="3" onClick={this.openLightbox} direction={"column"} />
          <Lightbox images={selectedPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
        </div>        
      )
    }
  }

  render(){
      return(     
        <div className = "GalleryDiv">
        {this.drawGallery}
        </div>
      ) 
  }   
}

export default GalleryTest;
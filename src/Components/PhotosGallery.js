import React, {Component,url} from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import './PhotosGallery.css';
import logoInstagram from '../img/LogoInstaBN.png';
import sizeOf from 'image-size';
// var sizeOf = require('image-size');


const photos = [
    {
      src: 'https://picsum.photos/1920/1080', 
      width: 3,
      height: 2
    },
    {
      src: 'LogoInstaBN.png',   
      // src: "/static/media/LogoInstaInvertido.391776ef.png"
      width:1,    
      height:1, 
    },
    {
      src: 'https://picsum.photos/200/200',   
      width: 2,
      height: 2 
    },
    {
      src: 'https://picsum.photos/500/500', 
      width: 2,
      height: 2
    }
  ];   

  const selectedPhotos = []; 

  function getSelectedPhotos()
  {
    let numberPhotos = 15;
    for (let index = 0; index < numberPhotos; index++) {            
      let indexPhoto = index+1;
      selectedPhotos [index] = 
      {
        
        src: '../img/' + "foto-" + indexPhoto + ".jpg",         
        width: 3,
        height: 2
      }
      // var dimensions = sizeOf('../img/LogoInstaBN.png');
      // console.log(dimensions.width, dimensions.height);
      // selectedPhotos[index].width = dimensions.width/1000;
      // selectedPhotos[index].height = dimensions.height/1000;
    }  

    changeDimensions([0,3],2,3);
    changeDimensions([1],1,1);
    changeDimensions([5],1.2,1);    
    console.log(selectedPhotos);
    console.log("invoking getselected");
  };

  function changeDimensions(indexToChange,_width,_heigth)
  {       
    indexToChange.forEach((element)=>
    {     
      selectedPhotos[element].width = _width;
      selectedPhotos[element].height = _heigth;      
    });    
  }  

class GalleryTest extends Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    getSelectedPhotos();
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

  render(){
      return(     
        <div className = "GalleryDiv">
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

export default GalleryTest;
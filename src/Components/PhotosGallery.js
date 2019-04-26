import React, {Component,url} from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import './PhotosGallery.css';
import logoInstagram from '../img/LogoInstaBN.png';
import sizeOf from 'image-size';
// var sizeOf = require('image-size');

  const selectedPhotos = []; 

  function getSelectedPhotos()
  {       
    selectedPhotos.length = 0;
    // selectedPhotos.push(
    //   {
    //     src: '/img/' + "Foto2.jpg",         
    //     width: 2,
    //     height: 3
    //   }
    // )

    // selectedPhotos.push(
    //   {
    //     src: '../img/test/' + "Foto2.jpg",         
    //     width: 2,
    //     height: 3
    //   }
    // )

    // selectedPhotos.push(
    //   {
    //     src: '../img/' + "Foto2.jpg",         
    //     width: 2,
    //     height: 3
    //   }
    // )

    AddPhotosInFolder("1_1",1,1,1);
    AddPhotosInFolder("3_2",3,2,12);
    AddPhotosInFolder("2_3",2,3,2);            
    AddPhotosInFolder("4_3",4,3,2);      
    AddPhotosInFolder("3_4",3,4,0);      
    AddPhotosInFolder("5_4",5,4,1);    
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
    //selectedPhotos.push();    
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
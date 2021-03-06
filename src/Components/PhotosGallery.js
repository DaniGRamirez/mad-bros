import React, {Component,url} from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import './PhotosGallery.css';
import logoInstagram from '../img/LogoInstaBN.png';

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
    // console.log("Mount in Photos gallery did"); 
    // console.log(this.props.categoriesSelected);  
    
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

  desiredColumns()
  {
   if(window.innerWidth < 400) 
   return 2;
   else 
   return 3;
  }

  drawGallery()
  {
    // console.log("DrawGallery");
    // console.log(this.props.selectedPhotos);
    if(this.props.selectedPhotos.length != 0)
    {     
      return(        
        <div>
          <Gallery photos={this.props.selectedPhotos}  columns={this.desiredColumns} onClick={this.openLightbox} direction={"column"} />
            <Lightbox images={this.props.selectedPhotos}
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
      // console.log("Render photogallery");     
      return(     
        <div className = "GalleryDiv">          
          {this.drawGallery()}
        </div>
      ) 
  }   
}

export default GalleryTest;
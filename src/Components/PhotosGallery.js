import React, {Component,url} from 'react';
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import './PhotosGallery.css';
import logoInstagram from '../img/LogoInstaBN.png';

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

class GalleryTest extends Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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
        <Gallery photos={photos}  columns="3" onClick={this.openLightbox} direction={"column"} />
        <Lightbox images={photos}
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
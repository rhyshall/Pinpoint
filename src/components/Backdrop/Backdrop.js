import React, {Component} from 'react';
import {BACK_DROP_IMAGES} from '../../shared/Const';
import './Backdrop.css';

class Backdrop extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {current_images: BACK_DROP_IMAGES};
  }

  handleResize = () =>
  {
    let images = BACK_DROP_IMAGES;
    let width = window.innerWidth;
    
    if (width < 1200
        && width >= 768)
    {
      images = images.slice(0,
                            12);
    }

    else if (width >= 576
             && width < 768)
    {
      images = images.slice(0,
                            9);
    }

    else if (width < 576)
    {
      images = images.slice(0,
                            6);
    }

    else 
    {
      //slice nothing
    }

    this.setState({current_images: images});
  }

  componentDidMount() 
  {
    window.addEventListener("resize",
                            this.handleResize);
  }

  render()
  {
    return(
        <div className='row no-gutters' style={ {height: '91.7vh' }}>
          {
            this.state.current_images.map((img, index) => (
              <div className='--back-city-photo col-6 col-sm-4 col-md-3 col-xl-2' 
                   style={{height: '33.33%'}} key={index}>
                <img src={img.src} 
                     alt={img.alt} 
                     className='img-fluid' 
                     style={{aspectRatio: '1.25/1', height: '100%', width: '100%'}} />
              </div>
            ))
          }
        </div>
    )
  }
}

export default Backdrop;
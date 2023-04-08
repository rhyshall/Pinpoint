import React, {Component} from 'react';
import {BACK_DROP_IMAGES} from '../../shared/Const';
import './Backdrop.css';

class Backdrop extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {current_images: BACK_DROP_IMAGES};

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize()
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
            this.state.current_images.map(img => (
              <div className='--back-city-photo col-6 col-sm-4 col-md-3 col-xl-2' style={{height: '33.33%'}}>
                <img src={img.src} alt={img.alt} className='img-fluid' style={{aspectRatio: '1.25/1', height: '100%', width: '100%'}} />
              </div>
            ))
          }
        </div>
    )

    // return(<div className="--back-container">
    //          <ul className="--back-city-showcase">
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={STATUE_OF_LIBERTY} 
    //                     alt="Statue of Liberty (New York)"/>
    //              </figure>
    //            </li>

    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={BOSTON_SKYLINE}
    //                     alt="Boston Skyline"/>
    //              </figure>
    //            </li>

    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={LINCOLN_MEMORIAL}
    //                     alt="Lincoln Memorial (Washington D.C.)"/>
    //              </figure>
    //            </li>
         
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={LIBERTY_BELL}
    //                     alt="Liberty Bell (Philadelphia)"/>
    //              </figure>
    //            </li>
         
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={BELLAGIO}
    //                     alt="Willis Tower (Chicago)"/>
    //              </figure>
    //            </li>
    //          </ul>
            
    //          <ul className="--back-city-showcase">
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={MIAMI_BEACH}
    //                     alt="Miami Beach"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={GATEWAY_ARCH}
    //                     alt="Gateway Arch (St. Louis)"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={COLORADO_MOUNTAINS}
    //                     alt="Colorado Mountains"/>
    //              </figure>
    //            </li>

    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={BIG_TEX}
    //                     alt="Big Tex (Dallas)"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={MUSIC_ROW}
    //                     alt="Music Row (Nashville)"/>
    //              </figure>
    //            </li>
    //          </ul>

    //          <ul className="--back-city-showcase">
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={HOLLYWOOD_HILLS}
    //                     alt="Hollywood Hills (Los Angeles)"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={GOLDEN_GATE_BRIDGE}
    //                     alt="Golden Gate Bridge (San Francisco)"/>
    //              </figure>
    //            </li>

    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={VIRGINIA_BEACH}
    //                     alt="Virginia Beach"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={GRAND_CANYON}
    //                     alt="Grand Canyon (Flagstaff)"/>
    //              </figure>
    //            </li>
       
    //            <li>
    //              <figure className="--back-city-photo">
    //                <img src={SPACE_NEEDLE}
    //                     alt="Space Needle (Seattle)"/>
    //              </figure>
    //            </li>
    //          </ul>
    //       </div>);
  }
}

export default Backdrop;
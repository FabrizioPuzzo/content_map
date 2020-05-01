import React, {Component} from "react";
import Image from 'react-bootstrap/Image';
import TwitterCircle from '../img/twitter_circle.svg';
import Rec from '../img/rec.svg';

class ImgMarker extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
        user:  props.data.user
        }
      }
  
    render() { 
      return (
        <div className="markerContainer">
          <div className="imgMarkerCircImgBack" style={{backgroundImage: `url(${TwitterCircle})` }}>
            <div className="imgMarkerCircImgContent" style={{backgroundImage: `url(${this.props.data.user_profile_img_hd})`}} >
            </div>
          </div>
          <div className="imgMarkerRecImgBack" style={{backgroundImage: `url(${Rec})` }} >
            <span style={{color: "#ffffff"}}>{this.props.data.user.screen_name}</span>
          </div>
        </div>
      );
    }
  }

export default ImgMarker;



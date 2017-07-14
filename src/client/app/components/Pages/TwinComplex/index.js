import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PictureShow from  '../../../components/PictureShow';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';





// 
//  
// 'https://c1.staticflickr.com/1/211/493885707_394f4edb6e_z.jpg?zz=1',

let imageList = [
    './resources/TwinKomplex/IMG_9996.JPG',
    './resources/TwinKomplex/IMG_9859.JPG',
    './resources/TwinKomplex/Tempelhof.jpg',
    './resources/TwinKomplex/Marquardt01.jpg',
    './resources/TwinKomplex/Marquardt02.jpg',
    './resources/TwinKomplex/Max2011.jpg',
    './resources/TwinKomplex/Robert_Neumann.jpg',
    './resources/TwinKomplex/Robert_Neumann_2.jpg',
    './resources/TwinKomplex/Sandra01.jpg',
    './resources/TwinKomplex/Sandra03.jpg',
    './resources/TwinKomplex/Sandra06.jpg',
    './resources/TwinKomplex/Stefan_Bergel.jpg',
    './resources/TwinKomplex/Torsten_Sense.jpg',
    './resources/TwinKomplex/Torsten_Sense_2.jpg',

    './resources/TwinKomplex/Johnson02.jpg',
    './resources/TwinKomplex/Johnson03.jpg',
    './resources/TwinKomplex/Johnson04.jpg',
    './resources/TwinKomplex/Katja_Weilandt.jpg',
    './resources/TwinKomplex/Marc.jpg',
    './resources/TwinKomplex/Marlene.jpg',

    './resources/TwinKomplex/IrmHermann.jpg',
    './resources/TwinKomplex/Irm_Hermann.jpg',
    './resources/TwinKomplex/Irm_Hermann_2.jpg',
    './resources/TwinKomplex/Irm_Hermann_Bernhard_Schuetz.jpg',

    './resources/TwinKomplex/Bernhard.jpg',
    './resources/TwinKomplex/Andrea_Schoening.jpg',
    './resources/TwinKomplex/Anika_Mauer_01.jpg',
    './resources/TwinKomplex/Anika_Mauer_02.jpg',
    './resources/TwinKomplex/AnnikaCIA.png',
    './resources/TwinKomplex/Annika.jpg',
    './resources/TwinKomplex/BenjaminBlog02.jpg',
    './resources/TwinKomplex/BenjaminBlog03.jpg',
    './resources/TwinKomplex/BenjaminBlog08.jpg',
    './resources/TwinKomplex/BenjaminFrontal.jpg',
    './resources/TwinKomplex/BenjaminUbahn-Profil.jpg',
    './resources/TwinKomplex/Bernhard.jpg',
    './resources/TwinKomplex/Bernhard_2.jpg',
    './resources/TwinKomplex/Bernhard_3.jpg',

    './resources/TwinKomplex/Christian_Beermann.jpg',
    './resources/TwinKomplex/Christian_Brueckner.jpg',
    './resources/TwinKomplex/Christine_Bernhard.jpg',
    './resources/TwinKomplex/Christine_Utterberg.jpg',

    './resources/TwinKomplex/Christine_Utterberg_2.jpg',
    './resources/TwinKomplex/Dieter_Bach.jpg',
    './resources/TwinKomplex/Dieter_Bach_2.jpg',
    './resources/TwinKomplex/DieterBach_3.jpg',
    './resources/TwinKomplex/DieterBachFlughalle.png',







    ]



class TwinKomplex extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }

 
  componentDidMount() { 
  }

  render() {

    // <PictureShow list = { imageList }  parentID = "DiaShowCanvas" />

    return (
        <div className = "computerworld">
          <div id = "DiaShowCanvas">
            <PictureShow random_sequence list = { imageList }  duration = { 6000}  interval = { 3000 } type = { "FADE"} parentID = "DiaShowCanvas" />
          </div>

          <div className = "Game">

            <div className = "Explanation">
              <h1>TwinKomlex - A Real World Game</h1>
              { TEXT.__("twinkomplex_game") }
            </div>
          </div>

        </div>
    );
  }
}




function mapStateToProps(state) {
  return {
    state: state
  };

}

export default connect(mapStateToProps)(TwinKomplex);


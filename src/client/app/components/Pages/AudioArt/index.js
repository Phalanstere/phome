import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Waves from  '../../../components/Waves';

console.log(Waves);


// import Wavesurfer from 'wavesurfer';
// if (Wavesurfer) alert("ist da");
// if (Wavesurfer) alert("ist eingelesen");


// var Waveform = require('react-waveform');
// import WaveForm from 'react-native-audiowaveform';


class AudioArt extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }

 
  render() {




    return (
        <div className ="AudioArtPage">
          <Waves />

          <div className ="AudioArtText">
            <div className = "AudioArtExplanation">
                { TEXT.__("AudioArt") }
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

export default connect(mapStateToProps)(AudioArt);

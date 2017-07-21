import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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
          still under construction - now with waveforms
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

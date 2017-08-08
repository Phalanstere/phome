import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MusicVisualizer from  '../../../components/MusicVisualizer';



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

          <MusicVisualizer />
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

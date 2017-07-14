import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class Audio extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }


  getSpeaker(speaker) {
    for (var i = 0; i < speaker.length; i++) {

    }
  }


  getAudio(audio) {
    this.subtitle       = null;
    this.content        = null;
    this.together_with  = null;
    this.composer       = null;
    this.speaker        = null;
    this.image          = null;
    this.directed_by    = null;
    this.duration       = null;
    this.link           = null;

    if (audio.image) this.image = ( <img src = { audio.image } /> );

    if (audio.directed_by) this.directed_by = ( <div className = "AP_director"><span className = "AP_by">{TEXT.__("directed_by") }:</span> {audio.directed_by} </div>);


    if (audio.subtitle) this.subtitle = ( <div className = "AP_subtitle"> { audio.subtitle } </div> )  
    
    if (audio.content)  this.content = (
      <div className = "AP_content"> { audio.content } </div>
    )

    if (audio.together_with) this.together_with = ( <div className = "AP_together_with"> {TEXT.__("Together") } { audio.together_with } </div> )


    if (audio.composer) this.composer = ( <div className = "AP_composer"><span className = "AP_by">{TEXT.__("composer") }: </span>{ audio.composer}</div>)

    if (audio.speaker) this.speaker = ( <div className = "AP_speaker">
      {TEXT.__("speaker") } 
      <ul>

      { audio.speaker.map((speaker) =>
        <li>{speaker}</li>
      ) }

      </ul>
    </div> )

    if (audio.duration) this.duration =  ( <div className = "AP_duration"><span className = "AP_by">{TEXT.__("duration") }:</span> {audio.duration} min</div>);

  }


 
  render() {

  

  let audio = this.props.state.actual_audio;
  let lang = this.props.state.actual_language;

  let desc  = "Noch keine Beschreibung";
  if (audio.description) {
    desc = audio.description[lang];
  }

  let piece = this.getAudio(audio);


    return (
        <div className = "AudioPage">
          <div className = "AP_Image"> { this.image } </div>
          <div className = "AP_Info">
            <div className = "Ap_Title">{  audio.title  }</div>
            { this.subtitle }
            { this.together_with }
            { this.content }
            { this.directed_by }            
            { this.composer }
            { this.speaker }
            { this.duration }

            <div className = "AP_published">{audio.publisher}, {audio.date}</div>
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

export default connect(mapStateToProps)(Audio);

import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import essays from './AudioList.js';
import { TweenMax } from "gsap";


class AudioPieces extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }


 }

  onClick(audio) {
    console.log(audio);
    store.dispatch({ type: "AUDIO_SELECTED", payload: audio });  
    window.location.hash = "#/audio?id=" + audio.id;
    
  }

  cooperation(e) {
      return (
        <div className = "together">{ TEXT.__("Together") } { e.together_with } </div>
      )
  }


  getAudio(e, i) {

    let description = "Beschreibung";
    if (e.description) description = e.description['de'];

    if (! e.pdf && ! e.link)
    {
    let together_with = null;  

        if (e.together_with)
        {
        together_with = this.cooperation(e);    
        }    


    return (
        <div onClick =  { this.onClick.bind(this, e, i) } key = { i } className = "single_essay">
          <div className = 'all_essays'>
            <div title = { description } className = 'essaytitle' >
              { e.title }
              <span className = 'essaysubtitle'>{e.subtitle}</span>  
            </div>
            { together_with }


          </div>
          <div className = "essay_journal">
            { e.publisher }, {e.date}
          </div>
        </div>
    )}
     else
      {
      let type = "pdf";  
      if ( e.link)  type = "link";

      return (
        <div key = { i } onClick =  { this.onClick.bind(this, e, i) }>
          <div className = 'all_essays'>
              <div title = { description } className = 'essaytitle clickable' onClick={this.onClick.bind(this, e, type) } >
              { e.title }
              <span className = 'essaysubtitle'>{e.subtitle}</span>  
              </div>
              { together_with }

              <div className = "essay_journal">
                { e.publisher }, Nummer: { e.number } , {e.date}
              </div>
            </div>
        </div>
        )   
      }
  }

  renderAudios() {
   let list = [];


    for (var i = 0; i < essays.length; i++) {
      let e = essays[i];
      
      list.push(
       this.getAudio(e, i)
      )
    }


  return list;
  }


  componentDidMount() {
    let el = this.dom;
    TweenLite.to(el, 0, {opacity:0.01})
    TweenLite.to(el, 1, {opacity:1})
    store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 }); 
  }

  render() {


    const back = {
      width: '100%',
      height: '100%',
      // backgroundImage: 'url(' + bg + ')'
      background: 'red'

    }

    const low = {
      marginTop: '1vw',
      width: "100%",
      fontSize: '1.5vw',
      color: '#337ab7',
      textAlign: 'right',
      paddingRight: '20px'
    }  


    return (
        <div 
        ref={(dom) => { this.dom = dom; }}
        className = 'AudioPiecesPage' >
            <h2 style = {{ color: 'rgb(0,80,200' }} >
              { this.state.TEXT.__('AudioPieces') }
            </h2>
          <div className = 'AudioPiecesContainer'>
            <div>
              { this.renderAudios() }
            </div>
          </div>
        </div>  
    );
  }
}




function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(AudioPieces);

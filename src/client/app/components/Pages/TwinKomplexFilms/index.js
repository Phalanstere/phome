import React, { Component } from 'react';
import ReactPDF from 'react-pdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const schedule = 'https://www.youtube.com/watch?v=WmFV5epMrFk';

import {withRouter} from 'react-router';
import YouTube from 'react-youtube';
import { TweenMax } from "gsap";

import videolist from './video_list.js';


Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}


let videos = videolist.shuffle();



class TwinKomplexFilms extends Component {

 constructor(props) {
   super(props);

  this.state = {
      TEXT: global.TEXT,
      locale: this.props.state.actual_language,
      max: 12,
      offset: 0,
    }

 }



  componentDidMount() {
    let el = document.getElementsByClassName("video");
    TweenLite.to(el, 0, {opacity:0.01})
    TweenLite.to(el, 3, {opacity:1})
  }


 get_actors(list) {
   let str = "";
   for (var i = 0; i < list.length; i++) {
      str += list[i];
      if (i != list.length -1) str += ", "
   }
   return str;
 }


 get_video(e, i) {
    const opts = {
      height: '236',
      width: '420',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 1,
        showinfo: 0,
      }
    };


    this.description = "Beschreibung";
    if (e.description) this.description = e.description[this.props.language];

    this.title          = null;
    this.link           = null;
    this.actors         = null;


    if (e.link) this.link = (
      <YouTube
        videoId= {e.link}
        opts={opts}
        onReady={this._onReady}
      />
      )

    
    
    
    // ( <iframe width = "280" height = "158" src = {schedule} frameborder="0" allowfullscreen /> ); 
    this.title = ( <span title = { this.description } >{ e.title }.</span> ); 


    this.actors = ( <div className = "actors">{ TEXT.__("with")} { this.get_actors(e.actors)}  </div>);


    return (
          <div className = "video" key = { i }  >
            { this.link  }
            { this.actors }
        </div>
    )

  }



  render_videos() {
    let list = [];
    let start = 0 + this.state.offset;
    let end   = start + 12;

    for (var i = start; i < end; i++) {
    
    if (i < videos.length) 
      {
      let video = videos[i];
      
        list.push(
        this.get_video(video, i)
        )
      }
    }
    
    return list;
  }



  getMore() {
    let offset = this.state.offset + 12;
    this.setState( { 
      offset: offset,

    } ); 
  }


  back() {
    let offset = this.state.offset - 12;
    this.setState( { 
      offset: offset,

    } ); 
  }


  renderArrows() {
    let left = null;
    let right = null;
    if ( (this.state.offset + 12) < videos.length) 
      {
      right = ( <div onClick = { this.getMore.bind(this)} className = 'whitearrowR'>{'>'}</div> );  
      }
    
    if (this.state.offset > 0) 
      {
      left = ( <div onClick = { this.back.bind(this)} className = 'whitearrow'>{'<'}</div> );  
      }
    

      return (
        <div className = "video_navigation">
          { left  }
          { right }
        </div>
      )

  }


  render() {
    return (
      <div>
        <div 
          className = "TwinKomplexFilms">
          {  this.renderArrows() }
          { this.render_videos() }
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

export default withRouter(connect(mapStateToProps)(TwinKomplexFilms) );


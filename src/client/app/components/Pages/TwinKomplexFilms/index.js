import React, { Component } from 'react';
import ReactPDF from 'react-pdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const schedule = 'https://www.youtube.com/watch?v=WmFV5epMrFk';

import {withRouter} from 'react-router';
import YouTube from 'react-youtube';
import { TweenMax } from "gsap";

import videos from './video_list.js';



class TwinKomplexFilms extends Component {

 constructor(props) {
   super(props);
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
    for (var i = 0; i < videos.length; i++) {
    
    let video = videos[i];
      
      list.push(
       this.get_video(video, i)
       )
    }
    
    return list;
  }



  render() {
    return (
      <div 
        className = "TwinKomplexFilms">
        { this.render_videos() }
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


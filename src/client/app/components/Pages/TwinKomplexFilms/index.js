import React, { Component } from 'react';
import ReactPDF from 'react-pdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const schedule = 'https://www.youtube.com/watch?v=WmFV5epMrFk';

import {withRouter} from 'react-router';
import YouTube from 'react-youtube';
import { TweenMax } from "gsap";


let videos = [
  {
  title: "Trailer",  
  link: 'ta97FX8ziWc',
  actors: ['Sebastian Blomberg', 'Anne Ratte-Polle', 'Irm Hermann', 'Bernhard Schütz'],
  description: {
      de: "Trailer",
      en: "Game-Trailer"
    },

  },
  {
  title: "This is not a Game",  
  link: 'xBIMgvzWJ9c',
  actors: ['Johannes Reich'],
  description: {
      de: "Das ist kein Spiel",
      en: "This is not a Game"
    },

  },
  {
  title: "Psychotest II",  
  link: 'OSmwlah7ZhY',
  actors: ['Dieter Bach'],
  description: {
      de: "Trailer",
      en: "Game-Trailer"
    },

  },
  {
  title: "Der Offiziant",  
  link: 'WmFV5epMrFk',
  actors: ['Gerd Wameling'],
  description: {
      de: "Trailer",
      en: "Game-Trailer"
    },

  },
  {
  title: "Love Story I",  
  link: 'p0Dzp7rybcw',
  actors: ['Christine Utterberg, Bernhard Schütz'],
  description: {
      de: "Love Story I",
      en: "Love Story I"
    },

  },
  {
  title: "Psychotest 4",  
  link: 'mcYwwUuhBeo',
  actors: ['Dieter Bach'],
  description: {
      de: "Psychotest 4",
      en: "Psychotest 4"
    },

  },
  {
  title: "Max Schach",  
  link: 'anPzBotbtOg',
  actors: ['Bernhard Schüzu'],
  description: {
      de: "Schach",
      en: "Chess"
    },

  },
  {
  title: "The Initiation",  
  link: 'ObA-iVSalj8',
  actors: ['Christian Brückner, Ioana Buliga'],
  description: {
      de: "Initiation",
      en: "Initiation"
    },
  },

  {
  title: "Videoblog Benjamin",  
  link: 'H2Zpr2RfLG0',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Videoblog",
      en: "Videoblog"
    },
  },
  {
  title: "Benjamin-Suche",  
  link: '0T5QgzrCRMs',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Videoblog",
      en: "Videoblog"
    },
  },
  {
  title: "A Corrupted Interview",  
  link: 'Gln3gwF1V9A',
  actors: ['Anne Ratte-Polle'],
  description: {
      de: "Corrupted Interview",
      en: "Corrupted Interview"
    },
  },
  {
  title: "Hotel 6",  
  link: 'nn5AkNmydUk',
  actors: ['Christine Utterberg','Bernhard Schütz'],
  description: {
      de: "Corrupted Interview",
      en: "Corrupted Interview"
    },
  },
  {
  title: "Offiziant",  
  link: 'NAIewNTNE70',
  actors: ['Gerd Wameling'],
  description: {
      de: "Offiziant",
      en: "Offiziant"
    },
  },
  {
  title: "Dialog mit dem Paläolitikum",  
  link: 'w75Ie6c2dwQ',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Corrupted Interview",
      en: "Corrupted Interview"
    },
  },
  {
  title: "Intrigant",  
  link: 'zArC6buQEHE',
  actors: ['Anonymous'],
  description: {
      de: "Intrigant",
      en: "Intrigant"
    },
  },
  {
  title: "First days in Berlin",  
  link: 'tpdGDq0VePk',
  actors: ['Christine Utterberg'],
  description: {
      de: "Intrigant",
      en: "Intrigant"
    },
  },
  {
  title: "Love Story II",  
  link: 'ANJ8b3KipMI',
  actors: ['Christine Utterberg, Bernhard Schütz'],
  description: {
      de: "Love Story II",
      en: "Love Story II"
    },
  },
  {
  title: "Die Warnung",  
  link: 'o0jMyt1e9v4',
  actors: ['Torsten Sense'],
  description: {
      de: "Warnung",
      en: "The Warning"
    },
  },
  {
  title: "Nullpunkt - 2",  
  link: '6w6fDvaUpFI',
  actors: ['Anne Müller'],
  description: {
      de: "Warnung",
      en: "The Warning"
    },
  },
  {
  title: "Psychotest 1",  
  link: 'N5awu0r0X18',
  actors: ['Dieter Bach'],
  description: {
      de: "Psychotest 1",
      en: "Psychotest 1"
    },
  },
  {
  title: "Marlene 1",  
  link: 'tVE_Hx6rrRs',
  actors: ['Irm Hermann'],
  description: {
      de: "Psychotest 1",
      en: "Psychotest 1"
    },
  },

  {
  title: "Love Story V",  
  link: '8NJLOPQQ8RU',
  actors: ['Christine Utterberg', 'Bernhard Schütz' ],
  description: {
      de: "Rollstuhl",
      en: "Wheelchair"
    },
  },
  {
  title: "Hannah",  
  link: 'sPVf-nxx8w4',
  actors: ['Annika Mauer'],
  description: {
      de: "Rollstuhl",
      en: "Wheelchair"
    },
  },

  {
  title: "Hoschka, Piano",  
  link: 'U4BBRqTpBUs',
  actors: ['Torsten Sense'],
  description: {
      de: "Piano",
      en: "Piano"
    },
  },
  {
  title: "Offiziant Fahrt",  
  link: 'HOebmQbLyp8',
  actors: ['Gerd Wamling'],
  description: {
      de: "Rollstuhl",
      en: "Wheelchair"
    },
  },
  {
  title: "Hotel 3",  
  link: 'f3ezxKQ280M',
  actors: ['Christine Utterberg', 'Bernhard Schütz'],
  description: {
      de: "Psychotest 1",
      en: "Psychotest 1"
    },
  },
    {
  title: "Hotel 1",  
  link: 'fv7JOY3ur2c',
  actors: ['Christine Utterberg, Bernhard Schütz'],
  description: {
      de: "Hotel 1",
      en: "Hotel 1"
    },
  },
  {
  title: "Hotel 4",  
  link: 'hfLGonV0fnM',
  actors: ['Christine Utterberg, Bernhard Schütz'],
  description: {
      de: "Hotel 1",
      en: "Hotel 1"
    },
  },
  {
  title: "Psychotest III",  
  link: 'I_eyQgslM64',
  actors: ['Dieter Bach'],
  description: {
      de: "Psychotest III",
      en: "Psychotest III"
    },
  },
  {
  title: "A fake plastical surgery clinic with a real plastical surgeon",  
  link: 'fzD5nE6PuJI',
  actors: ['Klaus Plogmeier'],
  description: {
      de: "Psychotest III",
      en: "Psychotest III"
    },
  },

  {
  title: "Missionsbeschreibung, Level 4",  
  link: '6UFApmD4ASI',
  actors: ['Annika Mauer'],
  description: {
      de: "Missionsbeschreibung IV",
      en: "Mission briefing IV"
    },
  },
  {
  title: "Virginia Video Blog",  
  link: '3BaQ7WQ7tQ0',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Missionsbeschreibung IV",
      en: "Mission briefing IV"
    },
  },
  {
  title: "Virginia - First months in Berlin 5",  
  link: 'VmP1d2cjDLs',
  actors: ['Christine Utterberg'],
  description: {
      de: "Missionsbeschreibung IV",
      en: "Mission briefing IV"
    },
  },
  {
  title: "Virginia - First months in Berlin 3",  
  link: 'rxhhlXAwVDI',
  actors: ['Christine Utterberg'],
  description: {
      de: "Missionsbeschreibung IV",
      en: "Mission briefing IV"
    },
  },
  {
  title: "Benjamin / Virginia",  
  link: 'BuYcMC-6l9E',
  actors: ['Christine Utterberg', 'Bernhard Schütz'],
  description: {
      de: "Missionsbeschreibung IV",
      en: "Mission briefing IV"
    },
  },
  {
  title: "Virginia Videoblog 6",  
  link: 'Svtk6u1-7EM',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Videoblog 6",
      en: "Videoblog 6"
    },
  },
  {
  title: "Virginia Videoblog 1",  
  link: '0KxmAvxbE54',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Videoblog 6",
      en: "Videoblog 6"
    },
  },

  {
  title: "Virginia Videoblog 2",  
  link: 'M7fvq9GxHO0',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Videoblog 2",
      en: "Videoblog 2"
    },
  },

  {
  title: "Virginia Videoblog 3",  
  link: 'M7fvq9GxHO0',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Videoblog 3",
      en: "Videoblog 3"
    },
  },
  {
  title: "Roter Salon",  
  link: '1J-IpHdOzyI',
  actors: ['Bernhard Schütz'],
  description: {
      de: "Videoblog 3",
      en: "Videoblog 3"
    },
  },
  {
  title: "Zwischen den Systemen I",  
  link: 'WXBK-6G2G6E',
  actors: ['Markus Meckel'],
  description: {
      de: "Zwischen den Systemen",
      en: "Between the Systems"
    },
  },
  {
  title: "Bravo I",  
  link: '3PWRoUxEoGQ',
  actors: ['Dieter Basch'],
  description: {
      de: "Bravo I",
      en: "Bravo I"
    },
  },
  {
  title: "Bravo II",  
  link: '_zABhRL1cuw',
  actors: ['Dieter Basch'],
  description: {
      de: "Bravo II",
      en: "Bravo II"
    },
  },
  {
  title: "Bravo III",  
  link: 'CXJhjt2aGdU',
  actors: ['Dieter Basch'],
  description: {
      de: "Bravo III",
      en: "Bravo III"
    },
  },




]



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


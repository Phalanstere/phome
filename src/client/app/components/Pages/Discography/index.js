import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { TweenMax } from "gsap";

// import essays from './essays.js';

let essays = [

    {
      title: "Der Zaubergeiger Settembrini",
      publisher: "Deutsche Grammophon",
      date: '1994',
      description: {
        de: "Ein Märchen",
        en: "A fairy tale"  
        },
      id: 1,
      image: './resources/Settembrini3.jpg'

    },
    {
      title: "Die Offenbarung des Daniel Paul Schreber",
      publisher: "Kulturverlag Kadmos",
      date: '1997',
      description: {
        de: "Ein Märchen",
        en: "A fairy tale"  
        },
      id: 2,
      image: './resources/Offenbarung.jpg'
    },
    {
      title: "Change Program Please",
      publisher: "Random House",
      date: '2008',
      description: {
        de: "Ein Märchen",
        en: "A fairy tale"  
        },
      id: 2,
      image: './resources/ChangeProgram.jpg'
    },

  ]





const bg = './resources/clouds04.jpg';


class Discography extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }


 }

  onClick(essay) {
    window.open(essay.link, '_blank');
  }

// <img src = { e.image } />

 getAudio(e, i) {
    let description = "Beschreibung";
    if (e.description) description = e.description[this.props.language];

    return (
      <div key = { i } className = "CD">
          <img src = { e.image } />

           <div className = "CD_description">

            <div title = { description } className = 'CD_title' >
            {e.title}
          </div>  

          <div className = "essay_journal">
              { e.publisher }, {e.date}
            </div>

        </div>
      </div>    
    )
 }

 
  getEssay(e, i) {
    let description = "Beschreibung";
    if (e.description) description = e.description[this.props.language];

    if (! e.pdf && ! e.link)
    {

    return (
        <div key = { i } >
          <div className = 'all_essays'>

            <div title = { description } className = 'journaille_title' >
              { e.title }
              <span className = 'essaysubtitle'>{e.subtitle}</span>  
            </div>


          </div>
          <div className = "essay_journal">
            In: { e.publisher }, {e.date}
          </div>
        </div>
    )}
     else
      {
      let type = "pdf";  
      if ( e.link)  type = "link";

      return (
        <div key = { i } >
          <div className = 'all_essays'>
              <div title = { description } className = 'journaille_title clickable' onClick={this.onClick.bind(this, e, type) } >
              { e.title }
              <span className = 'essaysubtitle'>{e.subtitle}</span>  
              </div>
 

              <div className = "essay_journal">
                In: { e.publisher }, {e.date}
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
          className = 'DiscographyPage' >
            <h2 style = {{ color: 'rgb(0,80,200' }} >
              { this.state.TEXT.__('Discography') }
            </h2>
            <div>
              { this.renderAudios() }
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

export default connect(mapStateToProps)(Discography);

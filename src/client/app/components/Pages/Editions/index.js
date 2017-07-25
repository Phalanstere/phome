import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import editions from './list.js';

import { TweenMax } from "gsap";


class Editions extends Component {

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


  componentDidMount() {
    let el = this.dom;
    TweenLite.to(el, 0, {opacity:0.01})
    TweenLite.to(el, 1, {opacity:1})
    store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 }); 
  }


  getEdition(e, i) {
    this.description = "Beschreibung";
    if (e.description) this.description = e.description[this.props.language];

    this.image          = null;
    this.author         = null;
    this.multi_authors  = null;
    this.title          = null;
    this.subtitle       = null;
    this.publisher      = null;
    this.where          = null;
    this.date           = null;
    this.link           = null;
    this.type_of_work   = null;


    if (e.image)           this.image = ( <span><img src = { e.image} /></span> );

    if (e.author)           this.author = ( <div className = "edition_author"> { e.author }.  </div> );

    if (e.multi_authors)  {

      this.multi_authors = ( <div className = "edition_author"> { e.multi_authors.toString() }.  </div> )
      }


    if (e.subtitle)         this.subtitle = ( <span className = "edition_subtitle"> { e.subtitle }.  </span> );
    if (e.publisher)        this.publisher  = ( <div className = "edition_publisher"> { e.publisher }, {e.date}</div> );  
    if (e.type_of_work)     this.type_of_work    = ( <div className = "edition_work"> [{ e.type_of_work } ]</div> );  


    this.title = ( <span title = { this.description } className = "edition_title"> { e.title }.</span> ); 

    return (
        <div key = { i} className = 'edition'>
            { this.image }
            <div className = "info">

            { this.author }
            { this.multi_authors }
            { this.title  }
            { this.subtitle  }
            { this.publisher  }
            { this.type_of_work }

            </div>
        </div>
    )

  }


  renderEditions() {
    let list = [];

    for (var i = 0; i < editions.length; i++) {
      let e = editions[i];
      
      list.push(
       this.getEdition(e, i)
      )
    }

  return list;
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
        <div id = "EditionPage" 
         ref={(dom) => { this.dom = dom; }}
         className = 'EditionPage' >
            <h2>
              { this.state.TEXT.__('Editions') }
            </h2>
            <div className = 'Editions_Section'>
            { this.renderEditions() }
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

export default connect(mapStateToProps)(Editions);

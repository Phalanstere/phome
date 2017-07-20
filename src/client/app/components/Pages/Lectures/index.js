import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TweenMax } from "gsap";

import lectures from './list.js';

// import essays from './essays.js';

const bg = './resources/clouds04.jpg';


class Lectures extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }


 }

  onClick(lecture) {
    if (lecture.pdf)
      {
      store.dispatch({ type: "LECTURE_SELECTED", payload: lecture });  
      window.location.hash = "#/lecture?id=" + lecture.id;

      // window.open(essay.link, '_blank');
      }
  }

  /*
            { this.context }
            { this.where }
            { this.date }
*/

  getLecture(e, i) {
    this.description = "Beschreibung";
    if (e.description) this.description = e.description[this.props.language];

    this.subtitle       = null;
    this.context        = null;
    this.where          = null;
    this.date           = null;
    this.link           = null;

    if (e.subtitle)         this.subtitle = ( <span className = "lecture_subtitle"> { e.subtitle }.  </span> );
    if (e.context)          this.context  = ( <span className = "lecture_context"> { e.context }.</span> );  
    if (e.where)            this.where    = ( <span className = "lecture_where"> { e.where }.</span> );  
    if (e.date)             this.date    =  ( <span className = "lecture_date"> { e.date }.</span> ); 

    this.title = ( <span title = { this.description } className = "lecture_title"> { e.title }.</span> ); 

    this.className          = 'lecture';
    this.interaction        = null;

    if (e.pdf) {
        this.className = 'lecture clickable';
        }

    return (
          <div key = { i} className = { this.className }  onClick = { this.onClick.bind(this, e) } >

            { this.title }
            { this.subtitle }
            { this.context }
            { this.where }
            { this.date }


        </div>
    )

  }

  renderLectures() {
   let list = [];

    for (var i = 0; i < lectures.length; i++) {
      let e = lectures[i];
      
      list.push(
       this.getLecture(e, i)
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


    return (
        <div 
          ref={(dom) => { this.dom = dom; }}
          className = 'LecturesPage' >
            <h2>
              { this.state.TEXT.__('Lectures') }
            </h2>
            <div className = 'Lectures_Section'>
            { this.renderLectures() }
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

export default connect(mapStateToProps)(Lectures);

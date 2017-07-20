import React, { Component } from 'react';
import ReactPDF from 'react-pdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import events from './list.js';
import { TweenMax } from "gsap";



class Performances extends Component {

 constructor(props) {
   super(props);

    this.state = {
        events: events,
        TEXT: global.TEXT,
        locale: this.props.language
    };



    this.updateDimensions = this.updateDimensions.bind(this);

   }


  componentDidMount() {
    let el = this.dom;
    TweenLite.to(el, 0, {opacity:0.01})
    TweenLite.to(el, 1, {opacity:1})


    var a = store.getState();
    if (a.active_animator) 
      {
      global.store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 });   
      }

    window.addEventListener("resize", this.updateDimensions);
  }


  updateDimensions() {

    let width = window.innerWidth;
    let height = window.innerHeight - 52;


    this.setState({
				width: width,
        height: height
			});
  }

  getEvent(e, i) {
    this.title          = null;
    this.subtitle       = null;
    this.location       = null;
    this.date           = null;
    this.link           = null;

    if (e.title)        this.title = ( <div className = "lecture_title"> { e.title }.  </div> );
    if (e.subtitle)     this.subtitle = ( <span className = "lecture_subtitle"> { e.subtitle }.  </span> );
    if (e.location)     this.location    = ( <span className = "lecture_where"> { e.location }.</span> );  
    if (e.date)         this.date    = ( <span className = "lecture_where"> { e.date }.</span> );  

      return (
          <div key = { i} className = 'lecture'>

            { this.title }
            { this.subtitle }
            { this.location }
            { this.date }
        </div>
        )
  }


  renderPerformances() {
   let list = [];

    for (var i = 0; i < events.length; i++) {
      let e = events[i];
      
      list.push(
       this.getEvent(e, i)
      )
    }


  return list;
  }




  render() {
    let style = {
      border: 0
    }

    


    return (
        <div 
          ref={(dom) => { this.dom = dom; }}
          className = 'EssayPage' >
            <h2>
              { this.state.TEXT.__('Performances') }
            </h2>
          <div className = 'RadioEssayContainer'>
            <div>
              { this.renderPerformances() }
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

export default connect(mapStateToProps)(Performances);

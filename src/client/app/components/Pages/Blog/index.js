import React, { Component } from 'react';
import ReactPDF from 'react-pdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TweenMax } from "gsap";


class Blog extends Component {

 constructor(props) {
   super(props);

    this.state = {
        width: 800,
        height: 450,
    };
    
    this.updateDimensions = this.updateDimensions.bind(this);

   }


  componentDidMount() {
    let width = window.innerWidth;
    let height = window.innerHeight - 52;


    this.setState({
				width: width,
        height: height
			});

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



  render() {
    let style = {
      border: 0
    }

    


    return (
      <div id = "Blog" className = "Blog">
        <div className = "BlogFrame">
        <iframe style = { style } src="http://ludicmedia.de:8000" width = { this.state.width } height = { this.state.height } ></iframe>
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

export default connect(mapStateToProps)(Blog);

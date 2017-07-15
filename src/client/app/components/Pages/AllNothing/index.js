import React, { Component } from 'react';
import ReactPDF from 'react-pdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';




class AllNothing extends Component {

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
				width: width * 0.9,
        height: height * 0.9
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
      <div className = "AllNothing">
        <div className = "AllNothingFrame">
        <iframe style = { style } src="http://ludicmedia.de/AllesNichts" width = { this.state.width } height = { this.state.height } ></iframe>
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

export default connect(mapStateToProps)(AllNothing);

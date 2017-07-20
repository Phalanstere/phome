import React, { Component } from 'react';
import ReactPDF from 'react-pdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const schedule = './resources/DigitaleMetaphysik.pdf';
const pdfSize = 605;

import {withRouter} from 'react-router';
import LectureList from  '../Lectures/list.js';





class Lecture extends Component {

 constructor(props) {
   super(props);

  this.actual_lecture = this.props.state.actual_lecture

  let pages = 50;
  if (this.actual_lecture) pages = this.actual_lecture.pages;

   this.state = {
       pageSize: 1,  // war 2.2
       zoom: 2,
       maxPages: pages,
       actualPage: 0,
   }

   this.checkSize.bind(this);

 }


 check_lecture(location) {
  if (! this.props.state.actual_lecture) {

    let id = parseInt( location.search.substr(4) );

    for (var i = 0; i < LectureList.length; i++) {
      let lecture = LectureList[i];
      console.log (lecture.id);
      if (lecture.id === id) this.actual_lecture = lecture;
    }


    // window.location.hash = "#/books";
    // return true;
    }
  return false;
 }



  backward() {
    if (this.state.actualPage > 0) {
        const newpage = this.state.actualPage -1;

        this.setState({
          actualPage: newpage
        });
    }
  }


  forward() {
    if (this.state.actualPage < this.state.maxPages) {
        const newpage = this.state.actualPage +1;

        this.setState({
          actualPage: newpage
        });
    }
  }

  checkSize() {
    this.height = window.innerHeight;
    this.width  = window.innerWidth;

    let newscale = (this.width / 1920) * this.state.zoom;
    const newPdfSize = Math.round( pdfSize * newscale);

    this.margin = (this.width - newPdfSize) / 2;
    console.log("Width " + this.width + " height " + this.height + " neue Fenstergröße " + newPdfSize + " Margin " + this.margin + " Scale " + newscale);

    this.setState({
          pageSize: newscale,
          margin: this.margin
    });

    this.forceUpdate();
  }



  componentDidMount() {
    this.checkSize();
    window.addEventListener("resize", this.checkSize.bind(this) );
  }


  getLeftArrow() {
    if (this.state.actualPage != 0) 
      {
      return (
            <div className = "leftArrow"><span onClick = { this.backward.bind(this)} className = 'newarrow'>{'<'}</span></div>
            )  
      }
    else {
       return ( <div/> )
    }
  }

  getRightArrow() {
    if (this.state.actualPage < this.state.maxPages-1) 
      {
      return (
            <div className = "rightArrow"><span onClick = { this.forward.bind(this)} className = 'newarrow'>{'>'}</span></div>
            )  
      }
    else {
       return ( <div/> )
    }
  }


  render() {

    const { router, params, location, routes } = this.props;
    console.log(location);

    this.check_lecture(location);



    let viewerStyle = {
      left: this.margin,
    }


    let leftArrow = this.getLeftArrow();
    let rightArrow = this.getRightArrow();
    // file= { this.actual_lecture.pdf }


    return (
      <div className = "pdfContainer">
        { leftArrow }
        { rightArrow }
        <div style = { viewerStyle} id = "PdfViewer" className = 'PdfViewer'>
          <ReactPDF
              file= { this.actual_lecture.pdf }
              pageIndex={this.state.actualPage}
              scale={ this.state.pageSize}
              onDocumentLoad={this.onDocumentLoad}
              onPageLoad={this.onPageLoad}
          />
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

export default withRouter(connect(mapStateToProps)(Lecture) );


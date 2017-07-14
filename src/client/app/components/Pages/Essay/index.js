import React, { Component } from 'react';
import ReactPDF from 'react-pdf';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const schedule = './resources/DigitaleMetaphysik.pdf';
const pdfSize = 605;



class Essay extends Component {

 constructor(props) {
   super(props);

  this.actual_essay = this.props.state.actual_essay

   this.state = {
       pageSize: 1,  // war 2.2
       zoom: 2,
       maxPages: this.actual_essay.pages,
       actualPage: 0,
   }

   this.checkSize.bind(this);

  
   console.log( this.actual_essay.pdf );   

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

    let viewerStyle = {
      left: this.margin,
    }


    let leftArrow = this.getLeftArrow();
    let rightArrow = this.getRightArrow();


    return (
      <div className = "pdfContainer">
        { leftArrow }
        { rightArrow }
        <div style = { viewerStyle} id = "PdfViewer" className = 'PdfViewer'>
          <ReactPDF
              file= { this.actual_essay.pdf }
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

export default connect(mapStateToProps)(Essay);

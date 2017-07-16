import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';

const logo = './resources/pdf.svg';



class Book extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }


 sampleChapter() {
    let chapter = this.props.state.actual_book.sample_chapter;

    store.dispatch({ type: "CHAPTER_SELECTED", payload: chapter });  
    window.location.hash = "#/sample_chapter?id=" + this.props.state.actual_book.id;
 }

 
  render() {

    const style = {
        position: 'absolute',      
        height: 'calc(100% - 52px)',
        top: '52px',
        width: '100%',
        background:'white',
        overflow: 'hidden',
        // backgroundImage: 'url(./resources/Pattern/pixel.png)',
    }

  const left = {
    position: 'relative',
    float: 'left',
    margintop: '52px',
    width: '30%',
    height: '90%',
    marginTop: '2%',
  }

  const right = {
    position: 'absolute',
    left: '40%',
    top: '10%',
    width: '47%',
    height: '90%',

  }


  let b = this.props.state.actual_book;
  let lang = this.props.state.actual_language;

  let desc  = "Noch keine Beschreibung";
  if (b.description) {
    desc = b.description[lang];
  }

  let contributors = {};


  this.pf = null;
  if (b.sample_chapter) 
    {
    this.pdf       = (<div title = { TEXT.__("sample_chapter")} onClick = { this.sampleChapter.bind(this) } className = "sample_chapter">
                    <img src = { logo } />
                     </div> 
                     );
    }

  let pdf_style = {
    position: 'absolute',
    left: 20,
    top: 20,
    width: '40px',
    height: '60px',
    background: 'red',
  }


  


    return (
        <div style = { style }>
          { this.pdf }
          <div style = { left} >
            <img className = 'SingleBook' src = { this.props.state.actual_book.image } />
            <div className = "bookinfoLarge">{ b.publisher + ". " + b.date  + ", " + b.pages + " " + TEXT.__("pages") } </div>
          </div>  
          <div style = { right } >
            <div className = "bookDescription">
              <h1 className = "booktitle">{ b.title}</h1>
              <h3 className = "booksubtitle">{ b.subtitle }</h3>
              <div className = "BookDetailed" >
                {renderHTML(desc)}
              </div>

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

export default connect(mapStateToProps)(Book);

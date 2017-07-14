import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class Book extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

 }

 
  render() {

    const style = {
        position: 'absolute',      
        height: 'calc(100% - 52px)',
        top: '52px',
        width: '100%',
        background:'ivory',
        overflow: 'hidden'
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



    return (
        <div style = { style }>
          <div style = { left} >
            <img className = 'SingleBook' src = { this.props.state.actual_book.image } />
            <div className = "bookinfoLarge">{ b.publisher + ". " + b.date  + ", " + b.pages + " " + TEXT.__("pages") } </div>
          </div>  
          <div style = { right } >
            <div className = "bookDescription">
              <h1 className = "booktitle">{ b.title}</h1>
              <h3 className = "booksubtitle">{ b.subtitle }</h3>
              <div>
                { desc }
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

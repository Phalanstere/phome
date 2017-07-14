import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class BookPreview extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

  console.log("Die Sprache der Seite " + this.props.language); 

 }


 



  componentDidMount() {
  }

  render() {


    return (
        <div className = 'bookPreviw' >
            Ein Buch
        </div>


    );
  }
}




function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(BookPreview);

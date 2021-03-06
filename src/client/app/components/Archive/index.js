import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import hypher from 'hypher';




const bg = './resources/clouds04.jpg';


class Books extends Component {

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

    const style = {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '13%',
        margin: 'auto',

        fontSize: 'calc(15px + 0.2vw)',
        lineHeight: 'calc(15px + 0.7vw)',
        backgroundPosition: 'center bottom',
        opacity: 1,
        width: '50%',
        height: 'auto',
        padding: '3vw',
        paddingBottom: '5vw',
        color: 'black',
        overflow: 'hidden',
        fontFamily: 'Open Sans',
        background: 'white'

    }


    const back = {
      width: '100%',
      height: '100%',
      // backgroundImage: 'url(' + bg + ')'

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
      <DynamicPage backgroundImage = { bg }>

        <div style = { back} >
          <div style = { style }>
            <h2 style = {{ color: '#337ab7' }} >
              { this.state.TEXT.__('Archive ...') }
            </h2>
            <div>
              { this.state.TEXT.__('SignExpalanation') }
            </div>

          </div>
        </div>  
      </DynamicPage>
    );
  }
}




function mapStateToProps(state) {
  return {
    language: state.actual_language
  };

}

export default connect(mapStateToProps)(Books);

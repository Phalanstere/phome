import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';







const bg = './resources/BurckhardtWide.jpg';


class Contact extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

  console.log("Die Sprache der Seite " + this.props.language); 

 }




  componentDidMount() {
    store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 }); 
  }

  render() {

    const style = {
        position: 'absolute',
        left: 0,
        right: 0,
        top: '13%',
        margin: 'auto',

        fontSize: 'calc(14px + 0.2vw)',
        lineHeight: 'calc(15px + 0.7vw)',
        backgroundPosition: 'center bottom',
        opacity: 1,
        width: '40%',
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
      backgroundImage: 'url(' + bg + ')',
      backgroundSize: 'auto 100%'
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

        <div style = { back} >
          <div className = "KontaktFeld">
            <h2 style = {{ color: '#337ab7' }} >
              { this.state.TEXT.__('Contact') }
            </h2>
            <div>
             { this.state.TEXT.__('email') }
             <span><a href="mailto:mb@martin-burckhardt.de?Subject=Web" target="_top">E-Mail</a></span> . 
            { this.state.TEXT.__('reaction') }
            </div>

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

export default connect(mapStateToProps)(Contact);

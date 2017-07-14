import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';





const bg = './resources/Burckhardt.jpg';




class Biography extends Component {

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
      backgroundImage: 'url(' + bg + ')'

    }

    const left = {
      marginTop: '1vw',
      marginLeft: '1vw',
      height: '92%',
      width: '36%',
      float: 'left',
      backgroundImage: 'url(' + bg + ')',

      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat'
    }  


    const right = {
      marginTop: '1vw',
      marginLeft: '1vw',
      height: '92%',
      width: '60%',
      float: 'left',
      color: 'rgb(40,40,40)',
      overflow: 'auto'
    }  




    return (
        <DynamicPage>
        <div style = { left } >
        </div>  

        <div className style = { right} >
          <div className = "Titling">
            Martin Burckhardt
          </div>
          <div id = "BioSection">
            <div className = "BioColumns">
              { TEXT.__("BurckhardtVita") }
            </div>
          </div>
        </div>  
        </DynamicPage>
    );
  }
}




function mapStateToProps(state) {
  return {
    language: state.actual_language,
    store: state
  };

}

export default connect(mapStateToProps)(Biography);

import React, { Component } from 'react';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';
import TEXT from '../../components/TEXT';
import {Link, browserHistory} from 'react-router-dom';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {selectLanguage} from '../../actions'



global.TEXT = TEXT; 


// bUtils.addStyle(Navbar, ['home'] );
import './style.css';

// const logo = './logo.png';
 const logo = './resources/favicon.png';


class NavBar extends Component {



  constructor(props) {    
    super(props);
    this.state = {
      locale: 'de'
    }

  this.handleSelect = this.handleSelect.bind(this);  
  }


  setSelected() {

  }  


  handleSelect (event, eventKey) {
    console.log("KEY " + event);
    window.lazarus = event;
    console.log("EVENT KEY " + eventKey);

    switch(event) {
      case 'SET_TO_GERMAN':
        TEXT.setLocale('de');
        console.log ( "LANGUAGE " + this.props.selectLanguage);

        this.props.selectLanguage ('de');

        this.setState({
            locale: 'de'
          });
      break;
      case 'SET_TO_ENGLISH':
        console.log( this.actions);

        this.props.selectLanguage ('en');

        TEXT.setLocale('en');
        this.setState({
            locale: 'en'
          });
      break;


      case 'HOME':
        console.log("Neuabspielen des Intros");
      break;


      case 'SCHEDULE':
        browserHistory.push('schedule');
      break;

      case 'OBJECTIVES':
        browserHistory.push('objectives');
      break;

      case 'NIT':
        browserHistory.push('NIT');
      break;

      case 'MOTIVATION':
        browserHistory.push('motivation');
      break;


      case 'SIGNUP':
        console.log("sollte auf die Signup Page verweisen");
      break;

      case 'CONTACT':
        browserHistory.push('contact');
      break;
    }

  }


  digital_survival() {
    window.open('http://ludicmedia.de/DigitalSurvival', '_blank');
  }


  changeLocation(hash) {
    if(history.pushState) {
            history.pushState(null, null, hash);
        }
        else {
            location.hash = has;
        }
  }



  onClick (key) {
    alert (key);
  }



  render() {
    let Style = {
        fontFamily: 'Calibri. monospace',
        position: 'fixed',
        zIndex: 1000,
        width: '100%'

    }; 


    let MenuStyle = {
        height: 'auto',
        width: 'auto',
        float: 'left',
        marginRight: 40,
        marginTop: -4,
        background: 'darkcyan',
        fontSize: 18,
        fontVariant: 'small-caps',
        padding: 4,
        cursor: 'pointer'

    };
/*
              <MenuItem onSelect={this.handleSelect} eventKey={3.1} href="#About">
                <Link to='/about'>{ TEXT.__('About') }</Link>              
              </MenuItem>
*/

    
    const navbarInstance = (
      <Navbar class="navbar-fixed-top" inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <img src = { logo } />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onSelect={this.handleSelect} eventKey={'HOME'}>
              <Link to='/intro'>{ TEXT.__('Home') }</Link>
            </NavItem>
            
            <NavItem onSelect={this.handleSelect} eventKey={'Biography'}>
              <Link to='/biography'>Vita</Link>
            </NavItem>

            <NavItem onSelect={this.handleSelect} eventKey={'Books'}>
              <Link to='/books'>{ TEXT.__('Books') }</Link>
            </NavItem>



            <NavDropdown eventKey={3} title= {  TEXT.__('Theory') }  id="basic-nav-dropdown">

              <MenuItem eventKey={'essays'} href="#essays">{  TEXT.__('Essays') }</MenuItem>
              <MenuItem eventKey={'radio_essays'} href="#radio_essays">{  TEXT.__('Radio Essays') }</MenuItem>
              <MenuItem eventKey={'journalism'} href="#journalism">{  TEXT.__('Journalism') }</MenuItem>
              <MenuItem eventKey={'lectures'} href="#lectures">{  TEXT.__('Lectures') }</MenuItem>
            </NavDropdown>            


           


            <NavDropdown eventKey={3} title= {  TEXT.__('Art') }  id="basic-nav-dropdown">

              <MenuItem eventKey={'AUDIOPIECES'} href="#audio_pieces">{  TEXT.__('AudioPieces') }</MenuItem>
              <MenuItem eventKey={'AUDIOART'} href="#audio_art">{  TEXT.__('Audio Art') }</MenuItem>
              <MenuItem eventKey={'DISCOGRAPHY'} href="#discography">{  TEXT.__('Discography') }</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={'Performaces'} href="#performances">{  TEXT.__('Performances') }</MenuItem>
            </NavDropdown> 


            

            <NavDropdown eventKey={3} title= {  TEXT.__('Projects') }  id="basic-nav-dropdown">
              <MenuItem eventKey={'Computerwelt'} href="#computerworld">{  TEXT.__('computerworld') }</MenuItem>
              <MenuItem eventKey={'TWINCOMPLEX'} href="#twinkomplex">{  TEXT.__('TwinKomplex') }</MenuItem>
                <MenuItem eventKey={'ALL_AND_NOTHING'} href="#all_and_nothing">{  TEXT.__('AllNothingSite') }</MenuItem>

                <MenuItem divider />
                <MenuItem onClick = { this.digital_survival } eventKey={'DIGITAL SURVIVAL'} >{  TEXT.__('Digital Survival Training') }</MenuItem>
            </NavDropdown> 


            <NavItem onSelect={this.handleSelect} eventKey={'HOME'}>
              <Link to='/blog'>{ TEXT.__('Blog') }</Link>
            </NavItem>


          </Nav>
          <Nav pullRight>

    
            <NavItem onSelect={this.handleSelect} eventKey={'CONTACT'} href="#/contact">
              <Link to='/contact'>{ TEXT.__('Contact') }</Link>
            </NavItem>
            



            <NavDropdown eventKey={8} title= { TEXT.__n('language') } id="basic-nav-dropdown">
              <MenuItem onSelect ={this.handleSelect} eventKey={'SET_TO_GERMAN'}>{ TEXT.__('German') }</MenuItem>
              <MenuItem onSelect={this.handleSelect} eventKey={'SET_TO_ENGLISH'}>{ TEXT.__('English') }</MenuItem>
            </NavDropdown>

          </Nav>


        </Navbar.Collapse>
      </Navbar>
    );
    

    return (
      <div style = { Style} >
        { navbarInstance }

      </div>
    );
  }
}






function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectLanguage: selectLanguage}, dispatch)
}

function mapStateToProps(state) {
  return {
    store: state
  };

}


export default connect(mapStateToProps, matchDispatchToProps)(NavBar);
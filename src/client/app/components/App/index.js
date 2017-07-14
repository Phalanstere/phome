import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import './style.css';

class App extends Component {

 constructor(props) {
   super(props);
   this.state = {
   }
 }


  componentDidMount() {
    console.log("fügt einen Hash Hinzu");
    window.location.hash = "#/intro"
  }


  render() {


    return (
      <div>
          <NavBar/>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MusicVisualizer from  '../../../components/MusicVisualizer';
import Animator from  '../../../components/Animator';



let bg = './resources/Tafel.jpg';


class SourceCode extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }


 this.code =  this.split();
}


createItems(list, obj, start) {
  
if (! start) start = 0;

let interval = 6500;  // this is obsolte

let last_event = start;


for (var i = 0; i < list.length; i++) {
  let text = list[i];
  let t = last_event; 
  let duration = 50 * text.length;

  last_event += (duration + 2500);

  let e = 	{
			type: "typewriter",
			time: t,
			text: text,
			div: "Statement",
			duration: duration,
            color: "silver",
            fontWeight: 600,
            textShadow: '2px 3px 5px black',
            fontSize: '1.8vw',
            lineHeight: '3.6vw',
			}; 

  obj.events.push(e);	
  }  
}






 componentDidMount() {
   var obj = {
     autostart: true,
   };

   obj.events = [];

   this.createItems(this.code, obj, 500);


  let e = 	{
            type: "greensock",
            time: 2000,
            div: "ShadowCode",
			rotation: 720,
            sacle: 3,
            transformOrigin: 'left top',
            duration: 640000,
			};
  
   obj.events.push(e);


   this.animator = new Animator(obj);    

 }


 componentWillUnmout() {
   this.animator.stop();
 }



  split() {
    let txt = TEXT.__("SourceCode");  
    txt = txt.split(/\n/);
    return txt;
  }


  random() {
      let x = parseInt( Math.random() * this.code.length );
      return this.code[x];
  }

 
  render() {

    



    return (
        <div className ="SourceCode">
            <img src = { bg } />
            <div id = "Statement" className = "Statement">
            </div>

            <div id = "ShadowCode">
                SourceCode
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

export default connect(mapStateToProps)(SourceCode);

import React, { Component } from 'react';

	let myblue = '#003399';


   var obj = {
     autostart: true,
   };

   obj.events = [];
        

  var e = 	{
			type: "typewriter",
			time: 1700,
			text: 'Martin Burckhardt',
			div: "_Title",
			color: myblue,
			duration: 300,
			fontSize: '1.1em'
			}; 

  obj.events.push(e);	


e = 	{
			type: "typewriter",
			time: 3000,
			text: 'Autor',
			div: "_Title",
			color: myblue,
			duration: 200,
			fontSize: '1.15em'
			}; 

  obj.events.push(e);	


 
  e = {
      type: "greensock",	
      div: "CodingPanel",
      time: 8300,
      duration: 6000,
      webkitFilter: "contrast(1.7)",
      transition: "6s",
      color: "red"
	} 

  obj.events.push(e);	

 e = {
      type: "greensock",	
      div: "credits",
      time: 15000,
      duration: 2000,
			opacity: 1
	} 

  obj.events.push(e);	




  e = {
      type: "stop_animator",	
      div: "CodingPanel",
      time: 30000,
      duration: 3000,
	} 

  obj.events.push(e);	




let TitlingOptions = {
  title: '_',
  animator: obj,
  callback: function() {
    alert("Hier ist ein Callback - der getriggert werden soll");
  },
};


export default TitlingOptions;
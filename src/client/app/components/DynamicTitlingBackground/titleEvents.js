import React, { Component } from 'react';

	let myblue = '#003399';



var news = ["News", "Philosophie der Maschine", "Herbst 2017", "Matthes & Seitz Berlin", "All and Nothing", "MIT press, Bston", "Fall 2017"]


function createNews(list) {
for (var i = 0; i < list.length; i++) {

  }  
}


   var obj = {
     autostart: true,
   };

   obj.events = [];
        

  var e = {
      type: "greensock",	
      div: "_Title",
      time: 100,
      duration: 300,
      left: '5%',
      top: '0%',
      fontSize: 'calc(30px + 1vw)',
      color: "red"
	} 


  obj.events.push(e);	


  e = {
      type: "greensock",	
      div: "CodingPanel",
      time: 1300,
      duration: 6000,
      webkitFilter: "contrast(1.7)",
      transition: "6s",
      color: "red"
	} 


  obj.events.push(e);	

  createNews(news);


/*
  e = 	{
			type: "typewriter",
			time: 1700,
			text: '_Neues Buch',
			div: "_Title",
			duration: 300,
      color: "red",
			}; 

  obj.events.push(e);	


e = 	{
			type: "typewriter",
			time: 3000,
			text: '_Die Philosophie der Maschine',
			div: "_Title",
			color: myblue,
			duration: 600,
			fontSize: '1.15em'
			}; 

  obj.events.push(e);	



e = 	{
			type: "typewriter",
			time: 7000,
			text: '_Herbst 2017',
			div: "_Title",
			color: myblue,
			duration: 200,
			fontSize: '1.15em'
			}; 

  obj.events.push(e);	


 
  e = {
      type: "greensock",	
      div: "CodingPanel",
      time: 1300,
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
*/



let TitlingOptions = {
  title: '_',
  animator: obj,
  callback: function() {
    alert("Hier ist ein Callback - der getriggert werden soll");
  },
};


export default TitlingOptions;
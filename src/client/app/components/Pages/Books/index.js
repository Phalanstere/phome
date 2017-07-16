import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import IdealGrid from './idealGrid.js';
// import book from './book.js';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {browserHistory} from 'react-router-dom';

import {selectBook} from '../../../actions/selectBook'
/*
import b from  './books.txt';
let b2 = JSON.stringify(b);
let b3 = JSON.parse(b2);
console.log(typeof( b3) );
*/
// import Metamorhosen_DE from '../../../components/TEXT/Metamorphosen_DE.html';
// console.log( Metamorphosen_DE );

import Metamorphosen_DE from "html-loader!../../../components/TEXT/Metamorphosen_DE.html";
import Metamorphosen_EN from "html-loader!../../../components/TEXT/Metamorphosen_EN.html";

import Geist_DE from "html-loader!../../../components/TEXT/Geist_DE.html";
import Geist_EN from "html-loader!../../../components/TEXT/Geist_EN.html";

import Brandlhuber_DE from "html-loader!../../../components/TEXT/Brandlhuber_DE.html";
import Brandlhuber_EN from "html-loader!../../../components/TEXT/Brandlhuber_EN.html";


import Scham_DE from "html-loader!../../../components/TEXT/Scham_DE.html";
import Scham_EN from "html-loader!../../../components/TEXT/Scham_EN.html";

import Historia_DE from "html-loader!../../../components/TEXT/Historia_DE.html";
import Historia_EN from "html-loader!../../../components/TEXT/Historia_EN.html";

import HistoriaB_DE from "html-loader!../../../components/TEXT/HistoriaB_DE.html";
import HistoriaB_EN from "html-loader!../../../components/TEXT/HistoriaB_EN.html";

import Kleine_Geschichte_DE from "html-loader!../../../components/TEXT/Kleine_Geschichte_DE.html";


import Todo_DE from "html-loader!../../../components/TEXT/Todo_DE.html";
import Todo_EN from "html-loader!../../../components/TEXT/Todo_EN.html";

import Korean_EN from "html-loader!../../../components/TEXT/Korean_DE.html";


var TEXT = global.TEXT;

var books = [
    {
    title: "Metamorphosen von Raum und Zeit",
    subtitle: "Eine Geschichte der Wahrnehmung",
    publisher: "Campus Verlag, Frankfurt/New York",  
    date: '1994',
    image: './resources/Metamorphosen.jpg',
    description: {
      de: Metamorphosen_DE,
      en: Metamorphosen_EN
    },

    sample_chapter: './resources/Metamorphosen_Beispiel.pdf',
    sample_pages: 29,

    pages: 394,
    size: 1,
    id: 1
  },
    {
    title: "Vom Geist der Maschine",
    subtitle: "Eine Geschichte kultureller Umbrüche",
    publisher: "Campus Verlag, Frankfurt/New York",  
    date: '1999',
    image: './resources/Geist.jpg',
    description: {
      de: Geist_DE,
      en: Geist_EN
    },

    sample_chapter: './resources/Geist_Beispiel.pdf',
    sample_pages: 29,

    pages: 409,
    size: 1,
    id: 2
  },
    {
    title: "Brandlhuber",
    subtitle: "Eine Fiktion",
    publisher: "Verlag der Buchhandlung Walter König, Köln",  
    date: '2005',
    image: './resources/Brandlhuber1.jpg',
    description: {
      de: Brandlhuber_DE,
      en: Brandlhuber_EN
    },

    pages: 150,
    size: 0.8,
    id: 3,
  },
   {
    title: "Die Scham der Philosophen",
    publisher: "Semele Verlag Berlin",  
    date: '2006',
    image: './resources/Scham.jpg',
    description: {
      de: Scham_DE,
      en: Scham_EN
    },

    pages: 228,
    size: 0.96,
    id: 4,
   },
   {
    title: "Eine kleine Geschichte der großen Gedanken",
    publisher: "DuMont, Köln",  
    date: '2008',
    image: './resources/KleineGeschichte.jpg',
    pages: 180,
    size: 0.9,
    id: 5,
    description: {
      de: Kleine_Geschichte_DE,
      en: Kleine_Geschichte_DE
    }
   },
    {
    title: "68. Die Geschichte einer Kulturrevolution",
    publisher: "Semele Verlag Berlin",  
    date: '2009',
    image: './resources/Kulturrevolution.jpg',
    pages: 220,
    size: 0.96,
    id: 6,
   },
  {
    title: "Pequeña historia de las grandes ideas",
    publisher: "Edition siruela",  
    date: '2011',
    image: './resources/Siruela.jpg',

    description: {
      de: Historia_DE,
      en: Historia_EN
    },

    pages: 220,
    size: 0.96,
    id: 7,
   },
  {
    title: "The Korean version of \"Kleine Geschichte der großen Gedanken\"",
    publisher: "Alma, Seoul",  
    date: '2010',
    image: './resources/KleineGeschichteKoreanisch.jpg',
    
    description: {
      de: Korean_EN,
      en: Korean_EN
    },

    pages: 220,
    size: 0.96,
    id: 8,
   },
    {
    title: "Pequena História das Grandes Ideias",
    subtitle: "Como a Filosofia Inventou Nosso Mundo",
    publisher: "Tinta negra, Rio de Janeiro",  
    date: '2013',
    image: './resources/KleineGeschichteBrasilianisch.jpg',

    description: {
      de: HistoriaB_DE,
      en: HistoriaB_EN
    },

    pages: 220,
    size: 0.96,
    id: 9,
   },
    {
    title: "Digitale Renaissance",
    subtitle: "Manifest für eine neue Welt",
    publisher: "Metrolit, Berlin",  
    date: '2014',
    image: './resources/Renaissance.jpg',
    pages: 220,
    size: 0.96,
    id: 10,
    description: {
      de: 'Wir befinden uns inmitten einer Zeitenwende: So wie in der Renaissance alte Werte, Glaubenssätze und gesellschaftliche Zusammenhänge zerstört und erneuert wurden, so verändert die digitale Revolution unsere Gesellschaft. Nur die Regeln unseres Zusammenlebens sind noch die alten – und sie funktionieren nicht mehr. Was ist Bildung, wenn das Weltwissen überall im Netz zugänglich ist? Wie werden wir arbeiten? Wie funktioniert die Wirtschaft, wenn Produkte bald von jedem beliebig zu vervielfältigen sind? Was ist angesichts dieses Überflusses ein Wert? Was wird mein Wert sein? Sicher ist nur: Nichts wird bleiben, wie es ist. Martin Burckhardt erklärt den gesellschaftlichen Umbruch und legt konkrete Vorschläge für Politik, Wirtschaft, Bildung, den Finanzmarkt und die Arbeitswelt vor.',
      en: 'No decription yet'
    }
   },
    {
    title: "Wie die Philosophie unsere Welt erfand",
    contributors: {
      de: "Mit Illustrationen von Jörg Hülsmann",
      en: "With illustations by Jörg Hülsmann"
    },
    publisher: "Du Mont, Köln",  
    date: '2014',
    image: './resources/Philosophie.jpg',
    pages: 204,
    size: 0.96,
    id: 10,
    description: {
      de: `Wenn wir an einem Schulhaus vorbeigehen, auf die Uhr schauen oder einem Polizisten begegnen, finden wir das völlig selbstverständlich. Doch wie sind diese Dinge eigentlich in die Welt gekommen? Sie waren einmal philosophische Ideen. 

Martin Burckhardt erzählt uns ihre Geschichten und beweist, dass die Philosophie nicht nur graue Theorie ist. So erfährt man beispielsweise, dass die Vorläufer des Münzgelds Fleischspieße waren, das Kreuz ursprünglich ein Spottsymbol war und was die Demokratie mit dem Alphabet zu tun hat. Verständlich und amüsant zeigt der Autor, wie die Philosophie unseren Alltag bestimmt.`,
      en: 'The history of Philosophy, told as a fairy tale.'
    }
   },


    {
    title: "Score",
    publisher: "Knaus, München",  
    date: '2015',
    image: './resources/Score.jpg',
    pages: 220,
    size: 1,
    id: 11,
   },
    {
    title: "Alles und Nichts",
    subtitle: "Ein Pandömium digitaler Weltvernichtung",
    publisher: "Matthes & Seitz, Berlin",  
    date: '2015',
    image: './resources/Alles.jpg',
    pages: 220,
    size: 0.7,
   },
    {
    title: "Todo y nada",
    subtitle: "Un pandemonio del destrucction del mundo",
    publisher: "Herder Edition, Barcelona",  
    date: '2017',
    image: './resources/Todo.jpg',
    pages: 220,
    size: 0.8,
    description: {
      de: Todo_DE,
      en: Todo_EN
    }
   },
    {
    title: "All and Nothing.",
    subtitle: "A digital Apocalypse",
    publisher: "MIT Press, Boston",  
    date: '2017',
    image: './resources/AllNothing.jpg',
    pages: 220,
    size: 0.8,
    description: {
      en: `In 1854, the British mathematician George Boole presented the idea of a universe the elements of which could be understood in terms of the logic of absence and presence: 0 and 1, all and nothing—the foundation of binary code. The Boolean digits 0 and 1 do not designate a quantity. In the Boolean world, x times x always equals x; all and nothing meet in the formula x = xn. As everything becomes digitized, God the clockmaker is replaced by God the programmer. This book–described by its authors as “a theology for the digital world”—explores meaning in a digital age of infinite replication, in a world that has dissolved into information and achieved immortality by turning into a pure sign. 
All and Nothing compares information that spreads without restraint to a hydra—the mythological monster that grew two heads for every one that was cut off. Information is thousand-headed and thousand-eyed because Hydra’s tracks cannot be deleted. It shows that when we sit in front of a screen, we are actually on the other side, looking at the world as an uncanny reminder of the nondigitized. It compares our personal data to our shadows and our souls, envisioning the subconscious laid out on a digital bier like a corpse.

The digital world, the authors explain, summons forth fantasies of a chiliastic or apocalyptic nature. The goal of removing the representative from mathematics has now been achieved on a greater scale than Boole could have imagined.`,
      de: "Die amerikanische Fassung von Alles und Nichts, übersetzt von Erik Butler."
    }

   },
    {
    title: "Philosophie der Maschine",
    publisher: "Matthes & Seitz, Berlin",  
    date: '2017',
    image: './resources/PhilosophieMaschine.jpg',
    pages: 350,
    size: 0.8,
    description: {
      en: "The philosophy of the machine",
      de: "Die Maschine ist die große Unbekannte des Denkens. Wenn dies sonderbar anmutet, weil man ihr als Metapher überall begegnet, so sollte man einen Blick auf unser Gottesbild werfen: Nacheinander wurde er von der Kultur zum Theaterereignis, zum Uhrmacher und schließlich zum Programmierer umgeschult. Worin liegt der philosophische Nerv der Maschine, dieser großen Unbekannten des Denkens? Ausgehend von der Rätselfrage des ›deus ex machina‹ wird der Leser in kurzen, prägnanten Abschnitten mit dem ›Denken ohne Denker‹ konfrontiert. Über die historischen Exkursionen hinaus führt Martin Burckhardt in dieser philosophischen Grundlegung den Leser in die Gegenwart auf den so langsamen wie unweigerlichen Rückzug der Philosophie und der gleichzeitigen Explosion maschineller Intelligenzen hin. Die Maschine ist kein technisches Gadget mehr, sondern längst zur geistigen Größe geworden. Sie ist das Unbewusste der Philosophie, der Gesellschaft überhaupt. Würde der Geist der Maschine freigesetzt, wäre endlich eine nun von allem metaphysischen Ballast befreite, radikal geistesgegenwärtige Philosophie denkbar."
    }
   },

  ]



books.reverse();



class Books extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }

  // console.log("Die Sprache der Seite " + this.props.store.active_language); 
  this.calculate_grid();
 }

 

 calculate_grid () {
   var w = window.innerWidth;
   var h = window.innerHeight;

   var l = books.length;

   var info = {
     number: l,
     width: w -50,
     height: h-100,
     ratio: w/h.toFixed(2),
     tgRatio: 0.8
   }

   this.grid = new IdealGrid( info );
   console.log(this.grid);



 }

 onClick(book) {
    store.dispatch({ type: "BOOK_SELECTED", payload: book });  
    window.location.hash = "#/book?id=" + book.id;
 }



  renderBooks() {
    let list = [];

    let box = {
      width: this.grid.width-2 + 'px',
      height: this.grid.height-2 + 'px',
      float: 'left',
      // border: 'solid 1px darkgrey',
    }


    for (var i = 0; i < books.length; i++) {
      let b = books[i];
      list.push(
        
        <div key = { i } style = {box} >
          <div className = 'bookcontainer'>
            <img key = { b.title } onClick={this.onClick.bind(this, b)} className = "book" src = { b.image } />
          </div>
          <div className = "bookinfo">{ b.publisher + ". " + b.date } </div>
        </div>
        

      )
    }


  return list;
  }




 componentDidMount() {
    this.forceUpdate();
    store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 }); 
    window.addEventListener("resize", this.calculate_grid);
  }

  render() {

    const style = {
        position: 'absolute',
        left: '1vw',
        top: '1vw',
        margin: 'auto',
        opacity: 1, 
        width: 'calc(100%-10px)',
        height: 'calc(100% - 40px)',
        color: 'black',
        overflow: 'hidden',
        fontFamily: 'Open Sans',
        overflow: 'auto',

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
      <DynamicPage className = 'Bookshelf'>
        <div id = "bookshelf" style = { style} >
         { this.renderBooks() }
        </div>
      </DynamicPage>

    );
  }
}



function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}


function mapStateToProps(state) {
  return {
    store: state
  };

}

export default connect(mapStateToProps)(Books);

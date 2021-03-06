import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { TweenMax } from "gsap";

import essays from './essays.js';
/*
let essays = [
    {
      title: "Digitale Metaphysik",
      publisher: "Merkur",
      number: "4",  
      date: '1988',
      description: {
        de: "Das Befremden über die Metaphysik in der Maschine",
        en: "an estrangement about the metaphysical side of digital tinking"  
        },
      pdf: './resources/DigitaleMetaphysik.pdf',
      id: 1,
      pages: 12
    },
    {
      title: "Im Arbeitsspeicher",
      subtitle: "Zur Rationalisierung geistiger Arbeit",
      publisher: "Leviathan",
      number: "4",  
      date: '1990',
      description: {
        de: "Das Befremden über die Metaphysik in der Maschine",
        en: "an estrangement about the metaphysical side of digital tinking"  
        },
      pdf: './resources/Arbeitsspeicher.PDF',
      id: 2,
      pages: 18
    },
    {
      title: "Die universale Maschine",
      publisher: "Merkur",
      number: 12,
      date: '1990',
      id: 3,
        description: {
          de: "Über Computer und Räderwerk, als universale Maschine begriffen",
          en: "Computer and wheelwork, understood as a universal machine"  
        },
    },
    {
      title: "Im Innern der Uhr",
      publisher: "Leviathan",
      number: 2,
      date: '1990',
      id: 4,
        description: {
          de: "Über die Geschichte der mechanischen Uhr ",
          en: "On the History of the Mechanical Clock"  
        },
    },
    {
      title: "Im Schatten der Kathedrale",
      publisher: "Leviathan",
      number: 4,
      date: '1991',
      id: 5,
        description: {
          de: "Über die Geschichte der gotischen Kathedrale",
          en: "On the History of the Gothic Cathedral"  
        },
    },
    {
      title: "Das Bild und der Spiegel",
      publisher: "Émile",
      number: 2,
      date: '1991',
      id: 5,
        description: {
          de: "Über das Arnolfini-Hochzeitsbild des Jan van Eyck",
          en: "On the Arnolfini Painting of Jan van Eyck"  
        },
    },
    {
      title: "Zur Entwicklung der Photographie",
      publisher: "Leviathan",
      number: 6,
      date: '1992',
      id: 6,
        description: {
          de: "Zur Geschichte der Photographie ",
          en: "On the History of the early Photography"  
        },
    },
    {
    title: "Bildauflösung",
      publisher: "Spuren",
      number: 32,
      date: '1993',
      id: 7,
        description: {
          de: "Zum Ende des Bildes und der Geburt der Bildverarbeitungsmaschine",
          en: "Image Processing & The End of the Image"  
        },
    },
    { 
     title: "Der Geist in der Maschine",
      publisher: "Spuren",
      number: 33,
      date: '1994',
      id: 8,
        description: {
          de: "Über Maschinengespinste",
          en: "On the Spectre of the Machine"  
        },
    },
    {
    title: "Im blinden Fleck der Öffentlichkeit",
      publisher: "Rundfunk und Fernsehen",
      number: 2,
      date: '1994',
      id: 8,
        description: {
          de: "Zur Rundfunkproduktion ",
          en: "On Radio Production"  
        },
    },
    {
    title: "Die künstlche Mutter",
      publisher: "Lettre International",
      number: "November ",
      date: '1994',
      id: 9,
        description: {
          de: "Zum Dogma der Unbefleckten Empfängnis ",
          en: "On the Dogma of the Immaculate Conception"  
        },
    },
    {
    title: "Der Schatten der Dinge",
      publisher: "Sichern unter... Unbeständige Bestände. Katalog des Werkbund-Archivs",
      number: "",
      date: '1995',
      id: 10,
        description: {
          de: "Zum Dogma der Unbefleckten Empfängnis ",
          en: "On the Dogma of the Immaculate Conception"  
        },
    },
   {
    title: "Der Brief der Moderne",
      publisher: "Arch+",
      number: 127,
      date: '1995',
      id: 8,
        description: {
          de: "Zur Architektur von Richard Rogers ",
          en: "On the Architect Richard Rogers"  
        },
    },
   {
    title: "Der Traum der Maschine",
      publisher: "Interventionen 5. Stroemfeld/Roter Stern",
      number: "",
      date: '1996',
      id: 9,
        description: {
          de: "Zur Architektur von Richard Rogers ",
          en: "On the Architect Richard Rogers"  
        },
    },
    {
    title: "Der König tot",
    subtitle: "Fiskus, Guillotine, Filmschnitt",
      publisher: "Lettre international",
      number: "Winter" ,
      date: '1996',
      id: 8,
        description: {
          de: "Zur Architektur von Richard Rogers ",
          en: "On the Architect Richard Rogers"  
        },
    },
   {
      title: "Die Guillotine",
      subtitle: "Eine Autopsie der Moderne",
      publisher: "Kaleidoskopien",
      number: 1,
      date: '1996',
      id: 9,
        description: {
          de: "Über die Unbefleckte Reproduktion ",
          en: "Immaculate Reproduction "  
        },
    },

    {
    title: "Im Tempel der Psyche",
      publisher: "Arch+",
      number: '134-135',
      date: '1996',
      id: 10,
        description: {
          de: "Zur Architektur von Richard Rogers ",
          en: "On the Architect Richard Rogers"  
        },
    },
    {
    title: "Fallgesetze, Zufallgesetze",
      publisher: "Arch+",
      number: 127,
      date: '1997',
      id: 8,
        description: {
          de: "Über Zufall und Gravitation",
          en: "On Gravitation and Randomness"  
        },
    },
    {
    title: "Huhn, indisch",
      publisher: "Arch+",
      number: 137,
      date: '1997',
      id: 11,
        description: {
          de: "Über Arbeit ",
          en: "On Work"  
        },
    },
    {
      title: "Muttergottes Weltmaschine",
      subtitle: "Über den Zusammenhang von unbefleckter Empfängnis und technischer Reproduktion",
      publisher: "Metis",
      number: 12,
      date: '1997',
      id: 9,
        description: {
          de: "Über die Unbefleckte Reproduktion ",
          en: "Immaculate Reproduction "  
        },
    },
    {
      title: "Unter Strom",
      subtitle: "Der Autor und die elektromagnetische Schrift",
      publisher: "Sybille Krämer: Computer-Medien-Realität. Suhrkamp Wissenschaft",
      number: 'Frankfurt/M.',
      date: '1998',
      id: 13,
        description: {
          de: "Über die Unbefleckte Reproduktion ",
          en: "Immaculate Reproduction "  
        },
    },
    {
      title: "Die goldene Schrift auf dem gläsernen Sarg",
      publisher: "Christina Lammer: Schneewittchen. Vom Mythos eiskalter Schönheit.",
      number: "Konkursbuch Verlag, Tübingen",
      date: '1999',
      id: 13,
        description: {
          de: "Schneewittchen und die reinen Zeichen ",
          en: "On Snow White and the Metaphysics of Pure Signs. "  
        },
    },
    {
      title: "Der verschleierte Blick",
      subtitle: "Über die Perspektive und den Code der Repräsentation",
      publisher: "Der Humanismus der Architektur in Florenz. Hg. von Wolfgang von Löhneysen",
      number: "Hildesheim",
      date: '1999',
      id: 13,
        description: {
          de: "Zentralperspektive als Herrschaftssprache ",
          en: "On Central Perspevive and Power"  
        },
    },
    {
      title: "Scheinproduktion",
      publisher: "Das Fünfte Element. Kunst oder Geld",
      number: "Du Mont, Köln",
      date: '2000',
      id: 14,
        description: {
          de: "Über die Geldillusion",
          en: "On Money Illusion."  
        },
    },
    {
      title: "Das Monster und die telematische Guillotine",
      publisher: "Zäsuren",
      number: "1",
      date: '2000',
      id: 14,
        description: {
          de: "Über die Geldillusion",
          en: "On Money Illusion."  
        },
    },
      {
      title: "Die Wunschmaschine sind tot, es leben die Wunschmaschinen!",
      subtitle: "Zum Anti-Ödipus",
      publisher: "texte, psychoanalyse. ästhetik. kulturkritik",
      number: 2,
      date: '2000',
      id: 15,
        description: {
          de: "Deleuze, Guattari und ihr Wunschmaschinenkonzept ",
          en: "On Deleuze and Guattari "  
        },
    },
      {
      title: "Logik des Mischlings",
      publisher: "Olaf Nicolai, Kunstverein Münster",
      number: "Katalog",
      date: '2001',
      id: 16,
        description: {
          de: "Deleuze, Guattari und ihr Wunschmaschinenkonzept ",
          en: "On Deleuze and Guattari "  
        },
    },
    {
    title: "Phallsucht",
    subtitle: "Über die abgründige Leichtigkeit der Philosophie",
      publisher: "Figurationen",
      number: 1,
      date: '2003',
      id: 17,
        description: {
          de: "Gravitation und Philosophie",
          en: "On Gravitation and Philosophy"  
        },
    },
    {
    title: "Pop und Softrware",
      publisher: "Interface 5. Die Politik der Maschine",
      number: "Kulturbehörde Hamburg",
      date: '2002',
      id: 18,
        description: {
          de: "Gravitation und Philosophie",
          en: "On Gravitation and Philosophy"  
        },
    },
    {
    title: "Wie war der Himmel so blau!",
      publisher: "Lettre International",
      number: "Dezember",
      date: '2001',
      id: 19,
        description: {
          de: "Über den 9. September ",
          en: "On 9/11"  
        },
    },
    {
    title: "Deus ex machina",
      publisher: "Michael Jäger/Andrea Roedig/Gerburg Treusch-Dieter: Gott und die Katastrophen. Edition Freitag",
      date: '2003',
      id: 20,
        description: {
          de: "Über Gott und die Maschine ",
          en: "On God and the Machine"  
        },
    },
    {
    title: "Im Off. Zur Politik der Simulation",
      publisher: "In: Act. Handlungsformen in Kunst und Politik. Hg. Von G.J.Lischka und Peter Weibel. Bentelli-Verlag. Bern",
      date: '2004',
      id: 21,
        description: {
          de: "Über die Ästhetik des Terrors ",
          en: "On the Aesthetics of Terrorism"  
        },
    },
    {
    title: "Schein der Macht",
      publisher: "Sepktakuläre Experimente. De Gruyter",
      number: "Berlin",
      date: '2005',
      id: 22,
        description: {
          de: "Über die Ästhetik des Terrors ",
          en: "On the Aesthetics of Terrorism"  
        },
    },
    {
    title: "Ästhetik der Ganzkörperzeichen",
    subtitle: "Zur Bedeutung der Computerspiele",
      publisher: "Frankfurter Allgemeine Zeitung",
      number: "Frankfurt",
      date: '4.6.2009',
      id: 23,
        description: {
          de: "Über die Ästhetik des Terrors ",
          en: "On the Aesthetics of Terrorism"  
        },
    },

    {
    title: "Die Kunst der Versenkung",
    subtitle: "Computerspiel als Kunstform",
      publisher: "pro helvetia",
      number: "Passagen 54",
      date: '2010',
      id: 24,
        description: {
          de: "Über die Ästhetik des Terrors ",
          en: "On the Aesthetics of Terrorism"  
        },
    link: 'https://prohelvetia.ch/app/uploads/2017/03/passagen_d54.pdf'
    },
    {
    title: "Der Meister aller Selfies",
      subtitle: "Zu Jeremy Benthams Auto-Ikone",
      publisher: "Merkur",
      number: "August",
      date: '2015',
      id: 25,
        description: {
          de: "Über die Ästhetik des Terrors ",
          en: "On the Aesthetics of Terrorism"  
        },
    },
    {
    title: "Selfie mit Kanzlerin",
    publisher: "Merkur",
    number: "März",
    date: '2016',
      description: {
        de: "Zur Flüchtingskrise und der Logik des viralen Marketings ",
        en: "On the Refugee Crisis and the Logic of Viral Marketing"  
      },
    id: 29,
    },
    {
    title: "Im Netz der kleinen Brüder",
    subtitle: "Über die Modernität der Populismen",
    publisher: "Merkur",
    number: "Juni",
    date: '2016',
      description: {
        de: "Tim Hunt, Rotherham ",
        en: "Tim Hunt, Rotherham"  
      },
    id: 30,
    },
    {
    title: "Zur Logik des Dividuums",
    publisher: "Tumult",
    number: "Herbst",
    date: '2016',
      description: {
        de: "Über das Zersplitterung des zeitgenössischen Subjekts",
        en: "About the Agony of the contemporary Subject"  
      },
    id: 31,
    },
    {
    title: "Die Schrecken der Hydra",
      publisher: "Lettre International",
      number: "Frühjahr",
      date: '2016',
      id: 32,
        description: {
          de: "Zur Rundfunkproduktion ",
          en: "On Radio Production"  
        },
      link: 'https://www.lettre.de/beitrag/burckhardt-martin_die-schrecken-der-hydra'  
    },

    {
    title: "Geisterdämmerung",
    subtitle: "Zum Verschwinden des Intellektuellen",
      publisher: "Lettre International",
      number: "Winter",
      date: '2016',
      id: 33,
        description: {
          de: "Zur Rundfunkproduktion ",
          en: "On Radio Production"  
        },
    },


    {
    title: "Ich. Allüberall. Depotenziert",
    publisher: "Tumult",
    number: "Frühjahr",
    date: '2017',
      description: {
        de: "Über das Dilemma des zeitgenössischen Subjekts",
        en: "About the Agony of the contemporary Subject"  
      },
    id: 34,
    },

    {
    title: "Eine kleine Geschichte der Digitalisierung",
    publisher: "Merkur",
    number: 5,
    date: '2017',
      description: {
        de: "Über Computer und Räderwerk, als universale Maschine begriffen",
        en: "Computer and wheelwork, understood as a universal machine"  
      },
    id: 35,
    pages: 15,
    pdf: './resources/Digitalisierung.pdf',

    },
   

  // http://www.martin-burckhardt.de/Arbeitsspeicher.PDF 
  ]

*/





const bg = './resources/clouds04.jpg';


class Essays extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }


 }

  onClick(essay) {
    if (essay.link) {

      window.open( essay.link, '_blank');
    }
    else
    {
    store.dispatch({ type: "ESSAY_SELECTED", payload: essay });  
    window.location.hash = "#/essay?id=" + essay.id;
    }
  }


  getEssay(e, i) {

    let description = "Beschreibung";
    if (e.description) description = e.description['de'];

    if (! e.pdf && ! e.link)
    {

    return (
        <div key = {i} className = "single_essay">
          <div className = 'all_essays'>

            <div title = { description } className = 'essaytitle' >
              { e.title }
              <span className = 'essaysubtitle'>{e.subtitle}</span>  
            </div>


          </div>
          <div className = "essay_journal">
            In: { e.publisher }, { e.number }, {e.date}
          </div>
        </div>
    )}
     else
      {
      let type = "pdf";  
      if ( e.link)  type = "link";

      return (
        <div key={i} >
          <div className = 'all_essays'>
              <div title = { description } className = 'essaytitle clickable' onClick={this.onClick.bind(this, e, type) } >
              { e.title }
              <span className = 'essaysubtitle'>{e.subtitle}</span>  
              </div>
 

              <div className = "essay_journal">
                In: { e.publisher }, { e.number }, {e.date}
              </div>
            </div>
        </div>
        )   
      }
  }

  renderEssays() {
   let list = [];


    for (var i = 0; i < essays.length; i++) {
      let e = essays[i];
      
      list.push(
       this.getEssay(e, i)
      )
    }


  return list;
  }


  componentDidMount() {
    let el = this.dom;
    TweenLite.to(el, 0, {opacity:0.01})
    TweenLite.to(el, 1, {opacity:1})
    store.dispatch({ type: "CHECK_ANIMATOR", payload: 1 }); 
  }

  render() {


    const back = {
      width: '100%',
      height: '100%',
      // backgroundImage: 'url(' + bg + ')'
      background: 'red'

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
        <div 
        ref={(dom) => { this.dom = dom; }}
        className = 'EssayPage' >
            <h2>
              { this.state.TEXT.__('Essays') }
            </h2>
          <div className = 'EssayContainer'>
            <div>
              { this.renderEssays() }
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

export default connect(mapStateToProps)(Essays);

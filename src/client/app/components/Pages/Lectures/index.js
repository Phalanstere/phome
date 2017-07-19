import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import essays from './essays.js';

let lectures = [

    {
      title: "Marienfigur und technische Reproduktion",
      where: "Berliner Dom",
      context: "Im Rahmen der Veranstaltungsreihe »Kultur und Christentum in der Geschichte«, Lehrstuhl für Christliche Archäologie und Kirchliche Kunst der Hum­boldt-Universität",
      date: '13.10.1994',
      description: {
        de: "Zum Geist in der Maschine",
        en: "About the Ghost in the Machine"  
        },
      id: 1
    },
    {
      title: "Muttergottes Weltmaschine",
      subtitle: "Über den Zwiespalt der Gotik",
      where: "Nicolaikirche, Frankfurt",
      context: "Im Rahmen des Gotik-Seminars",
      date: '21.- 22.10.1994',
      description: {
        de: "Zum Geist in der Maschine",
        en: "About the Ghost in the Machine"  
        },
      id: 2
    },
    {
    title: "Porträt des Autors, elektrisiert",
      subtitle: "Von der mechanischen zur elektromagnetischen Schrift",
      where: "Literaturhaus Berlin",
      context: "Im Rahmen der Berliner Hörspieltage",
      date: '24.11.1995',
      description: {
        de: "Zum Geist in der Maschine",
        en: "About the Ghost in the Machine"  
        },
      id: 3
    },
    {
    title: "Klang - Zeichen - Sprache",
      subtitle: "Zur Semiotik des Geräusch",
      where: "Filmakademie Nordrhein-Westfalen",
      context: "Im Rahmen der Arbeitstagung »Spots and Sounds",
      date: '9.12.1994',
      description: {
        de: "Zum Geist in der Maschine",
        en: "About the Ghost in the Machine"  
        },
      id: 4
    },
    {
    title: "Noise",
      subtitle: "Zur Semiotik des Geräusch",
      where: "Akademie der Künste, Berlin",
      date: 'Mai 1995',
      description: {
        de: "Zum Geist in der Maschine",
        en: "About the Ghost in the Machine"  
        },
      id: 5
    },
    {
    title: "Die goldene Schrift auf dem gläsernen Sarg",
     context: "Ein Vortrag für die Guardini-Stiftung, im Rahmen des Technik-Sym­­po­sions",
      where: "Kloster Zangberg",
      date: '12.5. 1995',
      description: {
        de: "Zum Geist in der Maschine",
        en: "About the Ghost in the Machine"  
        },
      id: 6
    },
    {
    title: "Der Traum der Maschine",
     context: "Ein Vortrag im Rahmen des Sym­posions »100 Jahre Hysterie«",
      where: "Hochschule für Kunst und Gestaltung, Zürich",
      date: '26.10. 1995',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 7
    },
    {
    title: "Die Guillotine",
     subtitle: "Über den Zusammenhang von Todes­tech­no­lo­gie und Rationalisierung",    
     context: "Ein Vortrag für die Guardi­ni-Stif­tung, im Rahmen des Zeit-Symposions",
      where: "Berlin, Jagdschloss Glienecke.",
      date: '21. - 23.4. 1996',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 7
    },

    {
    title: "Kalte Augen. Schnelle Schnitte",
     subtitle: "Von der Guillotine zum Filmschnitt",    
      where: "Humboldt-Universität, Kulturwissen­schaft­liches Institut",
      date: '28.6.1996',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 8
    },
    {
    title: "Der verschleierte Blick",
     subtitle: "Über die Perspektive und den Code der Repräsentation",   
     context: "Im Rahmen des Brunelleschi-Symposions der Berliner Renaissance-Gesellschaft und des Italienischen Kultur-Instituts",
      where: "Italienische Botschaft, Berlin-Tiergarten",
      date: '11.-12.10.1996',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 9
    },
    {
     title: "Der Autor und die elektromagnetische Schrift",
     context: "Im Rahmen der Ringvorlesung Medien und Computer",
      where: "FU Berlin",
      date: '21.11.1996',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 10
    },
    {
     title: "Die wucherernden Zeichen",
     context: "Ein dreitägiges Seminar zur Philsophie des Geldes",
      where: "Dominikaner-Kloster, Frankfurt/M.",
      date: '21.11.1996',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 11
    },
    {
     title: "Hybride",
     subtitle: "Zur digitalen Klangbearbeitung",
     context: " Im Rahmen des Symposions: Leibhaft vernetzt",
      where: "Ev. Akademie. Rothenburg ob der Tauber",
      date: 'Januar 1998',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 12
    },
    {
     title: "Der Körper des Zeichens",
     subtitle: "Zur Genealogie des Alphabets",
      where: "Kunsthochschule Dresden",
      date: 'Mai 1998',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 12
    },
    {
     title: "Zeitriss",
     subtitle: "Über Zeitmaschinen, Todestechnologien, Humanprozessoren",
      where: "Bremer Angestelltenkammer",
      date: '13.11.1998',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 13
    },
    {
     title: "Zeichen und Wunder",
     subtitle: "Hysterie, Kenotaph und symbolischer Tod",
     context: "Gastvorlesung",
      where: "Universität Freiburg",
      date: '4.12.1998',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 14
    },
    {
     title: "Zeit ist Geld wird Zeit",
     context: "Im Rahmen des Symposions: »Schwellenzeiten«.",
      where: "Strobl am Wolfgangsee",
      date: '1.10.1999',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 15
    },
    {
     title: "Warum ich ein abstehendes Ohr habe – und es nicht richten lassen will",
     context: "Im Rahmen des Symposions: Gehör und Hörigkeit",
      where: "Evangelische Akademie Tutzing",
      date: '26.3.2000',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 16
    },
    {
     title: "Die Gatting des Caligula",
     subtitle: "Oder: Warum die Kultur eine Engelmacherin ist",
     context: "Im Rahmen des Symposiums: Die verletzte Diva",
      where: "Universität Innsbruck",
      date: '29.4.2000',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 17
    },
    {
     title: "Der blinde Fleck",
     subtitle: "Über die Möglichkeit einer vorläufigen Theoriebildung",
      where: "Hochschule für Bildende Künste Hamburg",
      date: '8.6.2000',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 18
    },
    {
     title: "Unter Strom",
      where: "Akademie der Bildenden Künste",
      date: '21.6.2000',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 19
    },

    {
     title: "Scheinproduktion",
     subtitle: "Zur Frage des Zentralbankgeldes",
      where: "NDR, Hamburg",
      date: '21.6.2000',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 21
    },

    {
     title: "Was mache ich bloß, wenn ich flüssig bin?",
     subtitle: "Über die Liquidierung des Altmenschen",
      where: "Stadtbibliothek Stuttgart",
      date: '25.10.2000',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 22
    },
    {
     title: "Pop und Software",
      where: "Westfälischer Kunstverein Münster",
      date: '17.1.2001',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 23
    },
    {
     title: "Bilderstürmer. Traumfabrik",
     subtitle: "Zur Ökonomie des Schreckens",
     context: "In der Reihe: Lesarten des Terrors",
      where: "Literaturhaus Hamburg",
      date: '18.2.2002',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 24
    },
    {
     title: "Ich bin Ihr Flugbegleiter, gnädige Frau!",
     context: "Gastvorlesung",
      where: "Universität Basel",
      date: '15.1.2003',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 25
    },
      {
     title: "Raumflucht",
      where: "Lothringer 13, München",
      date: '17.1.2003',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 26
    },
        {
     title: "Zur Genealogie des Rechtssubjekts",
      where: "Universität Bielefeld",
      context: "Im Rahmen der Tagung: Rechtswissenschaft als Kultur­wissenschaft",
      date: '5.4.2003',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 27
    },
    {
     title: "Schein der Macht",
      where: "Verkehrsmuseum Berlin",
      context: "Im Rahmen der Tagung: Sepktakuläre Experimente",
      date: '31.10.2003',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 27
    },
     {
     title: "Kunststoffkunst",
      where: "Verband der Kunststoffindustrie, Freiburg",
      context: "Im Rahmen der Tagung »50 Jahre Zukunft«",
      date: '3-4-12. 2003',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 28
    },

     {
     title: "Die Scham der Philosophen",
      where: "Literaturhaus Hamburg",
      context: "Im Gespräch mit Reinhard Kahl, im Philosophischen Café",
      date: '11.5.2006',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 28
    },
     {
      title: "The End of the Virtuoso",
      context: "Vortrag im Rahmen von: Wir sind die Roboter – Three days of robot music at Musikbrauerei ",
      where: "Berlin",
      date: '30.10.2016',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 39
    },
     {
      title: "Clickonomics",
      context: "Im Rahmen des Symposions Künstliche Empathie",
      where: "Museum Angewandte Kunst, Frankfurt",
      date: '24.3.2017',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 39
    },
     {
      title: "Zu Pierre Klossowski",
      where: "Schinkel-Pavillon, Berlin",
      date: '18.5.2017',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 39
    },
     {
      title: "Zum Hören des Absoluten",
      where: "Bunker-Salon 5, Hamburg",
      date: '18.5.2017',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 39
    },
     {
      title: "I as Another",
      subtitle: "The End of the Indivdual",
      context: "Vortrag beim Symposion Individualty/Dividuation, im Rahmen 250-Jahr Feier der HfBK, Hamburg.",
      date: '13.7.2017',
      description: {
        de: "Zu Freud und der Mechanik des Unbewussten",
        en: "Freud and the Mechanics of the Unconscious"  
        },
      id: 40
    },

  ]












const bg = './resources/clouds04.jpg';


class Lectures extends Component {

 constructor(props) {
   super(props);

   this.state = {
      TEXT: global.TEXT,
      locale: this.props.language
    }


 }

  onClick(essay) {
    window.open(essay.link, '_blank');
  }

  /*
            { this.context }
            { this.where }
            { this.date }
*/

  getLecture(e, i) {
    this.description = "Beschreibung";
    if (e.description) this.description = e.description[this.props.language];

    this.subtitle       = null;
    this.context        = null;
    this.where          = null;
    this.date           = null;
    this.link           = null;

    if (e.subtitle)         this.subtitle = ( <span className = "lecture_subtitle"> { e.subtitle }.  </span> );
    if (e.context)          this.context  = ( <span className = "lecture_context"> { e.context }.</span> );  
    if (e.where)            this.where    = ( <span className = "lecture_where"> { e.where }.</span> );  
    if (e.date)             this.date    =  ( <span className = "lecture_date"> { e.date }.</span> ); 

    this.title = ( <span title = { this.description } className = "lecture_title"> { e.title }.</span> ); 

    return (
          <div key = { i} className = 'lecture'>

            { this.title }
            { this.subtitle }
            { this.context }
            { this.where }
            { this.date }


        </div>
    )

  }

  renderLectures() {
   let list = [];

    for (var i = 0; i < lectures.length; i++) {
      let e = lectures[i];
      
      list.push(
       this.getLecture(e, i)
      )
    }

  return list;
  }


  componentDidMount() {
  }

  render() {


    return (
        <div className = 'LecturesPage' >
            <h2>
              { this.state.TEXT.__('Lectures') }
            </h2>
            <div className = 'Lectures_Section'>
            { this.renderLectures() }
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

export default connect(mapStateToProps)(Lectures);

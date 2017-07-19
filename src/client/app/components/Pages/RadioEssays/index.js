import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import DynamicPage from  '../../../components/DynamicPage';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import essays from './essays.js';


let essays = [
        {
      title: "Zeitriss",
      publisher: "SFB",  
      date: '8.10.1991',
      description: {
        de: "Über die Zeit der mechanischen Uhr",
        en: "On the Time of the Mechanical Clock"  
        },
      id: 1,
    },
      {
      title: "Bildauflösung",
      subtitle: "Zum Denken der Perspektive",
      publisher: "SFB",  
      date: '8.10.1995',
      description: {
        de: "Über die Guillotine",
        en: "On the history of the Guillotine"  
        },
      id: 1,
    },
      {
      title: "Die Guillotine",
      subtitle: "Eine Autopsie der Moderne",
      publisher: "SFB",  
      date: '8.8.1996',
      description: {
        de: "Über die Guillotine",
        en: "On the history of the Guillotine"  
        },
      id: 2,
    },

    {
      title: "Die Schrecken der Quote",
      subtitle: "Libido. Geld. Aufmerksamkeit",
      publisher: "BR. Nachtstudio",  
      date: '1.5.2016',
      description: {
        de: "Ein Dialog über Aufmerksamkeitsökonomie",
        en: "A Dialogue on Attention Economy"  
        },
      id: 3,
    },
    {
      title: "Die Chimären des Denkens",
      subtitle: "Die Philosophie der Maschine",
      publisher: "BR. Nachtstudio",  
      date: '15.12.2015',
      description: {
        de: "Ein Dialog über Aufmerksamkeitsökonomie",
        en: "A Dialogue on Attention Economy"  
        },
      id: 3,
    },
     {
      title: "Wundersame weiße Wiedergänger",
      publisher: "BR. Nachtstudio",  
      date: '1.5. 2016',
      description: {
        de: "Über den Revolutionär als Wiedergänger",
        en: "On the Spectre of Revolutionary Thinking"  
        },
      id: 3,
      link: "http://www.br.de/radio/bayern2/kultur/nachtstudio/wundersame-weisse-wiedergaenger-100.html"
    },
     {
      title: "Die Schrecken der Hydra",
      publisher: "BR. Pluto",  
      date: '26.5. 2017',
      description: {
        de: "Über die Hydra",
        en: "On the Hydra"  
        },
      id: 4,
      link: "http://www.br.de/radio/bayern2/kultur/nachtstudio/pluto-deutschland-idenitaet-100.html"
    },

  ]









class RadioEssays extends Component {

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


  getEssay(e, i) {

    let description = "Beschreibung";
    if (e.description) description = e.description[this.props.language];

    if (! e.pdf && ! e.link)
    {

    return (
        <div key = { i } >
          <div className = 'all_essays'>

            <div title = { description } className = 'radioessaytitle' >
              { e.title }
              <span className = 'essaysubtitle'>{e.subtitle}</span>  
            </div>


          </div>
          <div className = "essay_journal">
            In: { e.publisher }, am: { e.number }  {e.date}
          </div>
        </div>
    )}
     else
      {
      let type = "pdf";  
      if ( e.link)  type = "link";

      return (
        <div key = { i } >
          <div className = 'all_essays'>
              <div title = { description } className = 'radioessaytitle clickable' onClick={this.onClick.bind(this, e, type) } >
              { e.title }
              <span className = 'essaysubtitle'>{e.subtitle}</span>  
              </div>
 

              <div className = "essay_journal">
                In: { e.publisher }, am: { e.number }  {e.date}
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
        <div className = 'EssayPage' >
            <h2>
              { this.state.TEXT.__('Radio-Essays') }
            </h2>
          <div className = 'RadioEssayContainer'>
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

export default connect(mapStateToProps)(RadioEssays);

import React, { Component } from 'react';



/*********************************************************************************** */

import createTrie from 'autosuggest-trie';



/*********************  This is for the index  ***************************************/

import videolist from '../../components/Pages/TwinKomplexFilms/video_list.js';
import Indexer from '../../components/Indexer';

import audiolist from '../../components/Pages/AudioPieces/AudioList.js';
import editionlist from '../../components/Pages/Editions/list.js';
import essaylist from '../../components/Pages/Essays/essays.js';
import booklist from '../../components/Pages/Books/BookList.js';
import lecturelist from '../../components/Pages/Lectures/list.js';



let al = { 
         list: audiolist,
         name: 'audiolist',
         fields: ['together_with', 'speaker', 'publisher', 'title']
         }

let vl = { list: videolist,
           name: 'videolist', 
           fields: ['actors'] };

let ell = {
          list: editionlist,
          name: 'editionlist',
          fields: ['author', 'publisher']
          }

let es = {
          list: essaylist,
          name: 'essaylist',
          fields: ['publisher', 'title']
          }


let bl = {
          list: booklist,
          name: 'booklist',
          fields: ['publisher', 'title']
          }


let ll = {
          list: lecturelist,
          name: 'lecturelist',
          fields: ['where', 'title']
          }



let MyIndex = new Indexer([al, vl, ell, es, bl, ll]);



const trie = createTrie(MyIndex.index, 'value');


/****************************** Index Ende ******************************************/





export default class IndexSearch extends Component {


  constructor(props) {
    super(props);


    this.state = {
        value: '',
        suggestions: null,
        occurrence: null
    };
  

  this.onChange = this.onChange.bind(this);
  this.renderSuggestions = this.renderSuggestions.bind(this);

  this.autosuggest = null;

  }

// <input className = "NavbarInput" type="text" name="firstname"/>
 
  onChange(event) {
    let x = trie.getMatches(event.target.value, { limit: 8 } );


    this.setState({value: event.target.value,
                   suggestions: x,
                   occurrence: null
    });
  }



 onClickFinding(occ) {
      let hash = '';

      switch(occ.name) {
          case 'audiolist':
            var link = audiolist[occ.id];
            console.log(link);
            hash = "#/audio?id=" + link.id;
            window.location.hash = hash;
          break;

          case 'videolist':
            var link = videolist[occ.id];
            console.log(link);
            store.dispatch({ type: "VIDEO_SELECTED", payload: link.link });  

            hash = "#/video?id=" + link.link;
            window.location.hash = hash;
          break;


          case 'editionlist':
           var link = booklist[occ.id];
           hash = "#/book?id=" + link.id
          break;

          case 'booklist':
           var link = booklist[occ.id];
           hash = "#/book?id=" + link.id;
           window.location.hash = hash;
          break;

          case 'essaylist':
            hash = "#/essays";
            window.location.hash = hash;
          break; 

          case 'lecturelist':
            hash = "#/lectures";
            window.location.hash = hash;
          break;
      }
   
 }


  triggerItem(item, occ) {
    this.onClickFinding(occ);
    /*
      let hash = '';
      
      switch(occ.name) {
          case 'audiolist':
            var link = audiolist[occ.id];
            console.log(link);
            hash = "#/audio?id=" + link.id;
            window.location.hash = hash;
          break;

          case 'editionlist':
            alert("Eine Edition");
          break;

          case 'booklist':
           var link = booklist[occ.id];
           hash = "#/book?id=" + link.id;
           window.location.hash = hash;
          break;

          case 'essaylist':
            hash = "#/essays";
            window.location.hash = hash;
          break; 

          case 'lecturelist':
            hash = "#/lectures";
            window.location.hash = hash;
          break;


      }
      */
  }


  getTitle(occ) {
    console.log(occ);
    var t = '';


    switch(occ.name) {
      case 'videolist':
        t = videolist[occ.id].title;

        return (
          <span>{ t }</span>
          )
      break;

      case 'audiolist':
        t = audiolist[occ.id].title;


        return (
          <span>{ t } </span>
          )
      break;

      case 'essaylist':
        <span>Ein Essay</span>
      break;

      case 'lecturelist':
        <span>Ein Vortrag</span>
      break; 

      case 'booklist':
        <span>Ein Buch</span>
      break;

    }

  }


  getOccurrence(occ, i) {
    var title = this.getTitle (occ)  

    if (i == 0) 
    {
      return (
          <div key = {i} >
            <hr/>            
            <div className = "occurrence" onClick = { this.onClickFinding.bind(this, occ) } >
              { title }
          </div>
        </div>
      )
    }
    else
    {
      return (
            <div key = { i} className = "occurrence" onClick = { this.onClickFinding.bind(this, occ) } >
              { title }
          </div>
      )
    }

  }

  renderFindings() {
    console.log("sollte die Findings rendern");
    ///// 

    if (this.state.occurrence) {
    console.log("Die gibt es jetzt " + this.state.occurrence.length); 

    let occ = this.state.occurrence;

    let list = [];

    for (var i = 0; i < occ.length; i++) {
        let e = occ[i];
        
        list.push(
        this.getOccurrence(e, i)
        )
    }

    return list;

    }
    //// 

  }



  setOccurrences(item) {
    this.setState({
        occurrence: item.occurrence
    });
  
  }





  onClick(item) 
  {
    console.log(item);

  if (item.occurrence.length === 1) {
    console.log("TRIGGER");
    this.triggerItem(item, item.occurrence[0]);
    }
  else
    {
    this.setOccurrences(item);
    }

  }


  getSuggetion(e, i) {
    return (
          <div className = "suggestion" key = { i} onClick = { this.onClick.bind(this, e) } >
            { e.value }
        </div>
    )
  }


  renderSuggestions() { 
   let list = [];

   if (this.state.suggestions) 
    {
    /// 
    for (var i = 0; i < this.state.suggestions.length; i++) {
        let e = this.state.suggestions[i];
      
        list.push(
          this.getSuggetion(e, i)
        )


      }
    //// 
    }

  return list;
  };




  render() {  

    return (
       <div id = "IndexSearch">
          <input onChange = { this.onChange } className = "IndexSearchInput" type="text" name="firstname"/>

          <div className = "Suggestions">
            { this.renderSuggestions()   }
            { this.renderFindings() }
          </div>
       </div>

    );
  }
}


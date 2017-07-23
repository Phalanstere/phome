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

import articlelist from '../../components/Pages/Journalism/list.js';
import performancelist from '../../components/Pages/Performances/list.js';

import radioessaylist from '../../components/Pages/RadioEssays/list.js';


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


let pl = {
          list: performancelist,
          name: 'performancelist',
          fields: ['location', 'title']
          }

let jl = {
          list: articlelist,
          name: 'articlelist',
          fields: ['publisher', 'title']
          }


let rl = {
          list: radioessaylist,
          name: 'radioessaylist',
          fields: ['publisher', 'title']
          }





let MyIndex = new Indexer([al, vl, ell, es, bl, ll, pl, jl, rl]);



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



 onClickFinding(occ, i) {
      let hash = '';
      /*
      this.setState({
        occurrence: null
      });
      */

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


          case 'articlelist':
           var link = articlelist[occ.id]; 
           if (link.link) 
              {
              window.open(link.link, '_blank'); 
              }
           console.log(link);
           hash = "#/journalism?id=" + link.id;
           window.location.hash = hash;

          break;

          case 'editionlist':
           var link = booklist[occ.id];
           hash = "#/editions?id=" + link.id;
           window.location.hash = hash;
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

          case 'radioessaylist':
            hash = "#/radio_essays";
            window.location.hash = hash;
          break;

          default:
            alert("UNBEKANNT");
          break;

      }
   
 }


  triggerItem(item, occ, i) {
    this.onClickFinding(occ,i);
  }


  getTitle(occ) {
    console.log(occ);
    var t = '';
    var res = null;

    switch(occ.name) {
      case 'videolist':
        t = videolist[occ.id].title;
        res = (
          <span>{ t }</span>
          )
      break;

      case 'audiolist':
        t = audiolist[occ.id].title;
        res = (
          <span>{ t } </span>
          )
      break;

      case 'essaylist':
        t = essaylist[occ.id].title;

        res = (
        <span>{ t }</span>
        )
      break;

      case 'lecturelist':
        t = lecturelist[occ.id].title;

        res = (
        <span>{ t }</span>
        )
      break; 

      case 'booklist':
        t = booklist[occ.id].title;
        res = (
        <span>{ t }</span>
        )
      break;

      case 'articlelist':
        t = articlelist[occ.id].title;
        res = (
        <span>{ t }</span>
        )
      break; 

      case 'radioessaylist':
        t = radioessaylist[occ.id].title;
        res = (
        <span>{ t }</span>
        )
      break;

    }

  return res;

  }


  getOccurrence(occ, i) {
    var title = this.getTitle (occ)  

    if (i == 0) 
    {
      return (
          <div key = {i} >
            <hr/>            
            <div className = "occurrence" onClick = { this.onClickFinding.bind(this, occ, i) } >
              { title }
          </div>
        </div>
      )
    }
    else
    {
      return (
            <div key = { i} className = "occurrence" onClick = { this.onClickFinding.bind(this, occ, i) } >
              { title }
          </div>
      )
    }

  }

  renderFindings() {

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





  onClick(item, id) 
  {
  var s = "sugg" + id;
  
  var a = document.getElementsByClassName("suggestion");
  for (var i = 0; i < a.length; i++) {
    a[i].classList.remove("active_suggestion");
  }

  document.getElementById(s).classList.add("active_suggestion");

  if (item.occurrence.length === 1) {
    console.log("TRIGGER");
    this.triggerItem(item, item.occurrence[0], 0);
    }
  else
    {
    this.setOccurrences(item);
    }

  }


  getSuggetion(e, i) {
    var id = "sugg" + i;

    return (
          <div id = { id } className = "suggestion" key = { i } onClick = { this.onClick.bind(this, e, i) } >
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



import React from 'react';
import ReactDOM from 'react-dom';
// import Provider from './components/Provider';

import {
    HashRouter,
    Router,
    Route,
    IndexRoute,
    Navigation
} from 'react-router-dom';

import { createBrowserHistory } from 'history'
const history = createBrowserHistory();



import './components/Psychotest/styles.css';

import NavBar from './components/NavBar';


import App from './components/App';

import Contact from './components/Pages/Contact';
import Schedule from './components/Pages/Schedule';
import About from './components/Pages/About';
import Intro from './components/Pages/Intro';
import Objectives from './components/Pages/Objectives';
import NIT from './components/Pages/NIT';

import Burckhardt from './components/Pages/Leiter';
import Motivation from './components/Pages/Motivation';
import Login from './components/Pages/Login';
import Books from './components/Pages/Books';
import Essays from './components/Pages/Essays';
import Essay from './components/Pages/Essay';
import Editions from './components/Pages/Editions';
import RadioEssays from './components/Pages/RadioEssays';
import Journalism from './components/Pages/Journalism';
import Lectures from './components/Pages/Lectures';
import Lecture from './components/Pages/Lecture';

import Downloads from './components/Pages/Downloads';

import TwinComplex from './components/Pages/TwinComplex';
import TwinKomplexFilms from './components/Pages/TwinKomplexFilms';

import TwinKomplexPsychotest from './components/Pages/TwinKomplexPsychotest';
import TwinKomplexStore from './components/Pages/TwinKomplexStore';


import Audio from './components/Pages/Audio';
import AudioPieces from './components/Pages/AudioPieces';

import AudioArt from './components/Pages/AudioArt';

import Discography from './components/Pages/Discography';


// import Archive from './components/Pages/Archive';
import Biography from './components/Pages/Biography';
import Book from './components/Pages/Book';
import SampleChapter from './components/Pages/SampleChapter';

import Video from './components/Pages/Video';
import SourceCode from './components/Pages/SourceCode';
import Quotes from './components/Pages/Quotes';

import Computerworld from './components/Pages/Computerworld';
import AllNothing from './components/Pages/AllNothing';

import Blog from './components/Pages/Blog';
import Performances from './components/Pages/Performances';


import { Provider } from 'react-redux';
import { createStore } from 'redux';



// import reducer from './reducers';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-104455713-2');


function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}


history.listen(( location, action) => {
    logPageView();
})




let initialState: State = {
	"language": ['de', 'en'],
	"actual_language": 'de'
}






const reducer = (state = initialState, action) => {
  console.log ("state ist " + state);

  switch(action.type) {
    case "LANGUAGE_NOVA":
        return [
        ...state,
          {
          actual_language: action.payload,
          }
        ]

    break;

    case "LANGUAGE_SELECTED":
        return Object.assign({}, state, {
           actual_language: action.payload,
        })
    break;

    case "BOOK_SELECTED":
        return Object.assign({}, state, {
           actual_book: action.payload,
        })
    break; 

    case "ESSAY_SELECTED":
        return Object.assign({}, state, {
           actual_essay: action.payload,
        })
    break;

    case "CHAPTER_SELECTED":
        return Object.assign({}, state, {
           actual_chapter: action.payload,
        })
    break;


    case "AUDIO_SELECTED":
        return Object.assign({}, state, {
           actual_audio: action.payload,
        })
    break; 

    case "LECTURE_SELECTED":
        return Object.assign({}, state, {
           actual_lecture: action.payload,
        })
    break; 


    case "VIDEO_SELECTED":
        return Object.assign({}, state, {
           actual_video: action.payload,
        })
    break;


    case "ACTIVE_ANIMATOR":
        return Object.assign({}, state, {
           active_animator: action.payload,
        })
    break;


    case "CHECK_ANIMATOR":
        if (state.active_animator) 
            {
            state.active_animator.stop();
            state.active_animator = {};  
            return Object.assign({}, state, {
                active_animator: null,
                })

            }
        else return state;
    break;


  default:
    return state;
  }
}



let store = createStore(reducer);
/*

store.dispatch({
  type: "MULTIPLY",
  value: 3
});

store.dispatch({
  type: "MULTIPLY",
  value: 3
});
*/



window.store = store;



// import JShell from './components/JShell';

import Titelei from './components/Titelei';
import DynamicTitlingBackground from './components/DynamicTitlingBackground'


ReactDOM.render((
      <Provider store={store}>
        <HashRouter history = {history}  >
            <div>
                <Route path="/" render={()=><App/>}/>
                <Route path="/contact" render={()=><Contact/>}/>
                <Route path="/intro" render={()=><Intro/>}/>
                <Route path="/schedule" render={()=><Schedule/>}/>
                <Route path="/objectives" render={()=><Objectives/>}/>
                <Route path="/about" render={()=><About/>}/>
                <Route path="/NIT" render={()=><NIT/>}/>
                <Route path="/Burckhardt" render={()=><Burckhardt/>}/>
                <Route path="/motivation" render={()=><Motivation/>}/>
                <Route path="/signup" render={()=><Login/>}/>
                
                <Route path="/books" render={()=><Books/>}/>
                <Route path="/book" component={Navigation} render={()=><Book/>}/>

                <Route path="/sample_chapter" render={()=><SampleChapter/>}/>

                
                <Route path="/essays" render={()=><Essays/>}/>
                <Route path="/essay" render={()=><Essay/>}/>
                <Route path="/editions" render={()=><Editions/>}/>


                <Route path="/radio_essays" render={()=><RadioEssays/>}/>
                <Route path="/lectures" render={()=><Lectures/>}/>
                <Route path="/lecture" render={()=><Lecture/>}/>

                <Route path="/downloads" render={()=><Downloads/>}/>


                <Route path="/journalism" render={()=><Journalism/>}/>
                <Route path="/twinkomplex" render={()=><TwinComplex/>}/>
                
                <Route path="/audio" render={()=><Audio/>}/>
                <Route path="/audio_pieces" render={()=><AudioPieces/>}/>                

                <Route path="/audio_art" render={()=><AudioArt/>}/>
                <Route path="/discography" render={()=><Discography/>}/>

                <Route path="/computerworld" render={()=><Computerworld/>}/>


                <Route path="/biography" render={()=><Biography/>}/>
                
                <Route path="/all_and_nothing" render={()=><AllNothing/>}/>

                <Route path="/blog" render={()=><Blog/>}/>

                <Route path="/performances" render={()=><Performances/>}/>
                <Route path="/twinkomplex_videos" render={()=><TwinKomplexFilms/>}/>

                <Route path="/twinkomplex_psychotest" render={()=><TwinKomplexPsychotest/>}/>
                <Route path="/twinkomplex_store" render={()=><TwinKomplexStore/>}/>



                <Route path="/video" render={()=><Video/>}/>

                <Route path="/sourcecode" render={()=><SourceCode/>}/>
                <Route path="/quotes" render={()=><Quotes/>}/>

            </div>
        </HashRouter >
      </Provider>
    ), document.getElementById('root'));
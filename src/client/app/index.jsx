
import React from 'react';
import ReactDOM from 'react-dom';
// import Provider from './components/Provider';

import {
    HashRouter,
    Router,
    Route,
    IndexRoute,
} from 'react-router-dom';

import { createBrowserHistory } from 'history'
const history = createBrowserHistory();

import Psychotest from './components/Psychotest'
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

import RadioEssays from './components/Pages/RadioEssays';
import Journalism from './components/Pages/Journalism';
import Lectures from './components/Pages/Lectures';

import TwinComplex from './components/Pages/TwinComplex';
import Audio from './components/Pages/Audio';
import AudioPieces from './components/Pages/AudioPieces';

import AudioArt from './components/Pages/AudioArt';

import Discography from './components/Pages/Discography';


// import Archive from './components/Pages/Archive';
import Biography from './components/Pages/Biography';
import Book from './components/Pages/Book';

import Computerworld from './components/Pages/Computerworld';


import { Provider } from 'react-redux';
import { createStore } from 'redux';




// import reducer from './reducers';


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

    case "AUDIO_SELECTED":
        return Object.assign({}, state, {
           actual_audio: action.payload,
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
        <HashRouter history = {history} >
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
                <Route path="/book" render={()=><Book/>}/>
                
                <Route path="/essays" render={()=><Essays/>}/>
                <Route path="/essay" render={()=><Essay/>}/>
                <Route path="/radio_essays" render={()=><RadioEssays/>}/>
                <Route path="/lectures" render={()=><Lectures/>}/>



                <Route path="/journalism" render={()=><Journalism/>}/>
                <Route path="/twinkomplex" render={()=><TwinComplex/>}/>
                
                <Route path="/audio" render={()=><Audio/>}/>
                <Route path="/audio_pieces" render={()=><AudioPieces/>}/>                

                <Route path="/audio_art" render={()=><AudioArt/>}/>
                <Route path="/discography" render={()=><Discography/>}/>

                <Route path="/computerworld" render={()=><Computerworld/>}/>


                <Route path="/biography" render={()=><Biography/>}/>



            </div>
        </HashRouter >
      </Provider>
    ), document.getElementById('root'));
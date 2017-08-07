import React, { Component } from 'react';
import * as i18n from 'i18n-for-browser';

console.log("INTERNATIONAL");


var ProgrammingEN = `In just a weekend, what can you learn about programming?
More than you ever dared to dream.
Less than what wou want to accomplish.
But enough that you may understand how a programmer
ticks ... feels ... operates`;


var t = `Was kann man an einem Wochenende über Programmierung erfahren?
Mehr als man sich zu träumen erhofft.
Weniger als nötig wäre ...
Aber genug, um zu verstehen, wie ein Programmierer tickt ... fühlt ... operiert.`



import TwinKomplexDE from './TwinKomplex_DE.txt';
import TwinKomplexEN from './TwinKomplex_EN.txt';


var EisenhowerEN = "If you can't solve a problem, enlarge it.\n(Dwight D. Eisenhower)";
var EisenhowerDE = "Wenn Sie ein Problem nicht lösen können,\nvergrößern Sie es.\n(Dwight D. Eisenhower)";


// import vita_DE from  './Vita_DE.html';
// import vita_DE from  "html-loader!./Vita_DE.html";



import vita_DE from  './Vita_DE.txt';
import vita_EN from  './Vita_EN.txt';

import motivation_DE from  './motivation_DE.txt';
import motivation_EN from  './motivation_EN.txt';

import computer_culture_DE from './Computerkultur_DE.txt';
import computer_culture_EN from './Computerkultur_EN.txt';

import AudioArt_DE from './AudioArt_DE.txt';


// let vita_DE = 'Martin B';

let signup_DE = 'In Kürze finden Sie hier einen Zugang, bei dem Sie sich einloggen können. Im Augenblick sind wir noch ganz altmodisch: Rufen Sie uns an, wenn Sie Interesse an einer Teilnahme haben.'
let signup_EN = 'Very soon you will have access to a portal, where you can log in and administer your da. For the time being, we are old-fashioned: Just call us if you are interested to participate,'


import Metamorphosen_DE from './Metamorphosen_DE.txt';




i18n.configure({
    locales: {
        'en': {
        	"hello": "Hello World!",
            "language": "Language",
            "German": "German",
            "Contact": "Contact",
            "SignUp": "SignUp",
            "SignExpalanation": signup_EN,
            "Training": "Digital Survival Training",
            "NextDate": "Next date",
            "Schedule": "Schedule",
            "Luxury": "Your motivation",
            "MotivationText": motivation_EN, 
            "MotivationPoint": "And that's why you are here!",
            
            "Objectives": "Objective",
            "NIT": "More about the NIT",
            "Burckhardt": "The Instructor",
            "BurckhardtVita": vita_EN,
            "Explanation": ProgrammingEN,
            "Eisenhower": EisenhowerEN,

            "Books": "Books",
            "Theory": "Theory",
            "Journalism": "Journalism",
            "Art": "Art",
            "Projects": "Projects",
            "Biography": "Biography",
            "Lectures": "Lectures",
            "AudioPieces": "Audio Pieces",
            "Together": "together with:",
            "Articles": "Articles",

            "computer_culture": computer_culture_EN,
            "computerworld": "On Computer Pioneers",
            "composer": "composer",
            "speaker": "speaker",
            "directed_by": "directed by",
            "duration": "duration",
            "twinkomplex_game": TwinKomplexEN,
            "email": "In case you have a question, want to invite me for a lecture... just write an ",
            "reaction": " If I  am not totally aborbed by some writing, I will try to give you a feedback.",
            "AllNothingSite": "The \"All and Nothing\" Website",            
            "AllNothingExplain": "Here you can listen to the audio book of All and Nothing (sorry, only German)",

            "pages": "pages",

            "Metamorphosen": Metamorphosen_DE,

            "sample_chapter": "sample chapter",

            "Performances": "Performances / Installations",
            "Editions": "Editions and Translations",
            "TwinKomplexFilms": "TwinKomplex videos",
            
            "Downloads": "downloadable files",
            "Search": "Search",
            "with": "with",

            "AudioArt": AudioArt_DE,

        },
        'de': {
        	"hello": "Hallo Welt",
            "language": "Sprache",      
            "German": "Deutsch",
            "Contact": "Kontakt", 
            "SignUp": "Anmelden",
            "SignExpalanation": signup_DE,

            "Training": "Zum Digital Survival Training",
            "NextDate": "Nächster Termin",
            "Schedule": "Seminar-Ablauf",
             "Luxury": "Ihre Motivation",
             "MotivationText": motivation_DE, 
            "MotivationPoint": "Und deswegen sind Sie hier!",

            "Objectives": "Das Ziel",
             "NIT": "Mehr zum NIT",
             "Burckhardt": "Zum Seminarleiter",
            "BurckhardtVita": vita_DE,
            "Explanation": t,
            "Eisenhower": EisenhowerDE,

            "Books": "Bücher",
            "Theory": "Theorie",
            "Journalism": "Publizistik",
            "Art": "Kunst",
            "Projects": "Projekte",
            "Biography": "Vita",
            "Lectures": "Vorträge",

            "AudioPieces": "Hörstücke",
            "Together": "zusammen mit:",
            "Articles": "Artikel",

            "computer_culture": computer_culture_DE,
            "computerworld": "Computerwelt-Schöpfer",
            "composer": "Komponist",
            "speaker": "Sprecher",
            "directed_by": "Regie",
            "duration": "Dauer",
            "twinkomplex_game": TwinKomplexDE,
            "email": "Wenn Sie eine Frage haben oder mich zu einem Vortrag einladen mögen ... schreiben Sie mir ein ",
            "reaction": "Wenn ich mich nicht gänzlich in einer Arbeit verloren habe, bemühe ich mich, Ihnen eine Antwort zu geben.",
            "AllNothingSite": "Die Website zu \"Alles und Nichts\"",            
            "AllNothingExplain": "Hier kann man sich das Audiobuch zu Alles und Nichts anhören",
            "pages": "Seiten",

            "Metamorphosen": Metamorphosen_DE,
            "sample_chapter": "Beispielkapitel",
            
            "Performances": "Performances / Installationen",
            "Editions": "Übersetzungs- und Herausgebertätigkeit",
            "TwinKomplexFilms": "TwinKomplex-Filme",

            "Downloads": "Dateien zum Download",
            "Search": "Suche",
            "with": "mit",   

            "AudioArt": AudioArt_DE,         

        }
    },
    cookie: 'lang'
});


i18n.setLocale('de');

window.i18n = i18n;


export default i18n;
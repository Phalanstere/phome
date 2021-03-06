let articles = [

    {
      title: "Vom Geist der Maschine",
      publisher: "Basler Magazin",
      date: '23.12.2000',
      description: {
        de: "Zum Geist in der Maschine",
        en: "About the Ghost in the Machine"  
        },
      id: 1
    },
    {
      title: "Wie ich zum Alien wurde",
      subtitle: "Die Allmacht der simulierten Bilder",
      publisher: "Basler Magazin",
      date: '30.3.2002',
      description: {
        de: "Die Macht des 3d-Rendering",
        en: "The Power of 3d-Rendering"  
        },
      id: 2
    },
    {
      title: "Ästhetik der Ganzkörperzeichen",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '4.6.2009',
      description: {
        de: "Technologie und Ästhetik der Computerspiele",
        en: "On the Technology and Aesthetics of Computer Games"  
        },
      link: 'http://www.faz.net/aktuell/feuilleton/computerspiele-die-aesthetik-der-ganzkoerperzeichen-1815551.html',
      id: 3

    },
    {
      title: "Verbrennt die Flotte!",
      publisher: "Freitag",
      date: '4.6.2009',
      description: {
        de: "Speichersysteme und kulturelles Gedächtnis",
        en: "On Storage Systems and cultural Remembrance"  
        },
      link: 'https://www.freitag.de/autoren/der-freitag/verbrennt-die-flotte',
      id: 4

    },
        {
      title: "Er machte sich zum Herrn über den Äther",
      subtitle: "Computerweltschöpfer 1. Robert Metcalfe",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '18.1.2016',
      description: {
        de: "Über Robert Metcalfe und das Ethernet",
        en: "Robert Metcalfe"  
        },
      id: 5

    },
    {
      title: "Der Meister der Simulation",
      subtitle: "Computerweltschöpfer 2. Jay Forrester",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '18.1.2016',
      description: {
        de: "Über Jay Forrester",
        en: "On Jay Forrester"  
        },
      id: 6
    },
    {
      title: "Ein böser Märchenstoff",
      subtitle: "Computerweltschöpfer 3. Alan Turing",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '9.4.2016',
      description: {
        de: "Über Jay Forrester",
        en: "On Jay Forrester"  
        },
      id: 6,
      link: "http://www.faz.net/aktuell/feuilleton/was-das-ende-von-alan-turing-ueber-sein-denken-sagt-14158676.html"
    },
    {
      title: "Staatsversagen",
      publisher: "Welt",
      date: '11.5.2016',
      description: {
        de: "Über Angela Merkel und die Flüchtlingskrise",
        en: "On Angela Merkel and the Refugee Crisis"  
        },
      link: 'https://www.welt.de/debatte/kommentare/article155231636/Angela-Merkel-ist-der-Krise-nicht-mehr-gewachsen.html',
      id: 7

    },
    {
      title: "Mit Engelbarts Maus machten andere Mäuse",
      subtitle: "Computerweltschöpfer 4. Douglas Engelbart",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '16.6.2016',
      description: {
        de: "Vannevar Bush, die Atombombe und der Computer",
        en: "Vannevar Bush, the Atomic Bomb and the Com puter"  
        },
      id: 8,
      link: 'http://www.faz.net/aktuell/feuilleton/douglas-c-engelbart-urahn-der-datenverarbeitung-14289132.html'
    },
    {
      title: "Der heiße Krieger",
      subtitle: "Computerweltschöpfer 5. Vannevar Bush",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '20.6.2016',
      description:  {
        de: "Vannevar Bush, die Atombombe und der Computer",
        en: "Vannevar Bush, the Atomic Bomb and the Computer"  
        },
      id: 8,
      link: 'http://www.faz.net/aktuell/feuilleton/computerweltschoepfer-vannevar-bush-der-heisse-krieger-14296603-p4.html'
    },
    {
      title: "Die dunkle Seite der Zahl",
      subtitle: "Computerweltschöpfer 6. Herman Hollerith",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '9.9.2016',
      description: {
        de: "Herman Hollerith, die Lochkarte und das KZ",
        en: "On Herman Hollerith, Demography and Concentration Camps"  
        },
      id: 8,

    },

    {
      title: "Die Braut der Wissenschaft",
      subtitle: "Computerweltschöpfer 7. Ada Lovelace",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '24.10.2016',
      description: {
        de: "Über Ada Lovelace",
        en: "On Ada LovelaCE"  
        },
      id: 9
    },
    {
      title: "Adobe Produkt VoCo",
      subtitle: "Neue Software manipuliert unsere Sprache",
      publisher: "Deutschlandradio Kultur. Politisches Feuilleton",
      date: '15.11.2016',
      description: {
        de: "Über Ada Lovelace",
        en: "On Ada LovelaCE"  
        },
      id: 10,
      link: 'http://www.deutschlandfunkkultur.de/adobe-produkt-voco-neue-software-manipuliert-unsere-sprache.1005.de.html?dram:article_id=371577'
    },
    {
      title: "Der Traum vom Geist, der zur Maschine wird",
      subtitle: "Computerweltschöpfer 8. Charles Babbage",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '2.1.2017',
      description: {
        de: "Über Charles Babbage",
        en: "On Charles Babbage"  
        },
      id: 9,
    },

    {
      title: "Europa ist tot! Es lebe Europa!",
      publisher: "The European",
      date: '23.12.2016',
      description: {
        de: "Über Europa",
        en: "On Europe"  
        },
      id: 9,
      link: 'http://www.theeuropean.de/martin-burckhardt/11638-am-grabmal-des-kapitalismus'
    },

    {
      title: "Alles Fake!",
      publisher: "Die Zeit",
      date: '15.1.2017',
      description: {
        de: "Über Charles Babbage",
        en: "On Charles Babbage"  
        },
      id: 10,
      link: 'http://www.zeit.de/kultur/2017-01/fake-news-donald-trump-internet-politik-kommunikation-medien'
    },
    {
      title: "Google & Co",
      subtitle: "Wenn Staaten ihre Macht outsourcen",
      publisher: "Deutschlandradio Kultur. Politisches Feuilleton",
      date: '6.3.2017',
      description: {
        de: "Über Ada Lovelace",
        en: "On Ada LovelaCE"  
        },
      id: 11,
      link: 'http://www.deutschlandfunkkultur.de/google-und-co-wenn-staaten-ihre-macht-an-konzerne-outsourcen.1005.de.html?dram:article_id=380521'
    },
    {
      title: "Den Computer erziehen",
      subtitle: "Computerweltschöpfer 9. Grace Hopper",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '16.3.2017',
      description: {
        de: "Über Grace Hopper",
        en: "On Grace Hopper"  
        },
      id: 12,
    },
    {
      title: "Das Genie der Massse",
      subtitle: "Computerweltschöpfer 10. Steve Jobs",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '12.4.2017',
      description: {
        de: "Über Steve Jobs",
        en: "On Steve Jobs"  
        },
      id: 13,
    },
    {
      title: "Der Mann mit der Mars-Mission",
      subtitle: "Computerweltschöpfer 11. Elon Musk",
      publisher: "Frankfurter Allgemeine Zeitung",
      date: '25.9.2017',
      description: {
        de: "Über Elon Musk",
        en: "On Elon Musk"  
        },
      id: 13,
    }

  ]


  export default articles;
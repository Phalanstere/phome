let audios = [
    {
      title: "Das Altenheim oder Der Tod der Moderne",
      publisher: "HR",
      date: '1984',
      description: {
        de: "Dadaisten im Altenheim",
        en: "A piece about Dadaist artiss in a retirement home"  
      },
      id: 1,
    },
    {
   title: "Rush hour / Da wo die Menschen sind",
      publisher: "SWF",
      together_with: "Hans Peter Kuhn",
      date: '1984',
      description: {
        de: "Eine Geräuschoper",
        en: "A Noise Opera"  
      },
      
      
      content: 'Eine Radiostimme, eine Autotür, ein Satz im Vorübergehen. Geräusche, die sich selbst erzählen und akustische Fährten durch den Alltag einer Metropole legen, hinter der unschwer Berlin zu erkennen ist. - 1984 entstanden und im Frühjahr 1985 vom Südwestfunk urgesendet, war die Originaltonkompostion »Rush/Hour« ein Pionierstück auf dem Weg zur freien Audioart-Szene in Deutschland und wurde von der Kritik begrüßt.',
      speaker: ['Tina Engel', 'Lutz Ehrlich'],
      directed_by: "Martin Burckhardt & Hans Peter Kuhn",
      image: './resources/crowd.jpg',

      id: 2,
    },
    {
   title: "Nachrichten aus Südafrika",
      publisher: "SFB ",
      date: '1987',
      description: {
        de: "Eine Reise durch das Südafrika der Apartheid",
        en: "A Visit of South Africa"  
      },
      
      content: 'Eine Reise in das Südafrika der Apartheid.',

      image: 'http://i.huffpost.com/gen/1186318/thumbs/o-APARTHEID-HISTORY-TIMELINE-NELSON-MANDELA-facebook.jpg',

      id: 3,
      directed_by: "Wolfgang Bauernfeind & Martin Burckhardt",
    },
    {
   title: "Tasso. Ein Torso",
      publisher: "RIAS Berlin",
      together_with: "Hans Peter Kuhn",
      date: '1984',
      description: {
        de: "Ein akustischer Goethe-Steinbruch",
        en: "An acoustic Gethe pit"  
        },
      id: 4,
      directed_by: "Martin Burckhardt & Hans Peter Kuhn",
      content: `Das Hörstück beruht auf Goethes Künstlerdrama - und doch ist es keine Hörspielfassung, sondern eine freie und eigenständige Gestaltung des Stoffes. Von der klassischen Vorlage ist nichts geblieben als ein Textkonzentrat. Der Hofstaat hat abgedankt, allein die Stimme des Künstlers ist zu vernehmen. Aber auch sie ist keine ins Klassische entrückte, keine reife und vollendete Stimme - im Gegenteil! Es ist die Stimme eines Kindes. Und ebendas: ein Kind, das den Tasso liest, ist der Beginn eines akustischen Experiments, eine Ausschweifung in jenen Bereich, wo Literatur und Musik zusammenfließen, wo Sprache zu Klang sich verwandelt und die Klänge zu sprechen beginnen. Und so ist dieses Hörstück das Gegenteil einer Klassikerinszenierung, nämlich der Versuch, ein Denkmal zum Sprechen zu bringen.`,
      speaker: ['Bianca Krahl'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Alphonse_Lami%3B_echorche_torso%2C_1861_Wellcome_L0025113.jpg',
      duration: 53,
    },
    {
   title: "Die Kehrseite der Vernunft",
      publisher: "SFB",
      date: '1987',
      description: {
        de: "Im Gespräch mit einem Schizophrene",
        en: "Talking to a Schizophrenic"  
        },
      id: 5,
      directed_by: "Martin Burckhardt",
      content: 'Ein halbes Jahr habe ich mit einem Schizophrenen getroffen, die Gespräche aufgezeichnet und aus dem Material das Weltbild dieses Mannes zusammengsetzt, der mir zunehmend erschein wie ein sonderbarer Heiliger.',
      speaker: ['Herr Lück']
    },
    {
   title: "Metamorphose der Stille",
      publisher: "SFB",
      together_with: "Johannes Schmölling",
      date: '1987',
      description: {
        de: "Im Gespräch mit einem Schizophrenen",
        en: "Talking to a Schizophrenic"  
        },
      id: 6, 
      content: `Ein alter Mann, der sich über das Unaussprechliche auslässt, eine Opernsängerin, die sich in Gefühlskoloraturen ergeht, ein Säugling, der Unverständliches in sich hineinbrabbelt - und das, was sie miteinander verbindet, ist keine Geschichte, sondern ein Zustand. Jener Grenzbezirk nämlich, wo die Sprache aufhört, Geschichten zu erzählen, wo sie stattdessen, zu Klang und Musik verwandelt, nurmehr von sich selber erzählt. 
      So wird selbst das Gabrabbel eines Säuglings, hört man nur lange genug hin, als eine eigene und eigenen lautmalerischen Gesetzen folgende Sprache erkennbar.Eine Sprache, die, ob wundersame Weise mit der äussersten Künstlichkeit, mit der Stimme eine Opernsängerin mischt. So erzählt dieses Stück auch etwas von der Sehnsucht, die jeder Kunst innewohnt: Natur zu sein. Dass Natur und Kunst eins werden könnten.`,
      speaker: ['Hans Madin', 'Alexis Richter', 'Nick Forsberg'],
      image: './resources/baby.jpeg',
      composer: 'Johannes Schmölling',
      directed_by: "Martin Burckhardt & Johannes Schmölling",
    },
    {
   title: "Disneyworld",
   subtitle: "Eine Simulation",
      publisher: "SFB",
      date: '1987',
      description: {
        de: "Eine Wallfahrt ins amerikanische Heiligtum",
        en: "An American Pilgrimage"  
        },
      id: 7,
      content: 'Eine Wallfahrt ins amerikanische Heiligtum: Disneyland in Anaheim, Los Angeles, Epcot in Orlando, Florida. Die Männer, die den Vergnnügungspart sauber halten, tragen die Kopfbedeckung der Fremdenlegion ... womit eindeutig signalisiert ist: Schmutz ist ein Residual der feindlichen Welt. Wundert es, dass Disney in seinem Park ein perfektes Müllentsorgungssystem erstellt hat, so vollkommen, dass es sogar über einen Babyfilter verfügt?',
      image: './resources/Disneyworld.jpg',
      directed_by: "Martin Burckhardt",
      duration: 58,
    },
   {
   title: "Die Wüste",
   subtitle: "oder das Elend der Avantgarde",
      publisher: "RIAS Berlin",
      date: '1988',
      description: {
        de: "Eine Hörspiel-Groteske",
        en: "An Audio Farce"  
        },
      id: 8,

      directed_by: 'Robert Matejka',
      content: `Hörspiel-Farce: Siegfried, ein avantgardistischer Theatermacher kündigt als sensationelles neues Kunstereignis die Inszenierung eines Wüstenprojektes an. Eine kleine Gruppe von Anhängern ist ihm in ein Hotel am Rande der Wüste gefolgt und wartet gespannt auf die Einlösung des Versprechens. Alle Gedanken und Gespräche umkreisen das Thema Wüste als magischen Ort, an dem jeder seine eigenen Sehnsüchte verwirklicht sehen möchte. Aber niemand redet wirklich von der Wüste, sondern allein von seiner eigenen, höchstpersönlichen Wüste. Als der Künstler endlich bekanntgibt, wie seine Inszenierung aussehen wird, ist die Überraschung groß.`,

      speaker: ['Gerd Wameling', 'Ortrud Beginnen', 'Liselotte Rau', 'Friedrich W. Bauschulte', 'Edda Seippel', 'Walter Schmidinger' ],
      image: 'http://vunature.com/wp-content/uploads/2017/01/deserts-dry-desert-cracks-land-bush-nature-wallpaper-screensaver-free-download-1714x1080.jpg',

      duration: 66,
    },
    {
   title: "Der Zaubergeiger Settembrini",
      publisher: "BR",
      together_with: "Johannes Schmölling",
      date: '1989',
      description: {
        de: "Ein Märchen",
        en: "A Fairy Tale"  
        },
      id: 9,
      content: `Zaubergeiger Settembrini besaß eine Geige, die nicht nur einen wunderbaren Klang hatte, sondern auch sprechen konnte. Aber je berühmter Settembrini wurde, desto mehr ärgerte es ihn, daß er all seinen Ruhm nicht sich selbst, sondern seiner Zaubergeige verdankte. Eines Abends stritten sie heftig miteinander. Am Tag darauf war wieder ein Konzert. Settembrini stand auf der Bühne, aber als er den Geigenbogen ansetzte, kam kein Ton aus seinem Instrument.`,
      image: './resources/violin.jpg',

      speaker: ['Gerd Wameling', 'Torsten Sense', 'Max Goldt', 'Wolfgang Rennert', 'Walter Schmidinger'],
      directed_by: "Martin Burckhardt & Johannes Schmölling",
      composer: 'Johannes Schmölling',
      duration: 47,

    },
   {
   title: "Bis ans Ende der Welt",
      publisher: "NDR ",
      together_with: "Johannes Schmölling",
      date: '1989',
      description: {
        de: "Eine Geistreise durch die Eiseskälte",
        en: "Arctic Cold"  
        },
      id: 10,
      content: `Die Arktis. Der Raum des Imaginären, zugleich Abweisung und Sehnsucht, jenes Land, hinter dem die Erlösung vom jammervollen Leben und der unvollkommenen Beschaffenheit des Menschengeschlechts gesucht wird - aber je weiter diese Suche geht und je tiefer sie vorstößt, desto mehr weicht das Land der Hyperboräer zurück - bis nichts mehr bleibt als die Erforschung einer Leere, einer Abwesenheit.
Sonderbares Paradox. Das Streben danach, mit Gewißheit zu wissen, daß nichts dahinter steckt.

Die Vorstellung, daß eine Forschungsreise im Grunde nur der sinnfällige äßere Ausdruck eines inneren Geschehens ist. Daß die Reise in die Arktis ein Versuch ist, sich der inneren Leere zu nähern. Daß der Versuch, eine genaue Topographie der Lanschaft zu erstellen, eine Reise ins Innere darstellt.
"Nach innen geht der geheimnisvolle Weg" (Novalis)

Die Arktis. Stille. Eine Stille, die so steril ist, daß es in den Ohren zu rauschen beginnt.`,

    speaker: ['Gerd Wameling', 'Libgart Schwarz', "Walter Schidinger", "Wolgang Rennert"],
    image: './resources/Arktis.jpg',
    directed_by: "Martin Burckhardt & Johannes Schmölling",
    },
   {
   title: "Change Program Please",
      publisher: "SFB",
      date: '1989',
      description: {
        de: "Ein Feature über Künstliche Intelligenz",
        en: "Thinking about Artificial Intelligence"  
        },
      id: 11,
      directed_by: "Martin Burckhardt",
      content: `Was hat ein Manager mit einem Neurologen zu tun, was der Computer mit dem Gehirn? Und was bedeutet es, wenn sich alles zu Informationen auflöst? Wenn mein Denken, mein Empfinden, wenn das, was ich für mein Selbst halte, in meinem Gehirn zu einem binären Code aufgelöst wird, auf die gleiche Weise, wie der Computer die Zeichen dechiffriert. So daß, strenggenommen, das Innere meines Kopfes auch von einem Computer dargestellt werden könnte. Oder nicht? Und was bedeutet dieses Wissen für mich? Daß ich, einmal entziffert, zu einem Text geworden bin, zu einem Text, von dem Abschriften hergestellt werden können, Kopien, ja selbst leicht korrigierte, umgeschriebene Versionen? So daß ich, indem ich in die Welt der Programmierung eingetreten bin, möglicherweise schon längst damit begonnen habe, ein anderes Programm meiner selbst zu entwerfen... CHANGE PROGRAM PLEASE ist ein Versuch über all diese Fragen, ein Versuch vor allem, diese Fragen erst einmal zu stellen. So daß, obschon Manager, Neurologen, Computerwissenschaftler und Philosophen zu hören sein werden, es immer bei der einfachsten, nächstliegenden Frage bleiben wird: Was bedeutet all das für mich?`,
      speaker: ['Christian Brückner', 'Gerd Wameling'],
      image: './resources/AI.jpg',
    },
   {
   title: "Die Zeit läuft",
      publisher: "SFB",
      date: '1989',
      description: {
        de: "Über die Zeit der Kathedrale",
        en: "On the Time of the Cathedral"  
        },
      id: 12,

      content: `Eine Entdeckungsreise ins Mittelalter: "Die Zeit läuft" ist ein akustischer Versuch, jenen ßbergang, jene Zeitschwelle festzuhalten, als plötzlich mechanische Uhren zu ticken begannen. Als das Denken über die Zeit nicht mehr den Zyklen der Natur folgte, wie Ebbe und Flut, Tag und Nacht, sondern sich einer Maschine anvertraute. Wobei die größte historische Absonderlichkeit vielleicht ist, daß die Automatisierung der Zeit nicht der naturwissenschaftlichen Revolution, der Geburtsstunde des neuzeitlichen Geistes zu verdanken ist, sondern dem Mittelalter. Die Entstehung der mechanischen Uhr fällt in die Zeit der Gotik, der Kathedralen. Dies ist die Zeit, als man "mit der Zeit zu rechnen begann".`,


      speaker: ['Leon Boden', 'Greger Hansen', 'Gerd Wameling'],

      directed_by: "Martin Burckhardt",
      image: './resources/time.jpg',
      duration: 57,
    },
   {
   title: "Frenkel",
      publisher: "BR",
      together_with: "Johannes Schmölling",
      date: '1991',
      description: {
        de: "Eine Erkundung der Telekinetik",
        en: "An Exploration of Telekinetics"  
        },
      id: 13,
      directed_by: "Martin Burckhardt & Johannes Schmölling",
      speaker: ['Greger Hansen'],
      composer: ['Johannes Schölling'],
    },
   {
      title: "Die Kathedrale",
      subtitle: "Geschichte der Dinge I",
      publisher: "BR",
      together_with: "Johannes Schmölling",
      date: '1993',
      description: {
        de: "Die Kathedrale. Ein Monolog",
        en: "The Cathedral. A Monologue"  
        },
      id: 14,
      image: './resources/Wasserspeier.jpg',
      directed_by: "Martin Burckhardt & Johannes Schmölling",
      composer: "Johannes Schmölling",
      speaker: ['Greger Hansen'],
      content: `Das Hörstück "Die Kathedrale" ist Teil eines Zyklus' mit dem Titel "Die Geschichte der Dinge". Dieser erste Rundgang führt in den Klangraum einer Kathedrale, der musikalisch und als sprechendes Subjekt zu Gehör gebracht wird. Die personifizierte Kathedrale spricht von einer uralten menschlichen Sehnsucht, deren steinerner Ausdruck eben das in gotischem Stil erbaute Gotteshaus ist. Eine Komposition aus Wort und Musik, aus Geräuschen und Gesängen.`,

    },
   {
   title: "Die Uhr",
      publisher: "BR",
      subtitle: "Geschichte der Dinge II",
      together_with: "Johannes Schmölling",
      date: '1993',
      description: {
        de: "Über die Mechanik des Wahnsinns",
        en: "Insane Mechanic"  
        },
      id: 15,
      content: `Teil 2 erzählt von der Mechanik des Wahnsinns, der Geschichte eines Uhrenbauers, der sich einmauern lässt - und, mit der Außenwelt nur durch eine Speiseluke verbinden, sein großes mechanisches  Wunderwerk errichtet.`,
      image: './resources/industria.jpg',
      directed_by: "Martin Burckhardt & Johannes Schmölling",
      composer: "Johannes Schmölling",
      speaker:['Michael Altmann', 'Dorette Hugo'],
      duration: 22, 
    },
   {
      title: "Das Bild",
      subtitle: "Geschichte der Dinge III",
      publisher: "BR",
      together_with: "Johannes Schmölling",
      date: '1993',
      description: {
        de: "Eine Fuge",
        en: "A Fugue"  
        },
      id: 16,
      content: `Ein Mann, eine Frau und eine Textfuge, mathematisch durchkonstruiert.`,
      image: './resources/Zentralperspektive.jpg',
      directed_by: "Martin Burckhardt & Johannes Schmölling",
      composer: "Johannes Schmölling",
      composer: "Johannes Schmölling",
      speaker: ['Leon Boden', 'Dagmar Sitte', 'Martin Burckhardt'],
      duration: 22,
    },
   {
      title: "Spiegel & Park",
      subtitle: "Geschichte der Dinge IV",
      publisher: "BR",
      together_with: "Johannes Schmölling",
      date: '1993',
      description: {
        de: "Park, Höfling, König",
        en: "Park, Courtier, King"  
        },
      id: 16,
      content: `Der französische Park, die Höflinge, ein delirierender König.`,
      directed_by: "Martin Burckhardt & Johannes Schmölling",
      composer: "Johannes Schmölling",
      image: './resources/Park.png',
      speaker: ['Gerd Wameling', 'Alexander Schröder', 'Helge Bechert', 'Anja Kirchlechner', 'Dirk Nolting', 'Iris Wegner'],
      duration: 22,
    },
   {
      title: "Die große Maschine",
      subtitle: "Geschichte der Dinge V",
      publisher: "BR",
      together_with: "Johannes Schmölling",
      date: '1993',
      description: {
        de: "Ada Lovelace",
        en: "Ada Lovelace"  
        },
      id: 17,
      directed_by: "Martin Burckhardt & Johannes Schmölling",

      content: `Ada Augusta Lovelace, die große Hysterika und Assistentin Charles Babbages, im inneren Monolog.`,
      image: './resources/Bahnhof.JPG',

      composer: "Johannes Schmölling",

      speaker: ['Alexander Schröder', 'Elke Petri', 'Jutta Lampe'], 
      duration: 22

    },
   {
      title: "Remote Control",
      subtitle: "Geschichte der Dinge VI",
      publisher: "BR",
      together_with: "Johannes Schmölling",
      date: '1993',
      description: {
        de: "Die seltsamen Launen Howard Hughes",
        en: "The strange vagaries of Howard Hughes"  
        },
      id: 18,

      content: 'Howard Hughes. Milliardär, Flugzeugpionier. Vor allem aber: Ein Zwangscharakter, der seinen Urin sammelt, sttrenge Listen verfasst, wie man eine Konservendose öffnet.',

      image: './resources/Aircraft.jpg',

      directed_by: "Martin Burckhardt & Johannes Schmölling",
      composer: "Johannes Schmölling",

	    speaker: ['Christian Brückner', 'Peter Fitz'],
      duration: 21

    },
   {
      title: "Die Geschichte der Dinge",
      subtitle: "Ein Audio-Zyklus",
      publisher: "BR",
      together_with: "Johannes Schmölling",
      date: '1993',
      description: {
        de: "Eine Kulturgeschichte der Dinge",
        en: "A Material History"  
        },
      id: 19,

      content: `Die Geschichte der Dinge - das ist der Versuch, jene Rede zu wiederholen, die vor dem Verstummen (vor der "Verdinglichung") liegt. Dazu aber müssen die Dinge als unfertig, im Stande (oder besser: in der Schwebe) des Nochnicht gedacht werden. Nur hier, im Unfertigen, öffnet sich die Faszination, wird jene Begierde faßbar, die darauf zielt, sich selbst und die Dinge "fertig zu machen". Die Reise ins Innere des Kopfes, der sich selbst auslegt (als Uhr, als Bild, als Maschine), bezeichnet das Unterfangen, das sich Martin Burckhardt und Johannes Schmölling vorgenommen haben. Daraus hervorgegangen ist ein Zyklus von sechs ca. zwanzigminütigen Hörstücken. Nicht eigentlich Hörspiele im klassischen Sinn, als vielmehr auf eine bestimmte Weise getönte, durchstimmte Gedanken- und Empfindungsräume aus Sprache. Geräusch & Musik - Klangräume, in denen der Hörer sich aufhalten und bewegen kann soll, nicht als ein Außenstehender, sondern als derjenige, dem ein Platz freigehalten worden ist. So daß, im Idealfall, es der eigene Kopf ist, in den man hineinsteigen kann.`,

      directed_by: "Martin Burckhardt & Johannes Schmölling",
      composer: "Johannes Schmölling",
      duration: 150
    },
    {
      title: "Klänge und Schatten",
      subtitle: "Ein Selbstgespräch",
      publisher: "HR",
      date: '1994',
      description: {
        de: "Eine maschinelle Psychoanalyse",
        en: "A mechanical Psychoanalysis"  
        },
      id: 20,
      content: `"Ein Selbstversuch vor dem Mikrophon: Rückstieg in die Räume der Kindheit, Anamnese, Erinnerungsversuch. Kein O-Ton. Vor der Erinnerung (die eine sich verweigernde, entziehende ist, das Modell der Ungewißheit schlechthin) wird die Idee des O-Tons zu dem, was sie ist: absurd. - Nein, indem ich das Material, das meine Stimme und meine Erinnerung ist, bearbeite, indem ich es schneide, arrangiere und verfremde, 'schreibe' ich. Ich schreibe mit Klängen, mit einer 'akustischen Schrift'. Ich unterlaufe (und das ist meine Absicht) das, was man gemeinhin einen 'Text' nennt. Die Textur meines Textes besteht fortan im Klang meiner Stimme, in der Art, wie ich diesen Klang konstruiere/dekonstruiere/destruiere, sie besteht aus den Klang-Schichten, die ich übereinander lagere, sie besteht aus den Räumen, den akustischen Vorwänden und Hintergründen, die ich mir errichte, sie besteht aus dem metamorphen Klangmaterial, aus den digitalisierten Schatten und Hybriden dessen, was meine Stimme war (oder irgendein anderer Sound, ich erinnere mich nicht mehr). So ist mein Selbstversuch auch ein Versuch über das Medium, eine Ref lexion über meine Arbeit, die mich in die Klangräume, in die Faszination der akustischen Schrift hat eintreten lassen." (Martin Burckhardt)`,
      directed_by: "Martin Burckhardt",
      image: './resources/shadows.jpg',
      duration: 54
    },
    {
      title: "Die Offenbarung des Daniel Paul Schreber",
      publisher: "BR",
      date: '1996',
      description: {
        de: "Paranoia",
        en: "Paranoia"  
        },
      id: 21,
      directed_by: "Martin Burckhardt",
      composer: "Martin Burckhardt",
      image: './resources/Paul_Schreber.jpg',

      content: `Irgendwann, im Laufe des Jahres 1894, explodierte der Kopf des Senatspräsidenten Daniel Paul Schreber, worauf er, der Sohn des Schrebergartenschrebers, sich in der Nervenheilanstalt wiederfand, umgeben von Geisterbildern, von denen er gewiß glaubte, daß es sich nur um Luftgespinste handelte. Mehr noch: diese Phantome, die eigentlich Nervenstrahlen waren, wanderten in ihn ein. Sie begannen zu sprechen.
Schreber ist tot, sein Wahn jedoch hat alle Deutungsversuche überlebt. Wir hängen im Netz, das der Schreberschen Nervenapparatur so überaus verwandt ist. Wir sind umgeben von Apparaturen, die strukturiert sind wie der Schrebersche Wahn. Ein einziges telegenes Geplapper, Geplauder, ein SagenVersagen ringsum. Und weil die Sprechmaschinen überall sind, bilden die Schreberschen "Denkwürdigkeiten eines Nervenkranken" das Material für Burckhardts Versuch, diesen Lauf in die Irre für ein akustisches Szenario zu nutzen. Das Hörspiel wurde zum Hörspiel des Monats Oktober 1996 gewählt.`,

    speaker: ['Jens Wawrczeck', 'Grete Wurm', 'Hanns Zischler', 'Artemis Chalkidou', 'Thomas Dillig', 'Jörn Knebel', 'Martin Siegler'],
    singer: ['Mark Welte', 'Barbara Thun', 'Viola Roller', 'Stefan Stoll']
    },
    {
      title: "Das Seminar",
      publisher: "HR",
      date: '1997',
      description: {
        de: "Eine Miszelle zu Jacques Lacan",
        en: "Posthumous Jacques Lacan, still talkling"  
        },
      id: 22,
      content: `"Die vielleicht älteste Form des Seminars ist jene kunstvolle Lehre des Kirchenvaters Origines. Weil Gott ja Wort sei, habe sich das Wort, seiner Natur gemäß, Maria ins Ohr gesetzt. Und auf die gleiche Art sei es, nunmehr fleischgewordenes Wort, dem Ohr wieder entschlüpft. Womit Origines nicht nur das undurchsichtige Dogma der Unbefleckten Erkenntnis plausibilisierte, sondern auch die Gedankenfigur der 'Ohrenempfängnis' in die Welt setzte - und damit: das Seminar der Seminare. Indem es das Leben des Wortes behauptet, predigt das Seminar gegen den toten Buchstaben an, die Tinte, gegen alles, was 'druckreif' klingt.
      Dieser Tradition folgend ist mein Hörstück vor allem ein Stück des Hörensagens, eine Apokryphe, eine bisher verborgene Rede also, dem großen Psychoanalytiker, Wortverdreher und Monomanen Jacques Lacan in den Mund gelegt. Denn auch diesem Herrn, der in seinem Seminar eine große Gefolgschaft versammelte, war es dabei nicht um die Literatur, sondern um die Littoralität zu tun. Wenn es dabei eine Lehre gibt, so die des gesprochenen Worts, das im Munde sich dreht und windet, das sich verspricht, versagt - und keine andere Sehnsucht mehr kennt, als die, zu einer Form des höheren Blödsinns zu werden, zum Blablabla der Radiophonie." (Martin Burckhardt)`,

      image: './resources/Lacan.jpg',
      directed_by: "Martin Burckhardt",
      speaker: ['Wolfgang Forrester'],
      duration: 47
    },
    {
      title: "Die Dame geht an Land",
      publisher: "HR",
      date: '2001',
      description: {
        de: "Über die Erfindung der Dame",
        en: "The Invention of the Lady"  
        },
      id: 22,
      image: './resources/Dame.jpg',

      content: `Darf eine Dame Trompete spielen? Oder Schlagzeug? Oder sollte es doch eher Violine sein? Darf eine Dame ihre Reize ausreizen oder sollte ihr Triebwerk auf eine eher untertourige Art laufen? Was unterscheidet eine Dame von der gewöhnlichen Frau? Sind Damen notwendigerweise Frauen? Wäre eine männliche Dame vorstellbar? 
Oder besteht das Damenhafte der Dame gerade darin, dass sie sich zu unnahbarer Geschlechtslosigkeit hinaufgeschraubt hat? Ist die Dame folglich eine Monstrosität, wie der Kannibale, das Einhorn oder die Muttergottes? Natürlich lässt sich sagen: Dies alles sind scholastische Spitzfindigkeiten. Wo, in Gottes Namen, gibt es heutztage noch Damen? Zweifellos hat man es mit einer gefährdeten Spezies zu tun, die, als Unzeitgemäße, nur in bestimmten ökonomischen Nischen gedeiht, der es darüber hinaus an Gesellschaft fehlt. 
So dass man fragen muss, ob eine Dame denkbar ist, die etwas anderes wäre als eine Parodie ihrer selbst, eine Kaffeetasse im Pelz. Warum also, wenn das Unternehmen Notre Dame bloß kulturschützerische Züge trägt, sollte ein Autor sich bewegt fühlen, sich mit einem so abwegigen Thema zu beschäftigen?" (Martin Burckhardt)
Die Antwort gibt das Hörspiel. Die Welt der Dame wird konfrontiert mit der Welt einiger besonders männlicher Männer, männlicher Großdamen sozusagen. Und das sagt eigentlich alles über Frauen und Männer (und verwandte Wesen), ohne dass ein einziges didaktisch-belehrendes Wort fällt.

Der Kritiker Götz Schmedes schrieb anlässlich der Ursendung in der Funk-Korrespondenz: "'Die Dame geht an Land' ist ein zeitgemäßes Hörspiel, das den Gegensatz von Mann versus Frau einkreist. Aus den vielfältigen Materialien hat Burckhardt ein faszinierendes Klanggebilde gestaltet, das mittels Rhythmik, akustischen Räumen und elektroakustischen Verfremdungen bis zum Schluss Überraschungen bereithält.`,

    directed_by: "Martin Burckhardt",

    speaker: ['Holly-Jane Rahlens', 'Dieter Mann', 'Mechthild Großmann', 'Jens Wawrczeck', 'Nadja Martina Schulz']
    },
    {
      title: "Ideale Opfer",
      subtitle: "Zur Frage des Helden in der Moderne",
      publisher: "NDR",
      date: '2006',
      id: 22,
    },
    {
      title: "Der geschätzte Kollege Dr. Petiot",
      subtitle: "Vivisektion eines Massenmörders",
      publisher: "rbb",
      date: '2008',
      id: 22,

      image: './resources/petiot2.jpg',
      content: `Dr. Marcel Petiot, der französische Arzt und Serienmörder, ist ein besonderer Fall: Er überzeugt durch überwältigenden Charme und begeht seine Taten mit einer ausgeprägten Intelligenz, die sich die jeweiligen Umstände optimal zunutze macht. Als "Teilzeit-Irrer" eingestuft, nutzt er die verminderte Schuldfähigkeit als Freibrief zu einem um so schamloseren Vorgehen. Die Bedingungen, die sich ihm in den Jahren 1939-45 bieten, sind denkbar günstig. Paris, von den Deutschen besetzt, ist ein Ort, an dem das Zwielichtige gedeiht, wo Täuschung und Verrat an der Tagesordnung sind. Petiots Andeutung, dass er der Leiter eines Fluchtnetzes sei, führt ihm in Scharen Menschen zu - Menschen, die allesamt in seiner Praxis verschwinden.`,

      speaker: ['Friedhelm Ptok', 'Gerd Wameling', 'Detlef Bierstedt', 'Peter Fitz', 'Hans-Peter Hallwachs', 'Irm Hermann', 'Horst Hiemer', 'Tilmann Kuhn', 'Frank Meier', 'Uwe Müller', 'Brigitte Röttgers', 'Paul Sonderegger', 'Friederike Wigger'],
      directed_by: "Wolfgang Bauernfeind & Martin Burckhardt",
      duration: 55
    },
  ]


  export default audios;
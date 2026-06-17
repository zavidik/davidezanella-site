// ══════════════════════════════════════════════════════
//  POSTS.JS  —  aggiungi i tuoi post qui
//
//  CAMPI OBBLIGATORI:
//    id, title, date, tags, excerpt, content
//
//  CAMPI OPZIONALI:
//    cover      → percorso immagine (es. "img/posts/cover.jpg")
//    pinned     → true = appare in Bacheca
//    eventDate  → "YYYY-MM-DD"  (solo per eventi)
//    eventTime  → "HH:MM"       (solo per eventi)
//    eventPlace → "Luogo"       (solo per eventi)
//
//  TAG DI CATEGORIA (almeno uno per post):
//    music · study · content · tech · sport
// ══════════════════════════════════════════════════════

const POSTS = [

  { id: "concerto-seveso-2026-bacheca",
    title: "Concerto a Seveso - 50 anni dal Disastro",
    date: "2026-06-17",
    cover: "img/posts/locandina-concerto-seveso-2026.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-06-28",
    eventTime: "21:00",
    eventPlace: "Seveso",
    tags: ["musica", "concerto"],
    relatedPost: {
      id: "",
      label: "📖 Leggi com'è andata:",
    },
    excerpt: "50 anni dopo il Disastro di Seveso",
    content: `
      <p>Domenica 28 giugno suonerò insieme a Elisa con la banda di Seveso.</p>
      <p>Il concerto è organizzato per ricordare il disastro avvenuto a Seveso 50 anni fa, lascio <a href="https://it.wikipedia.org/wiki/Disastro_di_Seveso" target="_blank" rel="noopener">il link a Wikipedia</a> per chi volesse approfondire.</p>
      <p>La banda di Seveso eseguirà lo stesso concerto anche il 20 giugno, come scritto nella locandina. Io ed Elisa saremo presenti solo il 28 giugno dato che il 20 saremo impegnati con <a href="banda-cusano.html">la banda di Cusano Milanino</a> (nella bacheca potete trovare le informazioni anche per quell'evento).</p>
      <p>📅 28 Giugno 2026 · 21:00<br>📍 Seveso, Chiesa S. Clemente</p>
    `
  },

  { id: "prima-messa-don-paolo-palazzolo-2026",
    title: "La prima messa di Don Paolo",
    date: "2026-06-14",
    tags: ["musica"],
    excerpt: "Stamattina ho suonato in quartetto di ottoni per la prima messa di Don Paolo, nuovo sacerdote di Palazzolo Milanese. Musica di chiesa, intonazione, accordi tenuti — un tipo di suono che amo particolarmente.",
    content: `
      <p>Stamattina prima messa di Don Paolo, giovane sacerdote di Palazzolo Milanese. Ieri sera aveva ricevuto l'ordinazione in Duomo a Milano e oggi la sua prima messa qui, nel paese in cui è cresciuto.</p>

      <p>Ho suonato in un quartetto di ottoni insieme a Luciano al basso tuba, Fulvio e Mattia alle trombe. Abbiamo accompagnato la messa insieme al coro e all'organo, intervenendo principalmente sui ritornelli. Il programma comprendeva brani classici della liturgia: <em>Alleluia a Cristo Risorto</em>, l'<em>Amen</em>, <em>I cieli narrano</em> (Salmo 18), l'ultima parte del <em>Gloria</em>, e <em>Cristo è tutto per noi</em> — quest'ultima eseguita più volte, sia all'entrata che all'uscita. Durante la comunione abbiamo invece suonato un brano solo ottoni, <em>Hai dato un cibo</em>, senza coro né organo.</p>

      <p>È il tipo di musica che mi piace particolarmente. Non perché sia più semplice — anzi — ma perché le note sono tenute, gli accordi respirano, e conta moltissimo la qualità del suono e l'intonazione. Nella musica più veloce e incalzante le note passano in fretta e certi dettagli si perdono nel flusso; qui invece ogni accordo è esposto, e si sente tutto. È un ascolto diverso, più esigente in un certo senso.</p>

      <p>Don Paolo personalmente non lo conosco — sono arrivato a Palazzolo già adolescente, quindi non ho condiviso con lui gli anni di parrocchia da ragazzo. Ma è stata comunque una bella mattinata, e a quanto pare il quartetto ha fatto una buona impressione: abbiamo ricevuto commenti positivi sia dal coro che da qualcuno tra i fedeli. Chissà che non ci siano altre occasioni per ritrovarci.</p>

      <p>Alla fine della messa, con il rinfresco all'esterno e la banda che suonava qualche brano per festeggiare, mi sono unito anch'io. Un modo piacevole per chiudere la mattinata.</p>
    `
  },

  { id: "concerto-palazzolo-vittuone-morricone-2026-bacheca",
    title: "C'era una volta Ennio Morricone - Replica a Paderno",
    date: "2026-06-14",
    cover: "img/posts/locandina-concerto-vittuone-palazzolo-morricone-2026.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-09-27",
    eventTime: "16:30",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "banda palazzolo", "concerto"],
    relatedPost: {
      id: "",
      label: "📖 Leggi com'è andata:",
    },
    excerpt: "Il concerto a tema Morricone: 2 bande e 1 coro! Nell'anfiteatro del Parco Lago Nord",
    content: `
      <p>Dopo la trasferta di giugno a Vittuone, ecco la replica a Paderno Dugnano.</p>
      <p>La collaborazione con la banda di Vittuone e il coro di Marcallo con Casone continua, nel bellissimo anfiteatro del Parco Lago Nord.</p>
      <p>Se volete sentire qualcosa in anticipo potete guardare <a href="https://youtu.be/u5Q90xXFBA4" target="_blank" rel="noopener">questo video su YouTube</a>, ma è garantito che dal vivo sarà ancora più bello. Vi aspettiamo!</p>
      <p>📅 27 Settembre 2026 · 16:30<br>📍 Paderno Dugnano, Anfiteatro Parco Lago Nord</p>
    `
  },

  { id: "concerto-vittuone-palazzolo-morricone-2026",
    title: "Una serata con Morricone al Parco Lincoln",
    date: "2026-06-14",
    cover: "img/posts/concerto-vittuone-palazzolo-morricone-2026.jpg",
    showInGallery: true,
    pinned: false,
    tags: ["musica", "banda palazzolo", "concerto"],
    excerpt: "Concerto a tema Morricone al Parco A. Lincoln di Vittuone, insieme alla Banda di Vittuone e al Coro Vis Canti di Marcallo con Casone. Una bella serata all'aperto, pubblico numeroso e qualche emozione inaspettata.",
    relatedPost: {
      id: "concerto-vittuone-palazzolo-morricone-2026-bacheca",
      label: "📌 Questo evento era stato annunciato qui:"
    },
    content: `
      <p>Ieri sera concerto al Parco A. Lincoln di Vittuone, con una formazione un po' speciale: sul palco insieme a noi c'era il Corpo Musicale Giuseppe Verdi APS-ETS di Vittuone e il Coro Vis Canti APS di Marcallo con Casone. Il tema della serata era interamente dedicato a Ennio Morricone — un programma impegnativo e bellissimo, di cui avevo già scritto nell'annuncio in bacheca.</p>

      <p>Siamo arrivati al parco verso le 19:45 per sistemarci e fare le prove del caso: qualche brano per tarare i volumi, testare i microfoni del coro, trovare l'equilibrio giusto tra le formazioni. Poco dopo le 21:00 si è iniziato. Il concerto è durato circa un'ora e mezza, bis compreso — non lunghissimo, ma denso e ben costruito.</p>

      <p>Il programma comprendeva: <em>Giù la testa</em>, <em>Here's to You</em>, <em>La Califfa</em>, <em>Moment for Morricone</em>, <em>Per un pugno di dollari</em>, <em>Playing Love</em>, <em>Angele Dei</em> e <em>Cinema Paradiso</em>. Come bis, siamo tornati su <em>Moment for Morricone</em> — e difficilmente poteva essere altrimenti.</p>

      <p>La serata era perfetta: aria fresca, niente afa, uno di quei sabati sera di inizio estate in cui stare all'aperto è un piacere. Il pubblico era numeroso e presente, si sentiva che la gente aveva voglia di esserci. Tutto sommato sono soddisfatto di come ho suonato — qualche errorino qua e là c'è sempre, la perfezione è un obiettivo mobile, però l'insieme reggeva bene e io me la sono goduta.</p>

      <p>Una delle cose che mi è rimasta più impressa della serata è stato l'incontro con il maestro della Banda di Vittuone, Ivano Dell'Acqua. È una figura che va ben oltre Vittuone: ha diretto diverse bande della zona, tra cui quella di Bresso, dove mio nonno ha suonato per tanti anni. Mio papà gliel'ha detto, si è presentato come il figlio di Cesarino — e il maestro se lo ricordava. C'è stato un momento bello: mio papà gli ha detto <em>"tu hai diretto mio padre, e stasera hai diretto mio figlio — e anche mia moglie"</em>, visto che mia mamma suona il clarinetto. Ci abbiamo provato in tutti i modi a far iniziare anche mio papà con qualche strumento, ma quella è una battaglia persa in partenza.</p>

      <p>Dopo il concerto rinfresco con qualcosa da mangiare e da bere, chiacchiere, e poi via verso casa. Da Vittuone a Paderno Dugnano ci vuole la sua mezz'ora buona, ma era una di quelle serate che vale il viaggio.</p>

      <p>Come anticipato nel post correlato in bacheca, ci sarà una <strong>replica</strong> di questo concerto a Paderno Dugnano, nell'Anfiteatro del Parco Lago Nord, il <strong>27 settembre 2026</strong>.</p>

      <p>Come faccio spesso, ho caricato il <a href="https://youtu.be/u5Q90xXFBA4" target="_blank" rel="noopener">video del concerto su YouTube</a>, questa volta però non ho registrato con microfoni e mixer, ma ho solo unito i vari video ricevuti dal pubblico.</p>
    `
  },

  { id: "esame-interconnessioni-2026",
    title: "Introduzione alle Tecnologie di Interconnessione — superato!",
    date: "2026-06-10",
    cover: "img/posts/esame-interconnessioni-2026.jpg",
    showInGallery: false,
    pinned: false,
    tags: ["lavoro", "università"],
    relatedPost: {
      id: "",
      label: ""
    },
    excerpt: "Tre parziali, fibra ottica, satelliti e reti di accesso. Voto: 28 — e sono contento così.",
    content: `
      <p>Oggi ho chiuso uno degli esami a scelta del terzo anno: <strong>Introduzione alle Tecnologie di Interconnessione</strong>.
        Non era strutturato come un esame unico, ma suddiviso in tre parziali distribuiti nel corso del semestre — una formula
        che tutto sommato ho trovato sensata, perché permette di affrontare i vari blocchi di argomenti con la testa fresca.</p>
      <p>Il <strong>primo parziale</strong>, il 18 aprile, riguardava le connessioni in fibra ottica: sia all'interno dei data center
        che verso l'esterno, quindi tutto il tema dei collegamenti ottici su scala diversa. È andato molto bene: <strong>10 punti su 12</strong>.</p>
      <p>Il <strong>secondo parziale</strong>, l'8 maggio, era dedicato alle connessioni satellitari — potenza di trasmissione,
        direttività delle antenne e analisi delle interferenze, tra cui pioggia, nubi gassose e tutto ciò che si mette di mezzo
        tra un segnale e il suo destinatario. Anche qui sono riuscito a cavarmela bene: <strong>7,04 punti su 8</strong>.</p>
      <p>Il <strong>terzo parziale</strong>, il 5 giugno, chiudeva il cerchio con le reti di accesso — l'ultimo tratto che collega
        la rete all'utente finale. Si parlava di reti PON, fibra ottica verso casa, ma anche delle vecchie connessioni su doppino
        di rame, gestione del bitrate lato fornitore e una breve introduzione all'IoT.
        Risultato: <strong>11,3 punti su 13</strong>.</p>
      <p>Il totale è stato <strong>28,34 su 33</strong> (i professori tengono tre punti di margine per assegnare la lode).
        Il voto finale è stato <strong>28</strong>. Sinceramente contento: l'esame non era
        particolarmente ostico rispetto ad altri che questo corso sa tirare fuori, però l'ho preparato bene e il risultato si vede.</p>
      <p>Devo dire che la materia mi è piaciuta. C'è qualcosa di soddisfacente nello studiare come i dati viaggiano fisicamente
        nel mondo — dalla fibra dentro un data center fino al satellite in orbita, passando per il cavo che arriva a casa tua.
        Per chi studia ingegneria informatica come me, è uno di quegli esami che ti ricorda che dietro ogni connessione c'è
        della fisica vera, e non solo software.</p>
    `,
  },

  { id: "saggio-seconda-elementare-2026",
    title: "Viaggio nella storia della MUSICA - Saggio finale",
    date: "2026-06-10",
    cover: "img/posts/saggio-seconda-elementare-2026.jpg",
    pinned: false,
    tags: ["musica", "lavoro"],
    relatedPost: {
      id: "",
      label: "📌 Questo evento era stato annunciato qui:"
    },
    excerpt: "Una delle mie prime esperienze come ''tecnico audio''.",
    content: `
    <p>Se avete letto il post sul saggio della <a href="scuola-che-sbanda.html">Scuola che sBanda</a>, sapete già che in quell'occasione ho gestito l'audio con il <em>DoReMixer</em>
      — il nostro Behringer X Air XR18, di proprietà dei <a href="doremitici.html">DoReMitici</a>. Sto piano piano imparando a usarlo,
      e ogni occasione in cui posso metterci le mani è preziosa.</p>
    <p>Qualche giorno dopo mi è capitata un'altra occasione, ancora più raccolta: Lara — un'insegnante della Scuola che sBanda e che durante l'anno ha portato avanti un altro progetto
      musicale con le classi seconde elementari — mi ha chiesto di gestire l'impianto audio per il loro saggio di fine anno.
      Il saggio si chiama <strong>Viaggio nella storia della musica</strong>, e il nome dice già tutto: i bambini, armati di copione e di grande entusiasmo,
      hanno guidato il pubblico attraverso i secoli, dai canti gregoriani fino alla musica contemporanea, alternando letture e momenti musicali con body percussion
      e piccoli strumenti a percussione — triangoli, tamburelli, legnetti, maracas, tubi sonori.</p>
    <p>Il mio compito tecnico era ridotto all'osso: gestire il microfono dei presentatori e far partire la riproduzione dei brani che facevano da sottofondo
      mentre i bambini ci suonavano sopra. Niente di complicato, eppure — come per l'altro saggio — già che ero lì ho filmato tutto e registrato l'audio,
      così è venuto fuori anche un video ricordo del progetto. Se siete curiosi di vedere com'è andata, l'ho caricato su YouTube: <a href="https://youtu.be/TeFNr-ODGsI" target="_blank" rel="noopener">clicca qui!</a></p>
    <p>È anche un progetto che rientra nell'orbita della <a href="banda-palazzolo.html">Corpo Musicale "Santa Cecilia 1900" APS di Palazzolo Milanese</a>,
      sempre nell'ottica di avvicinare i più piccoli alla musica. E devo dire che vedere bambini di seconda elementare concentratissimi sui loro tubi sonori
      fa sempre il suo effetto.</p>
    <p>A fine giornata Lara ha voluto darmi un compenso — che non avevo né chiesto né messo in conto. Ho provato a rifiutare, ma ha insistito, e alla fine
      ho ceduto. È stata una cosa piccola, quasi simbolica, però mi ha fatto pensare: forse è la prima volta che vengo pagato per qualcosa legato all'audio.
      Una "prima esperienza lavorativa" tra mille virgolette, ma pur sempre qualcosa.</p>
    <p>E in effetti il tecnico del suono è un mestiere che non mi dispiacerebbe approfondire, perché tocca esattamente i due mondi che sento miei:
      da un lato c'è tutta la parte ingegneristica — fisica delle onde, acustica degli ambienti, elettronica — dall'altro c'è la musica.
      Quando si lavora sul serio, non è per nulla banale: il sound check cambia non appena entra il pubblico, ogni sala si comporta diversamente,
      e fare in modo che il suono arrivi bene a chi ascolta è una competenza vera. Per ora sono agli inizi, ma l'idea di crescere in questa direzione
      non mi dispiace affatto.</p>
    `,
  },

  { id: "festival-del-pandino-2026-bacheca",
    title: "Festival del Pandino a Pandino",
    date: "2026-06-10",
    cover: "img/posts/logo-festival-del-pandino.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-06-20",
    eventTime: "12:30",
    eventPlace: "Pandino",
    tags: ["musica", "servizio"],
    relatedPost: {
      id: "",
      label: "📖 Leggi com'è andata:"
    },
    excerpt: "Panda a Pandino",
    content: `
      <p>Mi è stato chiesto di partecipare al festival della panda.</p>
      <p>Sabato 20 giugno suonerò insieme al gruppo <a href="https://www.instagram.com/bubblyandblues_official" target="_blank" rel="noopener">Bubbly & Blues</a> a questo festival in cui ci saranno centinaia di macchine Panda.</p>
      <p>Suoneremo dalle 12:30 alle 15:30 in un grandissimo campo in cui tutti i partecipanti parcheggeranno la loro panda.</p>
      <p>Per maggiori informazioni sul festival vi lascio il link alla pagina Instagram: <a href="https://www.instagram.com/pandaapandino" target="_blank" rel="noopener">@pandaapandino</a></p>
      <p>Se hai una panda non puoi mancare!</p>
      <p>📅 20 Giugno 2026 · 12:30<br>📍 Pandino</p>
      <img src="img/posts/locandina-festival-del-pandino-2026.jpg" alt="Descrizione dell'immagine">
    `
  },

  { id: "concerto-vittuone-palazzolo-morricone-2026-bacheca",
    title: "C'era una volta Ennio Morricone",
    date: "2026-06-10",
    cover: "img/posts/locandina-concerto-vittuone-palazzolo-morricone-2026.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-06-13",
    eventTime: "21:00",
    eventPlace: "Vittuone",
    tags: ["musica", "banda palazzolo", "concerto"],
    relatedPost: {
      id: "concerto-vittuone-palazzolo-morricone-2026",
      label: "📖 Leggi com'è andata:"
    },
    excerpt: "Il concerto a tema Morricone: 2 bande e 1 coro!",
    content: `
      <p>La Banda di Palazzolo Milanese va in trasferta!</p>
      <p>Una collaborazione con un'altra banda e un coro, per suonare un concerto intero a tema Ennio Morricone.</p>
      <p>La collaborazione è con la banda di Vittuone e il coro di Marcallo con Casone.</p>
      <p>Come si legge nella locandina faremo una replica dello stesso concerto qui a Paderno Dugnano, nel Parco Lago Nord, ma bisognerà aspettare la fine di settembre.</p>
      <p>Conviene venire a sentire questa domenica a Vittuone, vi aspettiamo!</p>
      <p>📅 13 Giugno 2026 · 21:00<br>📍 Vittuone, Parco A. Lincoln </p>
    `
  },

  { id: "saggio-scuola-che-sbanda-2026",
    title: "Saggio di fine anno – La Scuola che sBanda",
    date: "2026-05-30",
    cover: "img/posts/saggio-scuola-che-sbanda-2026.jpg",
    pinned: false,
    tags: ["musica", "la scuola che sbanda"],
    relatedPost: {
      id: "saggio-scuola-che-sbanda-2026-bacheca",
      label: "📌 Questo evento era stato annunciato qui:"
    },
    excerpt: "Tema Shrek, travestimenti, impianto audio da montare, niente cena e un pigiama da ciuchino. Il saggio di fine anno della Scuola che sBanda raccontato dall'interno.",
    content: `
      <p>Il saggio di fine anno della <a href="scuola-che-sbanda.html">Scuola che sBanda</a> è andato, ed è andato bene. Anzi, meglio che bene — sono uscito dalla palestra dell'oratorio di Palazzolo Milanese soddisfatto, sudato e con addosso un pigiama da asino. Ma per capire come ci sono arrivato, bisogna partire dal pomeriggio.</p>

      <h3>Una giornata lunga</h3>
      <p>Il saggio era alle 21, ma la mia giornata è cominciata subito dopo pranzo. Al mattino avevo già iniziato a mettere insieme tutto quello che dovevo portare: il mixer, i microfoni, i cavi, il MacBook per registrare, il costume, le parti musicali da distribuire. Prima uscita nel pomeriggio verso le tre, con la prima tappa in sala banda per stampare le parti dell'ultimo brano — quello che avremmo suonato noi insegnanti a chiusura della serata. Poi, purtroppo, il ritorno a casa perché avevo dimenticato una delle borse. Avanti e indietro, tempo perso, niente di grave ma abbastanza per farmi sentire già un po' in ritardo su tutto.</p>

      <p>Alle 16 ero finalmente in palestra, e da lì non me ne sono più andato fino a sera. Niente cena, niente pausa — solo allestimento, prove e poi il saggio. Solo dopo il saggio, ho recuperato il pasto saltato. Ma questa è la fine della storia, e ci arriviamo.</p>

      <h3>L'impianto audio</h3>
      <p>Quest'anno ho voluto fare le cose un po' più sul serio lato audio rispetto alle edizioni precedenti. Oltre ai soliti microfoni per i presentatori, ho aggiunto due microfoni panoramici per catturare meglio il suono dell'ambiente, e ho collegato al mixer anche la tastiera — serviva per l'Hallelujah, il brano in cui i bambini cantavano con l'accompagnamento suonato live da Andrea. L'allestimento ha richiesto parecchio tempo, anche per colpa di un cavo XLR difettoso che non trasmetteva segnale: un po' di debugging sul momento, qualche prova, finché tutto non ha cominciato a funzionare come doveva. Non è il tipo di problema che ti fa perdere la calma, ma di sicuro non aiuta quando hai ancora mezza palestra da sistemare.</p>

      <h3>Il tema: Shrek</h3>
      <p>Il tema scelto per quest'anno era Shrek, e una delle idee più divertenti è stata quella di far travestire ogni insegnante da un personaggio del film — sia per fare la sorpresa ai bambini quando sarebbero arrivati, sia per dare allo spettacolo un sapore diverso dal solito. Nel pomeriggio, mentre io mi occupavo dell'audio, Lara e Diego allestivano la scenografia: dei grandi cartelloni a tema realizzati dalla mamma di Lara, con disegni dedicati ai personaggi, che hanno trasformato la palestra dell'oratorio in qualcosa di decisamente più shrekiano del solito.</p>

      <p>La struttura del saggio seguiva quella del film: si è aperto con un bambino che leggeva dal libro la storia della principessa Fiona — la maledizione, la trasformazione notturna in orco — finché la lettura non è stata "interrotta" dall'entrata in scena di Shrek. Da lì è partito il primo brano, <em>All Star</em>, eseguito dagli Esploratori con tubi musicali e bacchette. Poi sono arrivati tre brani degli Eroi con i loro strumenti, un brano coreografico con pianoforte live suonato da Andrea, e altri brani degli Esploratori delle due scuole — tra cui <em>Best Years of Our Lives</em>, eseguito con bacchette e percussioni. A chiudere, il brano degli insegnanti tutti insieme.</p>

      <p>La palestra era piena come ogni anno: circa 110 allievi, più due genitori a testa, più nonni e qualche parente. Una bella folla, insomma, e il risultato è che la temperatura della palestra è salita rapidamente a livelli da sauna. Per fortuna c'era stato un temporale che aveva rinfrescato l'aria, e una corrente discreta girava nella palestra per tutta la sera. Ho sudato, ma meno del previsto — e visto che indossavo un pigiama in pile, era una questione non secondaria.</p>

      <h3>Ciuchino</h3>
      <p>Già, il costume. Avevo scelto uno di quei pigiami interi in pile a tema asino: cappuccio con la testa di ciuchino completa di orecchie, codina sul retro, e quattro zoccoli — uno per mano, uno per piede. Una scelta che in una palestra a 28 gradi di fine maggio potrebbe sembrare discutibile, ma che sul piano estetico era impeccabile. Mi sono calato nel personaggio con grande dedizione.</p>

      <h3>La gara delle scatolette</h3>
      <p>Una delle idee più riuscite della serata è stata di Ilaria, l'insegnante di flauto: invece di raccogliere semplicemente delle offerte volontarie, abbiamo trasformato la cosa in un concorso. Ogni insegnante aveva la sua scatolina personalizzata con il disegno del personaggio che interpretava, e il pubblico poteva "votare" il travestimento preferito mettendo i soldi nella scatolina corrispondente — più si metteva, più si votava. Un modo per raccogliere qualcosa per il progetto e allo stesso tempo tenere alta l'attenzione del pubblico anche dopo la fine dello spettacolo.</p>

      <p>Mi sono classificato quinto, il che considero un risultato onorevole date le circostanze. Ha vinto, meritatamente, la scatolina di Shrek e Fiona — Lores e Renato si erano travestiti da protagonisti del film, e battere i protagonisti era oggettivamente difficile. Quinto posto, comunque. Sono soddisfatto.</p>

      <h3>Com'è andata</h3>
      <p>Il saggio è andato molto bene, e ne sono contento davvero. Il brano finale degli insegnanti non è stato eseguito alla perfezione — e lo dico io che sono il primo a essere pignolo su queste cose — ma con il caldo, i travestimenti e l'energia della serata, eravamo tutti soddisfatti lo stesso. Certe sere il risultato non si misura solo con la pulizia dell'esecuzione.</p>

      <p>Ho montato il video completo del saggio, se vuoi farti un'idea di com'è andata: <a href="https://youtu.be/YNwoImvcq78?si=dKgJKIV4pxD3JbVr" target="_blank" rel="noopener">puoi guardarlo qui su YouTube</a>. Nella stessa playlist trovi anche i saggi degli anni precedenti — il saggio di Natale e quello di fine anno scorso — per chi volesse fare un confronto o semplicemente rivedersi: <a href="https://youtube.com/playlist?list=PL1o1uYsfqEiNMoUeWcZdVanJ-cvprRj1a&si=ubxqBfNovMM_habf" target="_blank" rel="noopener">playlist completa</a>.</p>

      <p>È un bel progetto, la <a href="scuola-che-sbanda.html">Scuola che sBanda</a>. Siamo un gruppo di insegnanti giovani, e riusciamo a prenderlo sul serio senza smettere di divertirci — che è probabilmente la combinazione giusta per farlo funzionare. Tanti bambini non continueranno con la musica, è normale e ci sta, ma se anche solo qualcuno va avanti è già un successo più che sufficiente.</p>

      <p>Dopodiché, passata la mezzanotte, tutti gli insegnanti si sono ritrovati al McDonald's a recuperare la cena abbondantemente saltata. Fine della serata, decisamente meritata.</p>
    `,
  },

  { id: "concerto-anfiteatro-la-cava-2026",
    title: "Fusione all'Anfiteatro La Cava",
    date: "2026-05-25",
    cover: "img/posts/concerto-palazzolo-cava-2026.jpg",
    pinned: false,
    tags: ["musica", "banda palazzolo", "concerto"],
    relatedPost: {
      id: "concerto-palazzolo-cava-2026-bacheca",
      label: "📌 Questo evento era stato annunciato qui:"
    },
    excerpt: "Sole a picco, trentadue gradi, sudore sul bocchino del trombone e gelato alla fine. Il resoconto del concerto della Banda di Palazzolo all'Anfiteatro La Cava — terzo anno consecutivo a fonderci.",
    content: `
      <p>Sabato 24 maggio sono tornato all'Anfiteatro La Cava, nel Parco Lago Nord di Paderno Dugnano, per il concerto della <a href="banda-palazzolo.html">Banda di Palazzolo Milanese</a>. Terzo anno consecutivo in questa location. Bellissima, per carità — non tutte le città hanno un posto così. Ma il sole nel pomeriggio di fine maggio non perdona.</p>

      <h2>La mattina: mixer, microfoni e sudore anticipato</h2>
      <p>Sono arrivato all'anfiteatro già di mattina insieme a Fabio, un altro musicista della banda, per preparare il palco. La parte che mi stava più a cuore era il setup audio: per la prima volta ho registrato il concerto usando i microfoni e il mixer dei <a href="doremitici.html">DoReMitici</a>, invece del mio solito Shure MV88+.</p>
      <p>Lo Shure è comodissimo — si collega direttamente all'iPhone, lo porto ovunque — ma ha i suoi limiti. Soprattutto sui bassi: si sentiva bene, ma mancava corpo. Questa volta volevo provare a fare le cose con più cura, e insieme a Fabio abbiamo montato tutto con calma. Il sole già picchiava forte alle dieci di mattina.</p>

      <h2>Il pomeriggio: junior band, banda, e 32°C</h2>
      <p>Sono tornato a casa, ho pranzato, e verso le tre sono uscito di nuovo per il ritrovo pre-concerto. Prima della banda suonava la <em>junior band</em>, e anche lì mi hanno coinvolto — come spesso succede, gli ottoni gravi scarseggiano tra i più giovani, quindi un trombone in più fa sempre comodo.</p>
      <p>Il concerto è iniziato alle quattro e mezza. Quattro e mezza di un sabato di fine maggio, sotto il sole diretto, con le temperature al culmine della giornata. Crema solare applicata, cappellino con visiera fornito dalla banda, e una dose abbondante di rassegnazione.</p>
      <p>Non sono contentissimo di come ho suonato, e non me ne faccio un dramma: con quel caldo faccio davvero fatica. Il bocchino del trombone scivola per il sudore, le labbra si stancano prima. Dopo pochi brani ero già a pezzi. Nel complesso però la banda ha suonato bene — i complimenti del pubblico e della sindaca presente lo confermano — e questo è quello che conta.</p>

      <h2>Il gelato dalla Luna</h2>
      <p>Dopo il concerto, la banda ha offerto il gelato. Non un gelato qualunque: quello del <strong>Gelato dalla Luna</strong>, una gelateria di Paderno che impiega e supporta persone con disabilità. Un bel modo per chiudere il pomeriggio, mentre smontavo microfoni, mixer e PC con le mani ancora sudate.</p>

      <h2>Il video (quasi)</h2>
      <p>Avevo portato la macchina fotografica per filmare il concerto, ma durante la giornata ho scoperto che c'era già un signore — appassionato di bande, gira per diverse città a documentarle — che si era occupato lui di riprendere tutto. Così ho potuto passare la fotocamera a mio papà, che l'ha usata per il suo scopo naturale: fare foto.</p>
      <p>Il video arriverà quando il signore mi manderà il file. A quel punto monterò tutto con l'audio che ho registrato io, e spero che si senta finalmente quella differenza di qualità che cercavo.</p>
      <h3>Aggiornamento! Il video è arrivato, lo trovi<a href="https://youtu.be/Bmlzw7CcmCQ" target="_blank" rel="noopener"> qui su YouTube</a></h3>

      <h2>Una riflessione sulla location</h2>
      <p>È il terzo anno che facciamo questo concerto all'Anfiteatro La Cava, e ogni volta la conversazione post-concerto tra i musicisti si concentra sullo stesso tema: il caldo. La location è davvero bella, ma le quattro e mezza di fine maggio è probabilmente l'orario peggiore possibile. Spero che in futuro si riesca a spostare il concerto in serata, magari dopo cena, quando la temperatura scende e anche la qualità sonora — per tutti, pubblico e musicisti — ne guadagna.</p>
      <p>La sera ero distrutto e non soddisfatto di come ho suonato — il caldo ha sicuramente fatto la sua parte.</p>
    `,
  },

  { id: "raduno-bandistico-cogliate-2026",
    title: "Raduno bandistico a Cogliate — com'è andata",
    date: "2026-05-19",
    cover: "img/posts/raduno-bandistico-cogliate-2026.jpg",
    tags: ["musica", "banda palazzolo", "servizio"],
    relatedPost: {
      id: "raduno-bandistico-cogliate-2026-bacheca",
      label: "📌 Questo evento era stato annunciato qui:"
    },
    excerpt: "Cinque bande, sole di maggio, marcette per le vie di Cogliate e un ottimo rinfresco. Un pomeriggio leggero e piacevole.",
    content: `
      <p>Domenica 17 maggio siamo andati a Cogliate per il raduno bandistico organizzato in occasione del centenario della loro banda. Cinque bande in tutto, ognuna partita da un punto diverso della città sfilando per le proprie vie, per poi convergere tutte insieme nella piazza centrale.</p>

      <h4>La sfilata</h4>
      <p>La <a href="banda-palazzolo.html">Banda di Palazzolo</a> è arrivata per prima in piazza — e poi abbiamo aspettato, sotto un sole di maggio che quando usciva dalle nuvole picchiava davvero. Niente di paragonabile al luglio, ma dopo un po' di sfilata con lo strumento in mano si fa sentire.</p>

      <h4>Le esibizioni</h4>
      <p>Una volta arrivate tutte le bande, ciascuna ha suonato due brani a turno facendo due giri. Noi abbiamo aperto con <em>Symbol of Freedom</em> e chiuso con <em>YMCA</em> — che funziona sempre, è ormai entrata nella cultura collettiva e il pubblico la conosce e la ama.</p>
      <p>Le altre bande hanno fatto scelte molto diverse. La <strong>Banda di Cogliate</strong> si è distinta per qualità musicale — brani di livello superiore, eseguiti bene. Al secondo posto metterei la <strong>Banda di Camnago</strong>. La <strong>Banda di Misinto</strong>, pur contando pochi elementi, ha avuto il merito di distinguersi con scelte coraggiose: <em>Fireworks</em> di Katy Perry e <em>Smoke on the Water</em>. Quest'ultima non ha reso benissimo con un organico ridotto, ma apprezzo quando una banda ci mette un po' di personalità nel programma.</p>
      <p>Noi di Palazzolo? Direi terzi — onestamente. La <strong>Banda di Usmate</strong> e quella di Misinto a seguire.</p>
      <p>Ovviamente è una classifica personale, fatta in base a quello che ho sentito e puramente goliardica.</p>

      <h4>Il gran finale</h4>
      <p>Dopo le esibizioni singole, tutte e cinque le bande si sono compattate per suonare insieme la marcia <em>Centenario</em>, composta appositamente dal maestro di Cogliate per festeggiare i cento anni della banda. Il pubblico ha applaudito e ha chiesto ancora — e dato che con cinque bande diverse non è detto che tutti abbiano gli stessi spartiti, abbiamo chiuso con l'unico brano che obbligatoriamente tutte le bande conoscono: l'<strong>Inno di Mameli</strong>.</p>

      <h4>Il rinfresco</h4>
      <p>A evento concluso ci siamo spostati nell'oratorio per il rinfresco, e devo dire che l'hanno organizzato bene: diversi gazebo con zona salato, zona dolce, zona bevande — e birra alla spina. Un finale degno di una bella giornata.</p>
      <p>L'evento nel complesso è durato circa due ore, dalle tre e quaranta alle sei circa. Il formato leggero ha funzionato benissimo — meglio di certi eventi che cercano di fare le cose in grande e alla fine stancano. Questo era semplice, piacevole e ben calibrato. Promosso. 🎶</p>
    `
  },

  { id: "concerto-cusano-2-giugno-2026-bacheca",
    title: "ANNULLATO Concerto per la Festa della Repubblica — Banda di Cusano Milanino",
    date: "2026-05-16",
    cover: "",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-06-02",
    eventTime: "16:00",
    eventPlace: "Cusano Milanino",
    tags: ["musica", "banda cusano", "concerto"],
    excerpt: "Concerto per la Festa della Repubblica — Banda di Cusano Milanino",
    content: `
      <p>C'è poco da dire, un bel concerto nel giorno in cui si festeggia la festa della Repubblica italiana.</p>
      <p>L'ingresso è libero e aperto a tutti.</p>
      <p>📅 2 Giugno 2026 · ore 16:00<br>📍 Cusano Milanino</p>
      <h3>
      <p>A causa del maltempo il concerto è stato annullato e la cerimonia del 2 giungo si è svolta in sala consiliare.</p>
      </h3>
    `
  },

  { id: "saggio-scuola-che-sbanda-2026-bacheca",
    title: "Saggio di fine anno — La Scuola che sBanda",
    date: "2026-05-16",
    cover: "img/posts/locandina-saggio-scuola-che-sbanda-2026.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-05-28",
    eventTime: "21:00",
    eventPlace: "Palazzolo Milanese",
    tags: ["musica", "la scuola che sbanda"],
    relatedPost: {
      id: "saggio-scuola-che-sbanda-2026",
      label: "📖 Leggi com'è andata:"
    },
    excerpt: "Il saggio di fine anno de La Scuola che sBanda — tema: Shrek. Vieni a sentire i nostri piccoli musicisti!",
    content: `
      <p>Giovedì 28 maggio si tiene il <strong>saggio di fine anno</strong> del progetto <a href="scuola-che-sbanda.html">La Scuola che sBanda</a>, il percorso con cui la <a href="banda-palazzolo.html">Banda di Palazzolo Milanese</a> avvicina i bambini delle elementari alla musica bandistica.</p>

      <p>Quest'anno il tema è… <strong>Shrek</strong>! 🟢</p>

      <p>Sul palco ci saranno due gruppi:</p>
      <ul>
        <li><strong>Gli Esploratori</strong> — i bambini di terza elementare al loro primo anno: suoneranno il loro primo brano con lo strumento, accompagnato da momenti coreutici e percussionistici.</li>
        <li><strong>Gli Eroi</strong> — i veterani, con già un anno o più di percorso: tre brani strumentali e qualche sorpresa finale.</li>
      </ul>

      <p>A chiudere la serata, come da tradizione, tutti i maestri sul palco insieme per un brano — ovviamente a tema Shrek. E sì, ci sarà qualche travestimento. 🤫</p>

      <p>L'ingresso è libero e aperto a tutti. Vi aspettiamo!</p>
      <p>📅 28 Maggio 2026 · ore 21:00<br>📍 Palestra dell'oratorio di Palazzolo Milanese, Viale Bagatti 2</p>
    `
  },

  { id: "raduno-bandistico-cogliate-2026-bacheca",
    title: "Raduno bandistico a Cogliate - Banda di Palazzolo",
    date: "2026-05-16",
    cover: "",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-05-17",
    eventTime: "15:15",
    eventPlace: "Cogliate",
    tags: ["musica", "banda palazzolo", "servizio"],
    relatedPost: {
      id: "raduno-bandistico-cogliate-2026",
      label: "📖 Leggi com'è andata:"
    },
    excerpt: "Tante bande a Cogliate",
    content: `
      <p>Domenica 17 maggio c'è un raduno bandistico a Cogliate. Non so di preciso come sarà organizzato, io sarà lì insieme alla <a href="banda-palazzolo.html">Banda di Palazzolo</a>.</p>
      <p>Essendo un raduno ci saranno altre bande musicali che suoneranno e alla fine faremo sicuramente qualcosa tutti insieme!</p>
      <p>La nostra partenza sarà da via Marconi angolo via Pascoli e il termine della manifestazione è previsto intorno alle 18:00. Sarà una bella 
      giornata di Sole e per chi verrà a sentire sarà perfetto per una bella passeggiata con un po' di musica!</p>
      <p>📅 17 Maggio 2026 · ore 15:15<br>📍 via Marconi angolo Via Pascoli, Cogliate</p>
    `
  },

  { id: "junior-band-palazzolo-civil-week-2026",
    title: "Prima volta con l'euphonium — Junior Band a Paderno Dugnano",
    date: "2026-05-16",
    cover: "img/posts/junior-band-palazzolo-civil-week-2026.jpg",
    tags: ["musica", "banda palazzolo", "junior band", "concerto"],
    excerpt: "Per la Civil Week di Paderno Dugnano ho suonato con la Junior Band della Banda di Palazzolo — e per la prima volta in concerto ho imbracciato l'euphonium.",
    content: `
      <p>Il 9 maggio sono andato ad aiutare la <a href="banda-palazzolo.html">Junior Band della Banda di Palazzolo Milanese</a> per un concerto all'aperto davanti alla Biblioteca Tilane di Paderno Dugnano, in occasione della <strong>Civil Week</strong> — la settimana in cui le associazioni del territorio si animano e si mostrano alla città.</p>

      <h4>Prima volta con l'euphonium</h4>
      <p>La novità per me era lo strumento: ho suonato con l'<strong>euphonium</strong>, e questa è stata la mia prima volta in concerto con questo strumento. Il repertorio non era tecnicamente proibitivo, ma la sfida c'era lo stesso — sono abituato alla coulisse del trombone, e ritrovarsi con i pistoni in mano è un'altra storia. Le dita non sempre hanno seguito le intenzioni, ma l'importante è esserci stato.</p>
      <p>Non ho intenzione di studiare l'euphonium seriamente — per ora tutta la mia concentrazione va al trombone — però ammetto che le parti in banda sono sempre molto belle. Chissà, magari qualche altra occasione si presenterà. 🎶</p>

      <h4>Il programma</h4>
      <p>Il repertorio spaziava parecchio: <em>A Joyful Journey</em>, <em>Terracotta Warriors</em>, <em>Darklands March</em>, <em>Moscow 1941</em>, <em>Pirates of the Caribbean</em> e altri brani. Un programma vario e adatto a un concerto all'aperto.</p>

      <h4>Il finale migliore</h4>
      <p>Dopo il concerto la banda ha offerto a tutti un gelato 🍦 — il modo perfetto per chiudere un pomeriggio di musica in una bella giornata di maggio.</p>

      <h4>Ascolta la banda</h4>
      <p>Se vuoi seguire i concerti della <a href="banda-palazzolo.html">Banda di Palazzolo Milanese</a> e tutti i suoi progetti, puoi tenere d'occhio la mia playlist YouTube dedicata: <a href="https://youtube.com/playlist?list=PL1o1uYsfqEiNMoUeWcZdVanJ-cvprRj1a&si=E7f1Jjvo0TrGmrY0" target="_blank" rel="noopener">Banda di Palazzolo — playlist</a>.</p>
    `
  },

  { id: "concerto-mamma-cusano-2026",
    title: "Concerto per la Festa della Mamma 2026 — com'è andata",
    date: "2026-05-16",
    cover: "img/posts/concerto-mamma-cusano-2026.jpg",
    showInGallery: true,
    tags: ["musica", "banda cusano", "concerto"],
    relatedPost: {
      id: "concerto-mamma-cusano-2026-bacheca",
      label: "📌 Questo evento era stato annunciato qui:"
    },
    excerpt: "Un bel pomeriggio di musica al Teatro Papa Giovanni XXIII con la Banda di Cusano Milanino: dai brani dedicati alle mamme all'assaggio del concerto d'estate.",
    content: `
      <p>Il 10 maggio, come ormai tradizione degli ultimi anni, la <a href="banda-cusano.html">Banda di Cusano Milanino</a> ha celebrato la Festa della Mamma con il suo concerto al Teatro Papa Giovanni XXIII. Il pubblico di Cusano è sempre caloroso e affezionato, e anche questa volta non ha deluso.</p>

      <h4>Un repertorio tutto per lei</h4>
      <p>Il filo conduttore era naturalmente la mamma — e il programma lo ha onorato alla grande. Tra i brani più applauditi: <em>Fatti mandare dalla mamma</em> di Gianni Morandi, <em>Viva la Mamma</em> di Bennato, la classicissima <em>Mamma</em> di Bixio e l'immancabile <em>Mamma Mia</em> degli ABBA. Un piccolo omaggio anche a Gino Paoli, scomparso di recente, con <em>Sapore di Sale</em>.</p>
      <p>Molti degli arrangiamenti portano la firma del nostro maestro Stefano Bertoni — il cui tocco si riconosce sempre.</p>

      <h4>Un assaggio dell'estate</h4>
      <p>Nel mezzo del programma, qualche brano di colonne sonore di cartoni animati ha fatto drizzare le orecchie ai più attenti: non era un caso. È un piccolo antipasto del <strong>Concerto d'Estate del 20 giugno</strong>, che sarà interamente dedicato ai cartoni animati. È il concerto di punta dell'anno, e le aspettative sono altissime.</p>
      <p>Giusto per stuzzicare un po': tra i brani ci sarà un medley scritto da Stefano con <em>Tiger Man</em>, <em>Mila e Shiro</em>, <em>Ufo Robot Goldrake</em>... e non solo. 🤫</p>

      <h4>Rivivi il concerto</h4>
      <p>Nei prossimi mesi usciranno su YouTube alcuni video dei brani eseguiti. Puoi seguire il canale ufficiale della <a href="https://www.youtube.com/@corpomusicales.cecilia-cus1333" target="_blank" rel="noopener">Banda di Cusano Milanino - Corpo Musicale S. Cecilia</a> — oppure il mio canale personale, dove pubblicherò alcuni spezzoni registrati direttamente dal mio leggio: <a href="https://www.youtube.com/@davide.zanella" target="_blank" rel="noopener">@davide.zanella</a>.</p>
    `
  },

  { id: "doremitici-secondo-incontro-scuola-fisogni",
    title: "Secondo incontro alla scuola primaria Fisogni",
    date: "2026-04-21",
    cover: "img/posts/doremitici-secondo-incontro-scuola-fisogni.jpg",
    pinned: false,
    eventDate: "2026-04-20",
    eventTime: "14:30",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "doremitici"],
    excerpt: "Secondo incontro con i DoReMitici alla scuola primaria Fisogni di Palazzolo Milanese, con la classe 4C. Parte del progetto \"Un Pentagramma di solidarietà\", nell'ambito del bando Ri-Generare Legami.",
    content: `
      <p>
        Ieri pomeriggio, con alcuni componenti del gruppo DoReMitici, abbiamo tenuto il secondo
        incontro con i bambini della classe 4C presso la scuola primaria Fisogni di Palazzolo Milanese.
      </p>
  
      <h2>Il contesto: bando Ri-Generare Legami</h2>
      <p>
        Per l'anno 2025–2026 i DoReMitici hanno partecipato al bando
        <a href="https://www.ambitogarbagnatemilanese.it/servizi/notizie/notizie_fase02.aspx?ID=6074" target="_blank" rel="noopener noreferrer">Ri-Generare Legami</a>,
        con un progetto chiamato <strong>"Un Pentagramma di solidarietà"</strong>, il cui obiettivo
        è portare la musica al maggior numero di persone possibile.
      </p>
      <p>
        Ci siamo concentrati in particolare su anziani e bambini: con i primi abbiamo suonato in
        alcune <a href="https://davidezanella.altervista.org/wp-content/DoReMitici/events/2025-12-13_Concerto_alla_RSA_Bernardelli/index.php" target="_blank" rel="noopener noreferrer">RSA</a>, 
        portando momenti di serenità e un po' di variazione nella routine della casa di
        riposo. Con i bambini l'obiettivo è diverso: far conoscere loro la musica e gli strumenti
        della banda, così che possano scoprire un interesse verso questo mondo e magari coltivare
        una passione che non sapevano di avere.
      </p>
      <p>
        A Paderno Dugnano, e in particolare nella frazione di Palazzolo Milanese, il
        <a href="banda-palazzolo.html">Corpo Musicale Santa Cecilia 1900</a> è già molto attivo
        nelle scuole con progetti simili — tra cui
        <a href="scuola-che-sbanda.html">La Scuola che sBanda</a>, di cui faccio parte, svolto in
        altre due scuole elementari della città. Essendo Paderno Dugnano abbastanza grande, però,
        alcune scuole non sono ancora state raggiunte. Grazie a questo bando, come DoReMitici siamo
        riusciti a portare un'introduzione al mondo della musica anche a questi bambini.
      </p>
  
      <h2>L'incontro</h2>
      <p>
        L'incontro è durato due ore e ha toccato diversi aspetti della musica bandistica.
        Abbiamo presentato gli strumenti della banda e spiegato come vengono classificati
        (fiati, ottoni, legni, percussioni…), il ruolo del direttore — che permette a tante
        persone di suonare insieme rimanendo in sincronia — e le differenze di suono e timbro
        tra i vari strumenti, imparando a riconoscerli all'ascolto.
      </p>
      <p>
        I bambini hanno partecipato con entusiasmo: a turno hanno provato a dirigere i loro
        compagni, sperimentando dinamiche e variazioni di velocità. Tutti insieme abbiamo svolto
        anche due brevi esercizi di solfeggio.
      </p>
  
      <h2>La risposta dei bambini e i prossimi passi</h2>
      <p>
        Al termine dell'incontro, bambini e maestre si sono mostrati entusiasti e ci hanno
        invitato a tornare per incontri successivi. Fa davvero piacere, e ci fa capire che c'è
        una buona prospettiva per avviare progetti più duraturi anche in questa scuola.
      </p>
      <p>
        Per il momento, nell'ambito di questo bando, ci resta un ultimo incontro con un'altra
        classe, fissato per il 9 maggio. Per il futuro non c'è ancora nulla di definito, ma
        l'accoglienza è stata così calorosa da lasciarci ben sperare.
      </p>
      <p>Lascio qui il <a href="https://davidezanella.altervista.org/wp-content/DoReMitici/events/2026-04-20_Secondo_incontro_scuola_Fisogni/index.php" target="_blank" rel="noopener noreferrer">link all'articolo sul sito dei DoReMitici</a></p>
    `
  },

  { id: "concerto-mamma-cusano-2026-bacheca",
    title: "Concerto per la Festa della Mamma — Banda di Cusano Milanino",
    date: "2026-04-16",
    cover: "img/posts/locandina-concerto-mamma-cusano-2026.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-05-10",
    eventTime: "16:30",
    eventPlace: "Cusano Milanino",
    tags: ["musica", "banda cusano", "concerto"],
    relatedPost: {
      id: "concerto-mamma-cusano-2026",
      label: "📖 Leggi com'è andata:"
    },
    excerpt: "Concerto per la Festa della Mamma — Banda di Cusano Milanino",
    content: `
      <p>Vi aspettiamo al <strong>Concerto per la Festa della Mamma</strong> della Banda di Cusano Milanino!</p>
      <p>Fatevi una bella passeggiata primaverile all'aperto, magari con un gelato 🍦 e poi con della bella musicain teatro!</p>
      <p>L'ingresso è libero e aperto a tutti.</p>
      <p>📅 10 Maggio 2026 · ore 16:30<br>📍 Teatro Papa Giovanni XXIII, Viale G. Matteotti 57, Cusano Milanino</p>
    `
  },

  { id: "gita-banda-palazzolo-pergine-2026",
    title: "Gita della banda a Pergine Valsugana",
    date: "2026-04-03",
    cover: "img/posts/gita-banda-palazzolo-pergine-2026.jpg",
    pinned: false,
    tags: ["musica", "banda palazzolo", "concerto", "gita"],
    relatedPost: {
      id: "gita-banda-palazzolo-2026-bacheca",
      label: "📌 Questo evento era stato annunciato qui:"
    },
    excerpt: "Un weekend tra castle, concerti, eroismi all'autogrill e promemoria notturni su Alexa. Il racconto della gita della banda di Palazzolo a Pergine Valsugana.",
    content: `
      <p>
        Lo scorso weekend la banda di Palazzolo è partita alla volta di Pergine Valsugana,
        in Trentino. Un weekend tra un concerto, una visita guidata, una cena a buffet,
        una sagra dei Vigili del fuoco e qualche avventura notturna in hotel.
      </p>

      <h2>Il viaggio — e gli eroi dell'autogrill</h2>
      <p>
        Siamo partiti sabato mattina alle 8:30 dall'oratorio di Palazzolo. Il viaggio è filato
        liscio, con una sola pausa all'autogrill, ma non senza colpi di scena.
      </p>
      <p>
        Prima di risalire sul pullman ho notato in lontananza un motociclista in difficoltà.
        Insieme a Tony e Diego ci siamo avvicinati: la batteria lo aveva abbandonato. Lo abbiamo
        spinto quel tanto che bastava per farlo ripartire e siamo tornati al pullman da eroi —
        Ilaria ha filmato tutto. Piccola cosa, ma fa sempre piacere dare una mano.
      </p>

      <h2>Arrivo a Pergine e il castello</h2>
      <p>
        A Pergine eravamo divisi su due hotel, perché uno solo non bastava per tutti.
        Io e la maggior parte dei bandisti alloggiavamo all'"Al Ponte"; un gruppo più ristretto
        alla "La Rotonda", a pochi minuti di pullman. Dopo esserci sistemati, abbiamo pranzato
        tutti insieme.
      </p>
      <p>
        Nel pomeriggio era in programma la visita guidata al Castello di Pergine. Una giornata
        molto ventosa ma soleggiata: entrando e uscendo dalle varie parti del castello la
        temperatura cambiava continuamente, e probabilmente è lì che ho preso il raffreddore
        (piccola anticipazione). La visita è stata comunque piacevole, anche per chi — come me —
        non è un appassionato di storia o d'arte.
      </p>

      <h2>Il concerto al Teatro di Pergine</h2>
      <p>
        Tornati agli hotel verso le 17:30, ci siamo preparati e alle 18:30 siamo partiti per
        il Teatro di Pergine. Dopo la prova di assestamento è arrivato l'unico momento negativo
        della gita.
      </p>
      <p>
        Prima della partenza avevamo chiesto e ottenuto conferma che avremmo potuto registrare
        il concerto. Avevo preparato tutto: microfoni, aste, cavi, videocamere, mixer, computer.
        Subito dopo la prova ho iniziato a sistemare le aste con l'aiuto di altri, ma al momento
        di tirare i cavi un addetto del teatro ci ha bloccati: non c'era più tempo, stavano per
        aprire le porte al pubblico e non volevano che si vedesse ancora del materiale in giro.
      </p>
      <p>
        Eravamo in diversi, i microfoni erano quattro, e il tempo c'era. Difficile non
        arrabbiarsi. Ho portato tutto quell'equipaggiamento per l'intero weekend — zaino pesante
        in spalla anche il giorno seguente — senza poterlo usare.
      </p>
      <p>
        Per fortuna avevo il mio Shure MV88+ come backup: l'ho posizionato subito dietro
        il direttore e ho registrato da iPhone. Alla fine l'audio è venuto bene, e una persona
        tra il pubblico (grazie Tiziana) ha ripreso i video. Ho già caricato tutto su YouTube:
        <a href="https://www.youtube.com/playlist?list=PL1o1uYsfqEiOmig3LiwkRfjN-a1xNFRZ_" target="_blank" rel="noopener">
          qui trovate la playlist del concerto
        </a>.
      </p>
      <p>
        Il concerto in sé è andato bene. Il teatro era poco affollato — una sessantina di persone —
        ma il Teatro di Pergine è davvero bellissimo, grande e con un'acustica eccellente.
      </p>

      <h2>Cena, sagra e avventure notturne</h2>
      <p>
        Dopo il concerto siamo andati a piedi alla sede della banda di Pergine, che ci ha
        ospitato per una cena a buffet. Molto generosi: tavoli pieni, tutto ottimo.
      </p>
      <p>
        Verso mezzanotte ci siamo spostati. Quella sera a Pergine i Vigili del fuoco
        organizzavano una festa — una specie di sagra con tavoli all'aperto e al coperto,
        e un dj set all'interno della sede. C'era anche uno stand con un gioco curioso:
        bisognava lanciare delle rondelle di ferro per colpire delle uova sode, che erano
        il premio. Con tre colpi consecutivi si vinceva un fusto di birra. Un modo creativo
        per raccogliere fondi, anche se le uova sode come premio rimangono una scelta
        quantomeno originale.
      </p>
      <p>
        Io e Gabriele non ci siamo trattenuti a lungo alla "Festa dei Ovi": la stanchezza si
        faceva sentire, avevo lo zaino sulle spalle e Gabriele portava il mio trombone
        (che avrei dovuto lasciare sul pullman, con il senno di poi). Siamo tornati a piedi
        all'hotel.
      </p>
      <p>
        Dopo essermi cambiato sono uscito per raggiungere Elisa, ma aspettando davanti alla
        camera 305 ho visto uscire dalla 304 Tony, Lara, Ilaria, Paco, Mattia e Isabel — quelli
        della sagra, evidentemente già rientrati. Mentre cercavo di capire cosa stesse succedendo,
        ho scoperto che Elisa non era nella 305 ma nella 205, dove nel frattempo si era addormentata.
      </p>
      <p>
        Nel frattempo mi sono unito al gruppo, che girava per l'hotel combinandone di ogni —
        compreso suonare il corno alle due di notte. Scesi al piano della reception deserta,
        in piena ristrutturazione, abbiamo trovato un'Amazon Echo appoggiata su una sedia che
        riproduceva musica di sottofondo. Opportunità da non perdere: abbiamo impostato due
        promemoria per la mattina seguente, alle 9:30 e alle 9:45, con messaggi assurdi che
        alle tre di notte — nel frattempo era scattato il cambio dell'ora — facevano ridere molto.
      </p>
      <p>
        Elisa mi ha risposto nel mentre, sono salito a salutarla. Nessuno dei due stava
        benissimo: il vento del castello aveva fatto i suoi danni, e lei era alle prese anche
        con le allergie primaverili.
      </p>

      <h2>Domenica: Trento, pranzo e rientro</h2>
      <p>
        La mattina seguente, a colazione, eravamo tutti lì con gli occhi puntati sull'orologio
        in attesa dei promemoria dell'Alexa. Il primo è arrivato, ma con un volume troppo basso
        per sentirlo da tutta la sala. Del secondo non c'è stata traccia — mistero irrisolto.
        Ci siamo accontentati del nostro "scherzone"...
      </p>
      <p>
        Dopo colazione abbiamo caricato gli zaini e siamo ripartiti verso Trento, dove era
        in programma una visita guidata per il centro storico, terminata verso le 12:30.
        Il pranzo era libero: ci è voluto un po' per decidere dove andare, il gruppo si è
        frammentato e io sono rimasto con Elisa e altri cinque ragazzi. Siamo finiti in un
        bel ristorante: taglieri di affettati e formaggi per iniziare, poi io ed Elisa abbiamo
        condiviso un piatto di pasta e una pizza, entrambi con abbinamenti particolari che
        onestamente non ricordo. Strudel per chiudere.
      </p>
      <p>
        Dopo pranzo ci siamo fermati in un parco vicino al punto di raccolta del pullman,
        riparandoci dal vento in un bar con un caffè. Alle 16:30 tutti a bordo e via verso casa.
        La maggior parte dormiva già — le foto addormentati hanno spopolato nel gruppo.
        Una pausa veloce all'autogrill, nessun motociclista da salvare questa volta, e verso
        le 20:00 eravamo di ritorno a Palazzolo.
      </p>

      <h2>In conclusione</h2>
      <p>
        È stata una gita davvero piacevole. A parte il dispiacere per la registrazione
        (risolto alla meno peggio) e il raffreddore che mi sono portato a casa — lunedì avevo
        la febbre, per fortuna durata solo un giorno, anche se mentre scrivo ho ancora il naso
        che cola — il bilancio è decisamente positivo.
      </p>
      <p>
        Sono felice del gruppo che si è creato in questa banda. C'è un bel mix di età, un clima
        unito, e si scherza tanto. Non si può chiedere di meglio.
      </p>
    `
  },

  { id: "referendum-2026-record-affluenza",
    title: "Referendum 2026: affluenza record nel mio seggio",
    date: "2026-03-24",
    cover: "img/posts/referendum-2026-record-affluenza.jpg",
    pinned: false,
    tags: ["lavoro", "seggio", "referendum"],
    relatedPost: {
      id: "referendum-2026-bacheca",
      label: "📌 Questo evento era stato annunciato qui:"
    },
    excerpt: "La mia quarta esperienza come presidente di seggio, in occasione del referendum costituzionale 2026. Un weekend impegnativo, un'affluenza inaspettata e una novità: il seggio speciale.",
    content: `
      <p>
        Questo weekend ho svolto il ruolo di presidente di seggio per il referendum costituzionale.
        Come riportato dai telegiornali, c'è stato un record di affluenza rispetto agli ultimi anni,
        e il mio seggio non ha fatto eccezione.
      </p>

      <h2>Come sono organizzati i giorni</h2>
      <p>
        Per chi non lo sapesse, fare parte di un seggio elettorale significa impegnarsi
        su più giorni consecutivi. La scaletta è sempre la stessa:
      </p>

      <div class="timeline-container">
        <div class="timeline">
          <h4>Sabato</h4>
          <p>🏛️ <strong>Dalle 16:00</strong> — Costituzione del seggio</p>
        </div>
        <div class="timeline">
          <h4>Domenica</h4>
          <p>🗳️ <strong>Dalle 7:00 alle 23:00</strong> — Votazione</p>
        </div>
      </div>
      <div class="timeline-container">
        <div class="timeline">
          <h4>Lunedì mattina</h4>
          <p>🗳️ <strong>Dalle 7:00 alle 15:00</strong> — Votazione</p>
        </div>
        <div class="timeline">
          <h4>Lunedì pomeriggio</h4>
          <p>📊 <strong>Dalle 15:00</strong> — Scrutinio</p>
        </div>
      </div>

      <p>
        Il compenso è decisamente basso se paragonato all'impegno richiesto, ma penso che
        pochi lo facciano solo per i soldi. Quello che personalmente mi gratifica, ogni volta,
        è qualcosa di diverso: organizzare e portare a buon fine tutte le operazioni del seggio;
        lavorare a stretto contatto con persone inizialmente sconosciute per molte ore di fila;
        interfacciarsi con i dipendenti comunali e le forze dell'ordine non come "un cittadino
        allo sportello", ma come parte di una squadra con un obiettivo comune.
      </p>
      <p>
        Non è sempre semplice, e un po' di stress è inevitabile. Ma come tutte le cose che
        richiedono fatica e impegno, alla fine sono gratificanti. Quando si presenta un problema,
        bisogna trovare una soluzione senza farsi prendere dal panico: le operazioni del seggio
        devono andare avanti in ogni caso.
      </p>

      <h2>La quarta volta si impara ancora</h2>
      <p>
        Questa è stata la mia quarta esperienza al seggio, e ogni volta si porta a casa qualcosa
        in più. Si affinano quei piccoli accorgimenti che rendono più agevole lo svolgimento delle
        attività — e quando ne avrò raccolti abbastanza, vorrei scrivere un post dedicato, sperando
        possa essere utile a qualche altro presidente di seggio alle prime armi.
      </p>
      <p>
        Il consiglio principale che mi sento di dare a chi vuole cimentarsi in questa esperienza
        è semplice: <strong>leggi il libretto</strong>. Cercando online "Libretto operazioni seggio
        elettorale" si trova facilmente il PDF completo. Contiene praticamente tutto quello che
        c'è da sapere sulle operazioni di voto.
      </p>
      <p>
        Ho scritto "praticamente" perché una parte della conoscenza si acquisisce solo sul campo:
        alcune dinamiche variano da Comune a Comune, e l'interazione con le persone e con i
        dipendenti comunali porta sempre qualche piccola sorpresa. Per tutto il resto, però,
        il libretto è esaustivo.
      </p>

      <h2>Affluenza record: 70%</h2>
      <p>
        Il titolo di questo post nasce dai numeri: nel mio seggio abbiamo raggiunto il 70% di
        affluenza. Probabilmente altri seggi hanno fatto ancora meglio, ma la nostra percentuale
        è nettamente superiore alla media nazionale e superiore anche agli altri seggi presenti
        nello stesso istituto scolastico. Un risultato davvero inaspettato viste le precedenti
        votazioni.
      </p>

      <h2>La novità: il seggio speciale</h2>
      <p>
        Per la prima volta, il seggio a cui sono stato assegnato aveva un <strong>seggio speciale
        associato</strong>: si tratta del seggio itinerante che si reca in ospedali e case di cura
        per raccogliere il voto di chi non può recarsi fisicamente alle urne.
      </p>
      <p>
        Quando un seggio ordinario ha un seggio speciale associato, deve tenere conto anche dei
        voti raccolti da quest'ultimo nelle operazioni di scrutinio. Niente di complicato in
        realtà, ma era una novità per me e sono contento che sia andato tutto liscio.
      </p>
    `
  },

  { id: "domotica-luci-home-assistant",
    title: "Domotizzare le luci con Home Assistant: tutte le soluzioni",
    date: "2026-03-20",
    cover: "img/posts/domotica-luci-home-assistant.jpg",
    showInGallery: false,
    pinned: false,
    tags: ["tech"],
    excerpt: "Lampadine smart, relè, Zigbee, dimmer, strisce LED: analisi completa di tutte le soluzioni per automatizzare l'illuminazione con Home Assistant, con vantaggi e svantaggi di ognuna.",
    content: `
  <div class="post-guida-v1">

    <p class="pg-intro">
      L'illuminazione è uno dei primi e più visibili ambiti della domotica domestica.
      Automatizzare le luci significa risparmio energetico, comodità quotidiana,
      simulazione di presenza e integrazione con sensori, scene e assistenti vocali.
      In questa guida analizziamo le tre principali soluzioni compatibili con Home Assistant.
    </p>
    <p class="pg-intro">
      Anche se si tratta "solo" di lampadine, le opzioni per renderle intelligenti sono molteplici.
      In questo post vediamo i metodi standard; in un post successivo analizzerò invece le soluzioni
      ibride, ossia quelle che combinano almeno due di queste tecnologie contemporaneamente.
    </p>

    <div class="pg-tip">
      <span class="pg-tip-icon">ℹ️</span>
      <span>
        Ogni soluzione è compatibile con Home Assistant, ma alcune richiedono hub aggiuntivi,
        integrazioni cloud o hardware dedicato. Valuta la tua infrastruttura prima di acquistare.
      </span>
    </div>

    <div class="pg-toc">
      <div class="pg-toc-label">Indice</div>
      <ol>
        <li><a href="#pg-bulbs">Lampadine Smart</a></li>
        <li><a href="#pg-switches">Interruttori Smart</a></li>
        <li><a href="#pg-shelly">Relè Smart</a></li>
        <li><a href="#pg-table-wrap">Tabella comparativa</a></li>
        <li><a href="#pg-conclusion">Conclusioni</a></li>
      </ol>
    </div>

    <!-- ── 1. Lampadine Smart ── -->
    <details id="pg-bulbs" class="pg-accordion">
      <summary>
        <span>💡</span>
        <div class="pg-accordion-summary-text">
          <span class="pg-accordion-title">1. Lampadine Smart</span>
          <span class="pg-accordion-subtitle">Philips Hue, LIFX, Tuya…</span>
        </div>
        <div class="pg-accordion-summary-difficulty">
          <span>Difficoltà</span>
          <div class="pg-dots">
            <span class="pg-dot on"></span>
            <span class="pg-dot"></span><span class="pg-dot"></span><span class="pg-dot"></span><span class="pg-dot"></span>
          </div>
        </div>
      </summary>
      <div class="pg-accordion-body">
        <p>
          Le lampadine smart si sostituiscono alle lampadine tradizionali senza modificare l'impianto
          elettrico. Sono la soluzione più semplice per iniziare: plug &amp; play, supporto colore RGBW,
          dimmerabilità e integrazione immediata con Home Assistant tramite integrazioni native o Zigbee2MQTT.
        </p>
        <p>
          <strong>Attenzione:</strong> l'interruttore fisico deve restare <em>sempre acceso</em>. Se qualcuno
          lo spegne, la lampadina non è più alimentata e perde la connessione. Questo si mitiga con interruttori
          smart abbinati o impostando il <em>power on behavior</em>, funzione però non sempre disponibile.
        </p>
        <div class="pg-procon">
          <div class="pg-pros">
            <div class="pg-procon-label">Vantaggi</div>
            <ul>
              <li>Installazione semplicissima, nessun elettricista</li>
              <li>Supporto colore e temperatura colore</li>
              <li>Dimmerabilità integrata</li>
              <li>Aggiornamenti firmware facili</li>
              <li>Ampia scelta di brand e prezzi</li>
              <li>Disponibili con vari protocolli: Wi-Fi, Zigbee…</li>
            </ul>
          </div>
          <div class="pg-cons">
            <div class="pg-procon-label">Svantaggi</div>
            <ul>
              <li>Interruttore fisico deve restare sempre acceso</li>
              <li>Costo per lampada alto rispetto alle tradizionali</li>
              <li>Alcuni modelli richiedono hub proprietario</li>
              <li>Wi-Fi può saturare la rete domestica</li>
              <li>Dipendenza da cloud per alcune marche</li>
              <li>Power on behavior non sempre configurabile</li>
            </ul>
          </div>
        </div>
        <div class="pg-tags">
          <span class="pg-tag">💰 €10–50 / lampadina</span>
          <span class="pg-tag hl">⚡ Nessun lavoro elettrico</span>
          <span class="pg-tag">📡 Wi-Fi o Zigbee</span>
          <span class="pg-tag">🎨 RGBW disponibile</span>
        </div>

        <h4>La mia esperienza</h4>
        <p>
          Ho provato diverse lampadine smart nel corso del tempo, sia Wi-Fi che Zigbee, e le
          differenze tra i due protocolli sono notevoli.
        </p>

        <h4>Lampadine Wi-Fi (Tuya, LIFX, Xiaomi)</h4>
        <p>
          Di lampadine Wi-Fi Tuya ne ho molte. Sono abbastanza economiche (tra i 10€ e i 15€),
          però non le consiglio: sono dipendenti dal cloud. Ho provato a usare la custom integration
          LocalTuya su Home Assistant e a bloccare il loro IP verso internet dal router, ma smettono
          comunque di funzionare perché hanno sempre bisogno di comunicare con il server della casa madre.
        </p>
        <p>
          Avere molte lampadine Wi-Fi richiede inoltre un buon router, che si trova a gestire un numero
          elevato di dispositivi oltre a quelli di base (smartphone, computer, smart TV, smart speaker,
          videocamere…). Il protocollo Wi-Fi per delle lampadine è sostanzialmente sprecato: consuma molto
          e permette di trasferire dati velocemente, caratteristica del tutto inutile per dispositivi IoT
          di questo tipo.
        </p>
        <p>
          Un altro svantaggio significativo è la mancanza del power on behavior su alcuni modelli.
          Immaginate di avere queste lampadine in camera da letto e che durante la notte la corrente
          salti e ritorni più volte per problemi esterni. La lampadina si accende ogni volta che viene
          rialimentata e non c'è nulla da configurare per evitarlo. Per di più, anche il router si è
          spento, e al ritorno della corrente ha bisogno di un certo tempo per avviarsi e ristabilire
          la connessione: in quel lasso di tempo le lampadine non sono controllabili da remoto.
          Questi difetti valgono sia per le lampadine Tuya, sia per LIFX e Xiaomi, di cui possiedo
          una lampadina ciascuna.
        </p>

        <h4>Lampadine Zigbee (Philips Hue)</h4>
        <p>
          Proprio per risolvere i problemi delle lampadine Wi-Fi, ho provato le lampadine Zigbee,
          nel mio caso Philips Hue. Sono decisamente più costose rispetto alle Tuya, ma molto più
          affidabili. Stando anche a quanto si legge in giro nella community, sono tra i dispositivi
          Zigbee più stabili e longevi nel tempo.
        </p>
        <p>
          I vantaggi del protocollo Zigbee sono: controllo locale, basso consumo energetico e
          comunicazione rapida. Per le lampadine smart, Zigbee (e protocolli simili) è a mio avviso
          la scelta corretta. Con le Philips Hue si risolvono entrambi i problemi principali: il
          power on behavior è configurabile e, trattandosi di controllo locale, non è necessaria
          la connessione a internet.
        </p>
        <p>
          L'unico aspetto da considerare è che occorre acquistare un coordinator per creare la rete
          Zigbee, a differenza del Wi-Fi che è già presente in ogni casa.
        </p>
      </div>
    </details>

    <!-- ── 2. Interruttori Smart ── -->
    <details id="pg-switches" class="pg-accordion">
      <summary>
        <span>🔲</span>
        <div class="pg-accordion-summary-text">
          <span class="pg-accordion-title">2. Interruttori Smart</span>
          <span class="pg-accordion-subtitle">Sonoff TX, Tuya Wi-Fi Switch, Fibaro…</span>
        </div>
        <div class="pg-accordion-summary-difficulty">
          <span>Difficoltà</span>
          <div class="pg-dots">
            <span class="pg-dot on"></span><span class="pg-dot on"></span>
            <span class="pg-dot on"></span><span class="pg-dot"></span><span class="pg-dot"></span>
          </div>
        </div>
      </summary>
      <div class="pg-accordion-body">
        <p>
          Gli interruttori smart sostituiscono i normali interruttori a parete e controllano
          la linea di alimentazione verso luci tradizionali. Mantengono l'usabilità fisica
          e aggiungono controllo remoto e automazioni. Richiedono un minimo di lavoro elettrico.
        </p>
        <p>
          Molti modelli supportano il cablaggio senza neutro (solo fase e carico), aspetto
          fondamentale negli impianti italiani più vecchi. Vale la pena verificare sempre
          la compatibilità prima dell'acquisto.
        </p>
        <div class="pg-procon">
          <div class="pg-pros">
            <div class="pg-procon-label">Vantaggi</div>
            <ul>
              <li>Funziona con qualsiasi lampadina tradizionale</li>
              <li>Interruttore fisico sempre funzionante</li>
              <li>Aspetto estetico personalizzabile</li>
              <li>Modelli senza neutro disponibili</li>
            </ul>
          </div>
          <div class="pg-cons">
            <div class="pg-procon-label">Svantaggi</div>
            <ul>
              <li>Richiede lavoro elettrico</li>
              <li>Non gestisce dimmer o colori</li>
              <li>Dimensioni possono non entrare in scatole piccole</li>
            </ul>
          </div>
        </div>
        <div class="pg-tags">
          <span class="pg-tag">💰 €15–60 / interruttore</span>
          <span class="pg-tag hl">🏠 Compatibile impianti esistenti</span>
          <span class="pg-tag">📡 Wi-Fi o Zigbee</span>
        </div>

        <h4>La mia esperienza</h4>
        <p>
          Non ho mai acquistato interruttori smart, principalmente per non alterare l'estetica
          degli interruttori già presenti in casa. La soluzione successiva — i relè smart — risolve
          proprio questo problema, permettendo di mantenere l'interruttore originale invariato.
        </p>
      </div>
    </details>

    <!-- ── 3. Relè Smart ── -->
    <details id="pg-shelly" class="pg-accordion">
      <summary>
        <span>⚡</span>
        <div class="pg-accordion-summary-text">
          <span class="pg-accordion-title">3. Relè Smart</span>
          <span class="pg-accordion-subtitle">Shelly, Sonoff Mini… installazione in scatola, estetica invariata</span>
        </div>
        <div class="pg-accordion-summary-difficulty">
          <span>Difficoltà</span>
          <div class="pg-dots">
            <span class="pg-dot on"></span><span class="pg-dot on"></span>
            <span class="pg-dot on"></span><span class="pg-dot on"></span><span class="pg-dot"></span>
          </div>
        </div>
      </summary>
      <div class="pg-accordion-body">
        <p>
          I relè smart si inseriscono dentro la scatola dell'interruttore o di derivazione,
          senza sostituirlo visivamente. L'interruttore originale rimane al suo posto e continua
          a funzionare normalmente, mentre il relè aggiunge la gestione intelligente sul circuito.
        </p>
        <p>
          Shelly è amatissima dalla community Home Assistant per l'integrazione locale nativa
          (nessun cloud), supporto MQTT, prezzi competitivi e dimensioni contenute.
        </p>
        <div class="pg-procon">
          <div class="pg-pros">
            <div class="pg-procon-label">Vantaggi</div>
            <ul>
              <li>Interruttori originali esteticamente invariati</li>
              <li>Funzionamento completamente locale (nessun cloud)</li>
              <li>Compatibile con qualsiasi lampadina</li>
              <li>Prezzi molto competitivi (da ~€8)</li>
              <li>Supporto MQTT + HA nativo eccellente</li>
            </ul>
          </div>
          <div class="pg-cons">
            <div class="pg-procon-label">Svantaggi</div>
            <ul>
              <li>Richiede conoscenze elettriche più avanzate</li>
              <li>Spazio nella scatola non sempre disponibile</li>
              <li>Nessuna gestione del colore (nei modelli base)</li>
            </ul>
          </div>
        </div>
        <div class="pg-tags">
          <span class="pg-tag">💰 €8–20 / relè</span>
          <span class="pg-tag hl">🔌 100% locale</span>
          <span class="pg-tag">🏠 Estetica invariata</span>
        </div>

        <h4>La mia esperienza</h4>
        <p>
          Questa è la soluzione che ho adottato per tutte le luci di casa. Non ho usato Shelly,
          bensì i relè Sonoff Zigbee, che si installano nella scatola dell'interruttore e
          comunicano tramite rete Zigbee anziché Wi-Fi.
        </p>
        <p>
          Esistono modelli che richiedono il cavo del neutro e modelli senza. Questi ultimi sono
          più immediati da installare, ma funzionano come <em>end-device</em> nella rete Zigbee.
          I modelli con neutro invece fungono da <em>router Zigbee</em>, ovvero amplificano e
          estendono la rete mesh. Questa distinzione è importante: più router Zigbee si hanno
          in casa, più la rete è stabile e capillare, con una copertura migliore su tutta la superficie.
        </p>
        <p>
          Essendo collegati fisicamente tra interruttore e lampadina, questi dispositivi mantengono
          invariato il comportamento classico: l'interruttore fisico funziona come sempre, e in
          più si aggiunge la possibilità di comandare la luce da remoto. Il power on behavior
          è configurabile.
        </p>
        <p>
          L'unico limite rispetto alle lampadine smart è la perdita della dimmerabilità e del
          controllo del colore — anche se esistono relè dimmerabili, da usare ovviamente con
          lampadine compatibili.
        </p>
      </div>
    </details>

    <!-- ── Tabella comparativa ── -->
    <h2>Tabella comparativa</h2>
    <div id="pg-table-wrap" class="pg-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Soluzione</th>
            <th>Difficoltà</th>
            <th>Costo medio</th>
            <th>Colori</th>
            <th>Dimmer</th>
            <th>Locale</th>
            <th>Impianto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>💡 Lampadine Smart</td>
            <td>Bassa</td>
            <td>€10–50 / lamp.</td>
            <td><span class="pg-ok">✓</span></td>
            <td><span class="pg-ok">✓</span></td>
            <td><span class="pg-warn">Parziale</span></td>
            <td><span class="pg-ok">No</span></td>
          </tr>
          <tr>
            <td>🔲 Interruttori Smart</td>
            <td>Media</td>
            <td>€15–60 / pz</td>
            <td><span class="pg-no">✗</span></td>
            <td><span class="pg-no">✗</span></td>
            <td><span class="pg-warn">Parziale</span></td>
            <td><span class="pg-warn">Minimo</span></td>
          </tr>
          <tr>
            <td>⚡ Relè Smart</td>
            <td>Media-Alta</td>
            <td>€8–20 / pz</td>
            <td><span class="pg-no">✗</span></td>
            <td><span class="pg-no">✗ *</span></td>
            <td><span class="pg-ok">✓</span></td>
            <td><span class="pg-warn">Medio</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="font-size:.8rem; color: var(--muted); margin-top: 8px;">* Esistono modelli di relè dimmerabili, compatibili con lampadine che supportano la dimmerabilità.</p>

    <!-- ── Conclusione ── -->
    <div id="pg-conclusion" class="pg-conclusion">
      <h2>Quale soluzione scegliere?</h2>
      <p>
        Non esiste una risposta universale: la scelta dipende dall'impianto, dal budget,
        dalla voglia di mettere le mani nell'elettrico e dal livello di automazione desiderato.
      </p>
      <p>
        Se vuoi <strong>iniziare subito</strong> senza toccare l'impianto, le lampadine smart
        sono la strada più diretta — preferibilmente Zigbee per evitare i problemi del Wi-Fi.
        Se vuoi <strong>mantenere gli interruttori esistenti</strong> e un funzionamento completamente
        locale, i relè smart sono la scelta più solida. Gli interruttori smart rappresentano una
        via di mezzo, utile quando si vuole sostituire completamente la placca ma senza intervenire
        sul circuito della lampadina.
      </p>
      <p>
        In molte case la soluzione ideale è un <strong>mix di queste tecnologie</strong>:
        lampadine Zigbee dove serve il colore, relè smart ovunque si voglia semplicità e
        affidabilità. Home Assistant le gestisce tutte in modo unificato, con automazioni
        che coinvolgono qualsiasi dispositivo indipendentemente dal protocollo.
      </p>
      <p>
        Come accennato all'inizio, esistono anche soluzioni ibride che combinano più di questi
        approcci. Ce n'è una in particolare che utilizzo attualmente, unendo relè smart e
        lampadina smart sullo stesso punto luce. Ha i suoi vantaggi e svantaggi, e ne parlerò
        in un prossimo post.
      </p>
    </div>

  </div>
    `
  },

  { id: "gita-banda-palazzolo-2026-bacheca",
    title: "Trasferta e concerto a Pergine Valsugana",
    date: "2026-03-18",
    cover: "",
    pinned: true,
    eventDate: "2026-03-28",
    eventTime: "20:30",
    eventPlace: "Pergine Valsugana",
    tags: ["musica", "banda palazzolo", "concerto", "gita"],
    relatedPost: {
      id: "gita-banda-palazzolo-pergine-2026",
      label: "📖 Leggi com'è andata:"
    },
    excerpt: "La Banda di Palazzolo in trasferta!",
    content: `
      <p>Quest'anno la gita della banda dura 2 giorni! La trasferta a Pergine Valsugana prevede anche una notte fuori, tra il 28 e il 29 marzo 2026.</p>
      <p>La sera del 28 ci sarà il concerto nel Teatro Comunale, invece il resto del tempo è dedicato al divertimento e lo svago.</p>
      <p>Questo <a href="https://www.teatrodipergine.it/eventi/2730-concerto-corpo-musicale-santa-cecilia" target="_blank" rel="noopener noreferrer">link</a> rimanda al sito ufficiale del teatro di Pergine, per approfondire.</p>
      <p>📅 28 Marzo 2026 · ore 20:30<br>📍 Pergine Valsugana, Teatro Comunale </p>
    `
  },

  { id: "referendum-2026-bacheca",
    title: "Presidente di Seggio, Referendum 2026",
    date: "2026-03-18",
    cover: "",
    pinned: true,
    eventDate: "2026-03-21",
    eventTime: "16:00",
    eventPlace: "Paderno Dugnano",
    tags: ["lavoro", "seggio", "referendum"],
    relatedPost: {
      id: "referendum-2026-record-affluenza",
      label: "📖 Leggi com'è andata:"
    },
    excerpt: "Sabato 21 marzo c'è l'insediamento dei seggi.",
    content: `
      <p>Questo weekend sarà pieno per me. Infatti sono stato nominato presidente si seggio per il <a href="https://it.wikipedia.org/wiki/Referendum_costituzionale_in_Italia_del_2026" target="_blank" rel="noopener noreferrer">
      "Referendum Giustizia 2026"</a></p>
      <p>Sabato alle 16:00 c'è l'insediamento del seggio. Per chi non se ne intendesse è uno dei momenti in cui c'è più lavoro per 
      i componenti del seggio dato che bisogna firmare e timbrare tutte le schede. Oltre a quello bisogna allestire tutta l'aula 
      per prepararsi alla votazione. Solitamente questo lavoro impiega circa 2-3 ore. Però le altre volte che sono stato ai seggi 
      c'erano dalle 2 alle 5 schede (per elettore), invece questa volta solo una, quindi il lavoro sarà più veloce.</p>
      <p>Le votazioni sono aperte domenica dalle 7:00 alle 23:00 e lunedì dalle 7:00 alle 15:00. Dopodiché inizierà lo scrutinio. Anche questo
      credo sarà più veloce dato che è una sola scheda ed è un referendum (quindi le risposte sono Sì oppure No, facili da scrutinare).</p>
      <p>L'unico svantaggio di avere una sola scheda è il compenso previsto per i componenti del seggio (per ogni scheda aggiuntiva, oltre la prima,
      c'è un aumento del compenso), che è ridotto in confronto alle altre consultazioni a cui ho partecipato. Però è giusto così, poiché 
      teoricamente ci sarà meno lavoro da fare (anche se il tempo rimane lo stesso).</p>
      <p>Altre informazioni sulla mia "carriera" ai seggi sono <a href="seggio-elettorale.html">qui.</a></p>
    `
  },

  { id: "ricordo-vittime-covid-2026",
    title: "In memoria delle vittime del COVID-19",
    date: "2026-03-18",
    cover: "img/posts/ricordo-vittime-covid-2026.jpg",
    pinned: false,
    eventDate: "2026-03-18",
    eventTime: "11:00",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "banda palazzolo", "servizio"],
    excerpt: "Servizio con la banda di Palazzolo in memoria delle vittime del COVID-19",
    content: `
      <p>Questo è il quinto anno in cui viene celebrata questa giornata, in ricordo di tutte le persone venute a mancare a causa del Coronavirus</p>
      <p>Il Comune di Paderno Dugnano ha dedicato una zona del Parco "La Cava" in cui sono stati piantati degli alberi in ricordo 
      delle vittime e di quel periodo storico che ha segnato tutti noi.</p>
      <p>La sindaca Anna Varisco, oltre a ricordare gli orrori e le difficoltà di quel periodo, ha voluto sottolineare l'importante ruolo che ha avuto 
      la comunità: l'unione delle forze di tutti i volontari ha permesso al paese di andare avanti nonostante le difficoltà. </p>
      <p>Per quanto riguarda la banda, abbiamo eseguito la marcia Monviso sfilando dall'ingresso del parco, fino alla zona dedicata. 
      Poi il maestro Enrico Tiso ha eseguito un brano da solista mentre la bandiera italiana veniva posizionata a mezz'asta. Dopodiché c'è
      stato il mio intervento con il Silenzio. Dopo alcuni discorsi ufficiali abbiamo eseguito il "Va pensiero" e infine la cerimonia
       si è conclusa con l'Inno di Mameli.</p>
    `
  },

  { id: "concerto-estate-cusano-2026-bacheca",
    title: "Concerto d'Estate — Banda di Cusano Milanino",
    date: "2026-03-14",
    cover: "img/posts/locandina-concerto-estate-cusano-2026.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-06-20",
    eventTime: "21:15",
    eventPlace: "Cusano Milanino",
    tags: ["musica", "banda cusano", "concerto"],
    excerpt: "Appuntamento con il Concerto d'Estate della Banda di Cusano Milanino: Cartoon Symphony. Una serata di musica sotto le stelle — tutti invitati!",
    content: `
      <p>Vi aspettiamo al <strong>Concerto d'Estate</strong> della Banda di Cusano Milanino!</p>
      <p>Il titolo di quest'anno è <strong>Cartoon Symphony</strong>.</p>
      <p>Una serata all'aperto con un programma incredibile a tema "Cartoni animati"!</p>
      <p>L'ingresso è libero e aperto a tutti.</p>
      <p>📅 20 Giugno 2026 · ore 21:15<br>📍 Piazza Allende, Cusano Milanino</p>
    `
  },

  { id: "concerto-palazzolo-cava-2026-bacheca",
    title: "Concerto nell'anfiteatro — Banda di Palazzolo Milanese",
    date: "2026-03-16",
    cover: "img/posts/locandina-concerto-palazzolo-cava-2026.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-05-24",
    eventTime: "",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "banda palazzolo", "concerto"],
    relatedPost: {
      id: "concerto-anfiteatro-la-cava-2026",
      label: "📖 Leggi com'è andata:"
    },
    excerpt: "Il concerto della banda di Palazzolo nel magnifico anfiteatro della Cava!",
    content: `
      <p>Come l'anno scorso e anche quello prima, suonerò al concerto della banda di Palazzolo</p>
      <p>Il luogo è bellissimo: l'anfiteatro della Cava di Paderno Dugnano. Il pubblico che verrà a sentirci potrà ascoltare la musica 
      e guardare il paesaggio suggestivo di quel meraviglio parco</p>
      <p>Il concerto è di pomeriggio e il mio consiglio è di arrivare al parco molto in anticipo per avere anche il tempo di fare una passeggiata e goderselo tutto.</p>
      <p>Ci sarà la <strong>Junior Band</strong> ad aprire il concerto!</p>
      <p>📅 24 Maggio 2026 · 16:30<br>📍 Paderno Dugnano, Anfiteatro Parco Lago Nord </p>
    `
  },

  { id: "pubblicazioni-smart-home",
    title: "La mia esperienza con la smart home",
    date: "2026-03-02",
    cover: "img/loghi/home_assistant_logo.png",
    showInGallery: false,
    pinned: false,
    tags: ["tech", "home assistant", "smart home"],
    excerpt: "Da alcuni anni uso Home Assistant, volevo provare a pubblicare alcune delle mie idee e configurazioni.",
    content: `
      <p>Home Assistant è diventato il centro della mia casa, ormai da qualche anno. Mio papà è vittima dei miei continui esperimenti.
        Mia mamma invece mi sprona e mi permette di comprare anche nuovi dispositivi smart.</p>
      <p>Stavo pensando di iniziare a scrivere qualche articolo in cui mostro alcune delle mie configurazioni. Home Assistant si basa su una forte community
        e io ho letto migliaia di consigli online, quindi è giusto che anch'io contribuisca. Tutti dovrebbero farlo così che tutti si aiutino a vicenda.</p>
      <p>Quindi appena trovo l'argomento giusto e il tempo pubblicherò qualche cosa del mio HA. Non sarà niente di rivoluzionario, ma solo qualche automazione o script utile.
      </p>
    `
  },

  { id: "doremitici-carnevale-2026",
    title: "Carnevale 2026",
    date: "2026-02-21",
    cover: "img/posts/doremitici-carnevale-2026.jpg",
    pinned: false,
    eventDate: "2026-02-21",
    eventTime: "16:00",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "doremitici", "servizio"],
    excerpt: "I DoReMitici hanno portato un po' di musica per carnevale, fuori dal centro commerciale.",
    content: `
      <p>Il 21 febbraio, come gruppo DoReMitici ci siamo presentati davanti all'ingresso del Centro commerciale Brianza di 
      Paderno Dugnano e abbiamo suonato per un paio d'ore, travestiti per l'occasione. 
         Per leggere l'articolo sul sito ufficiale <a href="https://davidezanella.altervista.org/wp-content/DoReMitici/events/2026-02-21_Carnevale_2026/index.php" target="_blank" rel="noopener noreferrer">clicca qui</a>.</p>
      <p>Per il nostro gruppo questi servizi sono utili anche per raccogliere qualche offerta per permetterci piano piano 
      di evolvere (indumenti personalizzati, attrezzatura audio/video, partiture, ecc...), ma questa volta ne abbiamo approfittato
       anche per leggere qualche brano mai visto alle prove 🤫. L'esecuzione non è stata perfetta, ma anche questo ci può aiutare 
       a migliorare (ad esempio per velocizzare la lettura musicale a prima vista e anche per imparare a risolvere situazioni critiche
       durante gli eventi).</p>
      <p>Spezzo una lancia a nostro favore 😅 dicendo che l'esecuzione è stata inficiata anche dall'assenza delle percussioni che quindi ha
      reso ancora più difficile il nostro lavoro.
      </p>
    `
  },

  { id: "doremitici-serata-gruppo-missionario",
    title: "Serata Gruppo Missionario ''Io sono l'altro''",
    date: "2026-02-20",
    cover: "img/posts/doremitici-serata-gruppo-missionario.jpg",
    pinned: false,
    eventDate: "2026-02-18",
    eventTime: "20:45",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "doremitici"],
    excerpt: "I DoReMitici hanno partecipato a una serata organizzata dal Gruppo Missionario presso la Cineteca Milano Metropolis.",
    content: `
      <p>Il 18 febbraio è stata una serata piacevole e con grandi spunti di riflessione. Per leggere l'articolo completo sul sito dei DoReMitici, 
        <a href="https://davidezanella.altervista.org/wp-content/DoReMitici/events/2026-02-18_Serata_gruppo_missionario/index.php" target="_blank" rel="noopener noreferrer">clicca qui</a>.</p>
      <p>Noi abbiamo suonato 3 brani: Gabriel's Oboe, Schiindler's List, Dolce Sentire.</p>
      <p>Suonare quelle musiche non è semplice perché ci vuole un buon controllo del suono nelle dinamiche come il piano e il pianissimo.
         Ho registrato con il mio microfono e riascoltando sono contento del risultato.
      </p>
    `
  },

];

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
  { id: "concerto-mamma-cusano-2026",
    title: "Concerto per la Festa della Mamma — Banda di Cusano Milanino",
    date: "2026-04-16",
    cover: "img/posts/concerto-mamma-cusano-2026.jpg",
    showInGallery: false,
    pinned: true,
    eventDate: "2026-05-10",
    eventTime: "16:30",
    eventPlace: "Cusano Milanino",
    tags: ["musica", "banda cusano", "concerto"],
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
    tags: ["musica", "banda palazzolo", "concerto"],
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
      </ol>
    </div>

    <!-- ── 1. Lampadine Smart ── -->
    <div id="pg-bulbs" class="pg-card">
      <div class="pg-card-header">
        <div class="pg-card-icon">💡</div>
        <div class="pg-card-header-text">
          <h3>1. Lampadine Smart</h3>
          <p>Philips Hue, LIFX, Tuya…</p>
        </div>
        <div class="pg-difficulty">
          <span>Difficoltà</span>
          <div class="pg-dots">
            <span class="pg-dot on"></span>
            <span class="pg-dot"></span><span class="pg-dot"></span><span class="pg-dot"></span><span class="pg-dot"></span>
          </div>
        </div>
      </div>
      <div class="pg-card-body">
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
    </div>

    <!-- ── 2. Interruttori Smart ── -->
    <div id="pg-switches" class="pg-card">
      <div class="pg-card-header">
        <div class="pg-card-icon">🔲</div>
        <div class="pg-card-header-text">
          <h3>2. Interruttori Smart</h3>
          <p>Sonoff TX, Tuya Wi-Fi Switch, Fibaro…</p>
        </div>
        <div class="pg-difficulty">
          <span>Difficoltà</span>
          <div class="pg-dots">
            <span class="pg-dot on"></span><span class="pg-dot on"></span>
            <span class="pg-dot on"></span><span class="pg-dot"></span><span class="pg-dot"></span>
          </div>
        </div>
      </div>
      <div class="pg-card-body">
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
    </div>

    <!-- ── 3. Relè Smart ── -->
    <div id="pg-shelly" class="pg-card">
      <div class="pg-card-header">
        <div class="pg-card-icon">⚡</div>
        <div class="pg-card-header-text">
          <h3>3. Relè Smart (Shelly, Sonoff Mini…)</h3>
          <p>Installazione in scatola, estetica invariata</p>
        </div>
        <div class="pg-difficulty">
          <span>Difficoltà</span>
          <div class="pg-dots">
            <span class="pg-dot on"></span><span class="pg-dot on"></span>
            <span class="pg-dot on"></span><span class="pg-dot on"></span><span class="pg-dot"></span>
          </div>
        </div>
      </div>
      <div class="pg-card-body">
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
    </div>

    <!-- ── Tabella comparativa ── -->
    <h2>Tabella comparativa</h2>

    <div class="pg-table-wrap">
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
    <div class="pg-conclusion">
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

  { id: "gita-banda-palazzolo-2026",
    title: "Trasferta e concerto a Pergine Valsugana",
    date: "2026-03-18",
    cover: "",
    pinned: true,
    eventDate: "2026-03-28",
    eventTime: "20:30",
    eventPlace: "Pergine Valsugana",
    tags: ["musica", "banda palazzolo", "concerto"],
    excerpt: "La Banda di Palazzolo in trasferta!",
    content: `
      <p>Quest'anno la gita della banda dura 2 giorni! La trasferta a Pergine Valsugana prevede anche una notte fuori, tra il 28 e il 29 marzo 2026.</p>
      <p>La sera del 28 ci sarà il concerto nel Teatro Comunale, invece il resto del tempo è dedicato al divertimento e lo svago.</p>
      <p>Questo <a href="https://www.teatrodipergine.it/eventi/2730-concerto-corpo-musicale-santa-cecilia" target="_blank" rel="noopener noreferrer">link</a> rimanda al sito ufficiale del teatro di Pergine, per approfondire.</p>
      <p>📅 28 Marzo 2026 · ore 20:30<br>📍 Pergine Valsugana, Teatro Comunale </p>
    `
  },

  { id: "referendum-2026",
    title: "Presidente di Seggio, Referendum 2026",
    date: "2026-03-18",
    cover: "",
    pinned: true,
    eventDate: "2026-03-21",
    eventTime: "16:00",
    eventPlace: "Paderno Dugnano",
    tags: ["lavoro", "seggio", "referendum"],
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

  { id: "concerto-estate-cusano-2026",
    title: "Concerto d'Estate — Banda di Cusano Milanino",
    date: "2026-03-14",
    cover: "",
    pinned: true,
    eventDate: "2026-06-20",
    eventTime: "21:00",
    eventPlace: "Cusano Milanino",
    tags: ["musica", "banda cusano", "concerto"],
    excerpt: "Appuntamento con il Concerto d'Estate della Banda di Cusano Milanino. Una serata di musica sotto le stelle — tutti invitati!",
    content: `
      <p>Vi aspettiamo al <strong>Concerto d'Estate</strong> della Banda di Cusano Milanino!</p>
      <p>Una serata all'aperto con un programma incredibile a tema "Cartoni animati"!</p>
      <p>L'ingresso è libero e aperto a tutti.</p>
      <p>Per il luogo ci saranno aggiornamenti su questa pagina (arriverà anche la locandina!)</p>
      <p>📅 20 Giugno 2026 · ore 21:00<br>📍 Cusano Milanino</p>
    `
  },

  { id: "concerto-palazzolo-cava-2026",
    title: "Concerto nell'anfiteatro — Banda di Palazzolo Milanese",
    date: "2026-03-16",
    cover: "",
    pinned: true,
    eventDate: "2026-05-24",
    eventTime: "",
    eventPlace: "Paderno Dugnano",
    tags: ["musica", "banda palazzolo", "concerto"],
    excerpt: "Il concerto della banda di Palazzolo nel magnifico anfiteatro della Cava!",
    content: `
      <p>Come l'anno scorso e anche quello prima, suonerò al concerto della banda di Palazzolo</p>
      <p>Il luogo è bellissimo: l'anfiteatro della Cava di Paderno Dugnano. Il pubblico che verrà a sentirci potrà ascoltare la musica 
      e guardare il paesaggio suggestivo di quel meraviglio parco</p>
      <p>Il concerto è di pomeriggio e il mio consiglio è di arrivare al parco molto in anticipo per avere anche il tempo di fare una passeggiata e goderselo tutto.</p>
      <p>Per <strong>l'orario preciso</strong> ci saranno aggiornamenti su questa pagina (arriverà anche la locandina!)</p>
      <p>📅 24 Maggio 2026 · pomeriggio<br>📍 Paderno Dugnano, Anfiteatro Parco La Cava </p>
    `
  },

  { id: "pubblicazioni-smart-home",
    title: "La mia esperienza con la smart home",
    date: "2026-03-02",
    cover: "img/loghi/home_assistant_logo.png",
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
    tags: ["musica", "doremitici", "evento"],
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

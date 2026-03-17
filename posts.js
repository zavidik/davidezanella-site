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

  {
    id: "concerto-estate-cusano-2026",
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
      <p>📅 20 Giugno 2026 · ore 21:00<br>📍 Cusano Milanino</p>
    `
  },

  {
    id: "concerto-palazzolo-cava-2026",
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
      <p>📅 24 Maggio 2026 · pomeriggio<br>📍 Paderno Dugnano, Anfiteatro Parco La Cava </p>
    `
  },

  {
    id: "pubblicazioni-smart-home",
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

  {
    id: "doremitici-serata-gruppo-missionario",
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
        <a href="https://davidezanella.altervista.org/wp-content/DoReMitici/events/2026-02-18_Serata_gruppo_missionario/index.php">clicca qui</a>.</p>
      <p>Noi abbiamo suonato 3 brani: Gabriel's Oboe, Schiindler's List, Dolce Sentire.</p>
      <p>Suonare quelle musiche non è semplice perché ci vuole un buon controllo del suono nelle dinamiche come il piano e il pianissimo.
         Ho registrato con il mio microfono e riascoltando sono contento del risultato.
      </p>
    `
  },

];

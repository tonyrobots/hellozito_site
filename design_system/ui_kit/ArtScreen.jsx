// Art — same card+drawer pattern, EXCEPT Drawings opens a proper navigable gallery.

const ART_PROJECTS = [
  {
    id: 'drawings', title: 'Drawings', period: '2020 — ongoing', count: '42 pieces',
    color: 'var(--c-art)',
    coverImg: '../../assets/drawings/22_moon eels_1200px.jpg',
    blurb: 'Small ink drawings I make to keep my hands busy. Titles are not optional.',
    detail: '42 and counting. Each one starts as a doodle on a hotel notepad or the back of an envelope, gets a title later, and ends up scanned. The titles are how the world enters: "the moon eels are leaving," "computers are made of rocks," "may your aim be cosmic and true." Sometimes I think the titles are the project and the drawings are the supporting material.',
    tags: ['drawings','ink','daily'],
    kind: 'gallery',   // <— signals "open the drawings gallery, not the standard drawer"
  },
  {
    id: 'p5js', title: 'Generative sketches', period: '2021 — 2022', count: '3 sketches',
    color: 'var(--cobalt)', coverLabel: 'p5.js · suspensions',
    gallery: [{label:'suspensions'},{label:'fatty squiggler'},{label:'falling cones'}],
    blurb: 'p5.js / OpenProcessing experiments. Wandering shapes that don\u2019t mind being looked at.',
    detail: 'Three small generative pieces published on OpenProcessing: suspensions, fatty squiggler, and falling cones. Each is a single loop, run forever, with parameters set by hand until the thing looked right. They are not interactive. They are meant to be left running.',
    tags: ['generative','p5js','code'],
    href: 'https://openprocessing.org/user/263076',
  },
  {
    id: 'angelbaby', title: 'Angel Baby Gets a Hamburger', period: '2014 — 2019', count: 'twitter',
    color: 'var(--flamingo)', coverLabel: 'angel baby · 2017',
    gallery: [{label:'001 / 2014'},{label:'200 / 2016'},{label:'500 / 2018'},{label:'final / 2019'}],
    blurb: 'A Twitter project. A small angel baby got a hamburger, daily, for years.',
    detail: 'Every day for almost five years, on a Twitter account I controlled, a small angel baby got a hamburger. The hamburger was different every day. The angel baby was the same. The project was approximately the size and shape of a poem. It ended when Twitter stopped feeling like the right place for the angel baby.',
    tags: ['twitter','daily','small'],
  },
  {
    id: 'truisms', title: 'Truisms for an Airbnb', period: '2023', count: 'concept',
    color: 'var(--tangerine)', coverLabel: 'truism · n°6',
    gallery: [{label:'n°1'},{label:'n°2'},{label:'n°3'},{label:'installed in unit B'}],
    blurb: 'A conceptual project. Jenny-Holzer-shaped truths, written for the specific Airbnb you happen to be staying in.',
    detail: 'A small framed series of truisms hand-set in display caps, written specifically for the apartment you have rented for the week. The truisms address the kitchen, the bathroom, the upstairs neighbor, the noise the heater makes. They are real, and they are hung in real Airbnbs. The host gets a discount on their cleaning service in exchange.',
    tags: ['concept','print','installation'],
  },
  {
    id: 'prints', title: 'Prints & zines', period: 'misc', count: 'whatever',
    color: 'var(--teal)', coverLabel: 'riso · zine 04',
    gallery: [{label:'zine 01'},{label:'zine 02'},{label:'poster series'}],
    blurb: 'Whatever ended up at the riso shop. Small editions, given away mostly, mailed sometimes.',
    detail: 'A loose archive of risograph prints and small zines made on demand over the past decade. Editions range from twelve to a hundred. None of them are for sale. Most of them have ended up on refrigerators.',
    tags: ['print','riso','zine'],
  },
];

function ArtScreen() {
  const [open, setOpen] = React.useState(null);

  return (
    <main className="container section">
      <div className="section-head">
        <h2 className="section-title">art</h2>
        <p className="section-blurb">five projects, related sideways. each one opens into a small world of its own.</p>
      </div>
      <div className="project-grid">
        {ART_PROJECTS.map((p) => <ProjectCard key={p.id} item={p} onClick={setOpen} />)}
      </div>

      {/* Drawings uses the custom navigable gallery; the rest use the shared drawer. */}
      {open && open.kind === 'gallery'
        ? <DrawingsGallery onClose={() => setOpen(null)} />
        : <ProjectDrawer item={open} onClose={() => setOpen(null)} />
      }
    </main>
  );
}

window.ArtScreen = ArtScreen;

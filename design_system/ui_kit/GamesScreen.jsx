// Games — same card+drawer pattern.

const GAMES = [
  {
    id: 'blerx', title: 'Blerx!', period: 'active · 2021', count: '2-8 players',
    color: 'var(--flamingo)', coverLabel: 'blerx · lobby',
    gallery: [{label:'lobby'},{label:'round'},{label:'reveal'}],
    blurb: 'A social game about making up things, kindly, about other people.',
    detail: 'Blerx is played in living rooms, group chats, and one wedding. Two to eight players, ten minutes a round, free to play with no account. The mechanic is intentionally simple: you say a thing that\u2019s sort-of-true about someone you know. The game is what happens after.',
    tags: ['social','party','free'],
    href: 'https://www.blerx.net',
  },
  {
    id: 'legendmaps', title: 'Legend Maps', period: 'active · 2022', count: 'multiplayer',
    color: 'var(--c-writing)', coverLabel: 'legend maps · editor',
    gallery: [{label:'home'},{label:'editor'},{label:'shared map'}],
    blurb: 'Make your own treasure maps with friends, real or imaginary.',
    detail: 'A collaborative map-making tool that feels more like passing a piece of paper around than using software. Used by D&D groups, elementary-school teachers, and people who just like making maps.',
    tags: ['collab','tool','maps'],
    href: 'https://legendmaps.io',
  },
  {
    id: 'worderly', title: 'Worderly', period: 'daily · 2020', count: '5 letters',
    color: 'var(--marigold)', coverLabel: 'worderly · daily',
    gallery: [{label:'daily puzzle'},{label:'win screen'}],
    blurb: 'A small 5-letter word game. Played by your mom and mine.',
    detail: 'A daily word game I built in 2020. Free, no account, no analytics, no microtransactions. Plays in about a minute. A few thousand people play it every day.',
    tags: ['daily','words','solo'],
  },
  {
    id: 'tumblewords', title: 'Tumblewords', period: 'daily · 2021', count: '5 & 4 letters',
    color: 'var(--tangerine)', coverLabel: 'tumblewords',
    gallery: [{label:'tumblewords'},{label:'tumblewords lite'}],
    blurb: '5-letter Tumblewords + 4-letter Tumblewords Lite. Same game, lower stakes.',
    detail: 'A variant of the word-game format with a different scoring mechanic. Tumblewords Lite is the four-letter version for people who want it shorter.',
    tags: ['daily','words','solo'],
  },
  {
    id: 'itch', title: 'itch.io archive', period: 'misc', count: 'experiments',
    color: 'var(--cobalt)', coverLabel: 'itch.io',
    gallery: [{label:'jam entry 01'},{label:'prototype 02'},{label:'thing about cows'}],
    blurb: 'Smaller experiments, prototypes, jam entries, and a thing about cows.',
    detail: 'The catch-all archive of things I have made and haven\u2019t given their own page. Includes one game-jam entry, a couple of prototypes that never quite came together, and a thing about cows.',
    tags: ['archive','misc'],
    href: 'https://tonyrobots.itch.io/',
  },
];

function GamesScreen() {
  const [open, setOpen] = React.useState(null);
  return (
    <main className="container section">
      <div className="section-head">
        <h2 className="section-title">games</h2>
        <p className="section-blurb">small games, mostly social, mostly free. the kind you play once and forward to a friend.</p>
      </div>
      <div className="project-grid">
        {GAMES.map((g) => <ProjectCard key={g.id} item={g} onClick={setOpen} />)}
      </div>
      <ProjectDrawer item={open} onClose={() => setOpen(null)} />
    </main>
  );
}

window.GamesScreen = GamesScreen;

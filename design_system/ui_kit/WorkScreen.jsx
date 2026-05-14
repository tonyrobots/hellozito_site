// Work — card grid + drawer w/ gallery (shared pattern).

const WORK = [
  {
    id: 'legendmaps', title: 'Legend Maps', period: '2022 — now', role: 'Founder / designer / engineer',
    color: 'var(--c-work)', coverLabel: 'legend maps · cover',
    gallery: [{label:'home'},{label:'editor'},{label:'detail'}],
    blurb: 'A tool for making your own treasure maps with friends — real or imaginary. The kind of thing that makes a user feel less alone.',
    detail: 'I started Legend Maps because I wanted a piece of software that felt like a kitchen table, not a kiosk. Two people sit down with a fake map and start making things up. The product is a thin shell around that conversation. We launched in early 2023, picked up a small loyal audience of D&D groups and elementary-school teachers, and have been quietly iterating ever since.',
    tags: ['product','design','code','games'],
    href: 'https://legendmaps.io',
  },
  {
    id: 'blerx', title: 'Blerx!', period: '2021 — 2023', role: 'Maker',
    color: 'var(--c-music)', coverLabel: 'blerx · cover',
    gallery: [{label:'lobby'},{label:'round'},{label:'reveal'}],
    blurb: 'A social game about making things up about other people, kindly. Played in living rooms, group chats, and one wedding.',
    detail: 'Blerx is a multiplayer prompt game I designed and built solo over a year of nights and weekends. The mechanic is intentionally simple: you say a thing that\u2019s sort-of-true about someone you know. The game is what happens after.',
    tags: ['games','social','solo'],
  },
  {
    id: 'bigtech', title: 'A communications product at scale', period: '2014 — 2019', role: 'Principal Product Designer',
    color: 'var(--cobalt)', coverLabel: 'redacted',
    gallery: [{label:'messaging'},{label:'identity'},{label:'calling'}],
    blurb: 'Five years of communication products. Several patents I can\u2019t talk about. A few thousand human-shaped decisions in a row.',
    detail: 'I spent five years as a principal designer on a product used by tens of millions of people per day. The work spanned messaging, calling, and identity — small decisions about how strangers introduce themselves to each other through a screen.',
    tags: ['strategy','scale','identity'],
  },
  {
    id: 'consultancy', title: 'A quiet consultancy', period: '2010 — 2014', role: 'Partner',
    color: 'var(--tangerine)', coverLabel: 'misc clients',
    gallery: [{label:'project 01'},{label:'project 02'},{label:'project 03'}],
    blurb: 'Helping early-stage teams figure out what they were actually making.',
    detail: 'For four years I partnered with founders at the seed stage. Sometimes the job was a prototype. Sometimes it was a hard conversation about whether the product they were describing was really what they wanted to build. The work was deliberately small in scope and high in trust.',
    tags: ['advisory','prototyping','strategy'],
  },
  {
    id: 'worderly', title: 'Worderly · Tumblewords', period: '2020 — 2022', role: 'Solo',
    color: 'var(--marigold)', coverLabel: 'word games',
    gallery: [{label:'worderly'},{label:'tumblewords'}],
    blurb: 'Daily word games at 5 and 4 letters. Free, no analytics, played by my mom.',
    detail: 'Two small daily word games I built during 2020 and the year after. Both have been online ever since with essentially no maintenance. A few thousand people play them every day.',
    tags: ['games','solo','daily'],
  },
  {
    id: 'musicstartup', title: 'A music startup', period: '2007 — 2010', role: 'Founding designer',
    color: 'var(--flamingo)', coverLabel: 'circa 2008',
    gallery: [{label:'discovery'},{label:'profile'},{label:'messaging'}],
    blurb: 'A thing for musicians to find each other. It didn\u2019t work. I learned a lot.',
    detail: 'My first full-time design job. I was employee number two at a startup trying to build a social network for musicians. We made it about three years and shipped a handful of things people genuinely liked, but never figured out the business.',
    tags: ['founding','music','social'],
  },
];

function WorkScreen() {
  const [open, setOpen] = React.useState(null);
  return (
    <main className="container section">
      <div className="section-head">
        <h2 className="section-title">work</h2>
        <p className="section-blurb">two decades of products, with a few embarrassments redacted. tap any one for the longer version.</p>
      </div>
      <div className="project-grid">
        {WORK.map((w) => <ProjectCard key={w.id} item={w} onClick={setOpen} />)}
      </div>
      <ProjectDrawer item={open} onClose={() => setOpen(null)} />
    </main>
  );
}

window.WorkScreen = WorkScreen;

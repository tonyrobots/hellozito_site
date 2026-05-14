// Writing — list of essays/notes with dates + tags. Each opens a long-form page.

const ESSAYS = [
  { id: 'less-alone', title: 'A small theory of less-alone software', date: '2025-09-12', tags: ['manifesto','software'],
    teaser: 'Most software is fine. Some of it is even good. The pieces I love share a particular property.' },
  { id: 'emergence', title: 'Notes on emergence', date: '2025-03-04', tags: ['design','notes'],
    teaser: 'The best products leave a little room. The worst products are completely full.' },
  { id: 'rocks', title: 'Computers are made of rocks', date: '2024-10-19', tags: ['notes','tech'],
    teaser: 'A working theory: most of our problems with computers come from forgetting what they are made of.' },
  { id: 'kingelez', title: 'On Kingelez, and cardboard cities', date: '2024-05-30', tags: ['art','influence'],
    teaser: 'The fantastical city as a model for software architecture. Yes really.' },
  { id: 'twenty-years', title: 'Twenty years of products, give or take', date: '2023-12-31', tags: ['memoir','work'],
    teaser: 'A list of things I learned, in no particular order, with several embarrassments redacted.' },
];

function WritingScreen() {
  const [openEssay, setOpenEssay] = React.useState(null);

  return (
    <main className="container section">
      {!openEssay && (
        <>
          <div className="section-head">
            <h2 className="section-title">writing</h2>
            <p className="section-blurb">essays, notes, and one ongoing manifesto. tap a title for the long version.</p>
          </div>
          <div className="essay-list">
            {ESSAYS.map((e) => (
              <article key={e.id} className="essay-row" onClick={() => setOpenEssay(e)}>
                <div className="essay-meta">
                  <span className="essay-date">{e.date}</span>
                  <div className="essay-tags">{e.tags.map((t,i) => <span key={i} className="tag">{t}</span>)}</div>
                </div>
                <h3 className="essay-title">{e.title}</h3>
                <p className="essay-teaser">{e.teaser}</p>
              </article>
            ))}
          </div>
        </>
      )}

      {openEssay && (
        <article className="writing-page">
          <button className="essay-back" onClick={() => setOpenEssay(null)}>← back to writing</button>
          <div className="dateline">{openEssay.date} · {openEssay.tags.join(' · ')}</div>
          <h1 style={{fontFamily:'var(--font-display)',fontWeight:900,textTransform:'uppercase',letterSpacing:'-.015em',lineHeight:.88}}>
            {openEssay.title}
          </h1>
          <p style={{marginTop:24}}>
            {openEssay.teaser}
          </p>
          <p>That's the thesis. The rest is just trying to figure out how — and what follows here is a long, rambling, mostly-true attempt to do that.</p>
          <blockquote className="pull">The best interactive products make a user feel less alone. The rest is just software.</blockquote>
          <p>(More to be written. This UI kit is a clickable stub; the real essays will come from Tony directly.)</p>
        </article>
      )}
    </main>
  );
}

window.WritingScreen = WritingScreen;

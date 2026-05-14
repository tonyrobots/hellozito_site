// Home screen — the front door.

function HomeScreen({ onNavigate }) {
  return (
    <main>
      <section className="hero container">
        <div className="hero-eyebrow">a personal site · est. 1973, give or take</div>
        <h1 className="hero-wordmark">
          <span style={{color:'var(--c-accent-1)'}}>H</span>
          <span style={{color:'var(--c-accent-2)'}}>E</span>
          <span style={{color:'var(--c-accent-3)'}}>L</span>
          <span style={{color:'var(--c-accent-4)'}}>L</span>
          <span style={{color:'var(--c-accent-5)'}}>O</span>
          <span style={{color:'var(--marigold)'}}>,</span>
          <br/>
          <span className="zito-overlap">ZITO</span>
        </h1>
        <p className="hero-tagline">
          I'm Tony — a designer, sometime engineer, polymath give or take. I make products,
          drawings, games, music, and occasionally trouble. I believe the best interactive
          things make a user feel a little less alone.
        </p>
      </section>

      <section className="container-wide" style={{paddingTop: 0}}>
        <Skyline onNavigate={onNavigate} />
      </section>

      <section className="section container">
        <div className="section-head">
          <h2 className="section-title">currently</h2>
          <p className="section-blurb">a short, mostly-true list of what's on my desk this week.</p>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 24}}>
          {[
            ['building', 'a tool for making your own crosswords, with friends, badly.'],
            ['drawing',  'small ink things on hotel notepads. some are mounted to the wall above the printer.'],
            ['listening', 'a lot of the early ECM catalog. one Aphex song on loop. mean spirit\u2019d robots demos from 1997.'],
            ['reading',  'Kingelez, Soft City (Pushwagner), a stack of vintage Italian crate labels.'],
            ['thinking', 'about emergence, and why most software refuses to make space for it.'],
            ['avoiding', 'meetings that should have been a long, weird email.'],
          ].map(([k,v],i) => (
            <div key={i} style={{
              background:'var(--linen)',
              border:'2px solid var(--char)',
              padding:'16px 18px 18px',
            }}>
              <div className="eyebrow" style={{marginBottom:6, color:'var(--c-accent-1)', fontWeight:700}}>{k}</div>
              <div style={{fontFamily:'var(--font-body)', fontSize:15, lineHeight:1.45, color:'var(--char)'}}>{v}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

window.HomeScreen = HomeScreen;

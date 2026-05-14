// Music — mean spirit'd robots, 1990s relic, lovingly archived.

const TRACKS = [
  { no: '01', title: 'the only song we knew', len: '3:42' },
  { no: '02', title: 'autobahn (for losers)', len: '4:18' },
  { no: '03', title: 'something about ghosts', len: '2:55' },
  { no: '04', title: 'a small machine for crying', len: '5:09' },
  { no: '05', title: 'i guess this is fine', len: '3:27' },
  { no: '06', title: 'four-track demo no. 11', len: '6:14' },
  { no: '07', title: 'the second-to-last song', len: '3:33' },
];

function MusicScreen() {
  const [playing, setPlaying] = React.useState(null);

  return (
    <main className="container section">
      <div className="section-head">
        <h2 className="section-title">music</h2>
        <p className="section-blurb">a recovery project. a four-track band I had in the late 90s named “mean spirit'd robots”. these are demos, not products.</p>
      </div>

      <div className="music-deck">
        <div>
          <div className="music-cover">
            <div className="stripes"></div>
            <div className="band-name">mean<br/>spirit'd<br/>robots</div>
          </div>
          <div style={{marginTop: 18, display:'flex', flexDirection:'column', gap:6}}>
            <div style={{fontFamily:'var(--font-display)', fontWeight:800, textTransform:'uppercase', fontSize:14, letterSpacing:'.08em'}}>demo cassette · 1998</div>
            <div style={{fontFamily:'var(--font-mono)', fontSize:12, color:'var(--ink-faint)'}}>self-released · 50 copies · 7 of which still exist</div>
            <a href="https://soundcloud.com/mean-spiritd-robots" target="_blank" className="btn outline" style={{marginTop:10, alignSelf:'flex-start'}}>open on soundcloud →</a>
          </div>
        </div>
        <div className="track-list">
          {TRACKS.map((t,i) => (
            <div key={i} className={"track " + (playing === i ? 'playing' : '')}
                 onClick={()=> setPlaying(playing === i ? null : i)}>
              <div className="play-btn">{playing === i ? '■' : '▶'}</div>
              <div className="t-no">{t.no}</div>
              <div className="t-title">{t.title}</div>
              <div className="t-len">{t.len}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="caption-hand" style={{marginTop:24, textAlign:'center'}}>
        recorded mostly into a tascam 414, mostly at night, mostly in a basement in pittsburgh.
      </p>
    </main>
  );
}

window.MusicScreen = MusicScreen;

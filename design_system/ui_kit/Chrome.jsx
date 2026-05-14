// Shared chrome: nav, footer, wandering background.

const NAV_ITEMS = [
  { id: 'home',      label: 'home' },
  { id: 'work',      label: 'work' },
  { id: 'art',       label: 'art' },
  { id: 'games',     label: 'games' },
  { id: 'music',     label: 'music' },
  { id: 'writing',   label: 'writing' },
  { id: 'about',     label: 'about' },
];

function Nav({ current, onNavigate }) {
  return (
    <nav className="nav">
      <a className="nav-brand" href="#" onClick={(e)=>{e.preventDefault(); onNavigate('home');}}>
        <span className="dot"></span>
        hello, zito.
      </a>
      <div className="nav-links">
        {NAV_ITEMS.filter(i => i.id !== 'home').map(item => (
          <button
            key={item.id}
            className={"nav-link" + (current === item.id ? " active" : "")}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="nav-meta">{new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' }).toLowerCase()}</div>
    </nav>
  );
}

function Foot({ onNavigate }) {
  return (
    <footer className="foot">
      <div className="container">
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          <div style={{fontFamily:'var(--font-display)',fontWeight:900,textTransform:'uppercase',fontSize:24,lineHeight:1}}>
            hello, zito.
          </div>
          <div className="smalls">a personal site. handmade. give or take.</div>
        </div>
        <div style={{display:'flex',gap:24,flexWrap:'wrap'}}>
          <a href="https://github.com/tonyrobots/" target="_blank">github</a>
          <a href="https://linkedin.com/in/tonyzito" target="_blank">linkedin</a>
          <a href="https://soundcloud.com/mean-spiritd-robots" target="_blank">soundcloud</a>
          <a href="https://tonyrobots.itch.io/" target="_blank">itch.io</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); onNavigate('about');}}>say hi</a>
        </div>
      </div>
    </footer>
  );
}

// A wandering SVG ribbon — generative-feeling background flourish.
// Uses smooth random walk through a handful of control points,
// re-animates every ~14s.
function WanderingRibbon() {
  const ref = React.useRef(null);
  const [path, setPath] = React.useState('');
  const [color, setColor] = React.useState('#1F4FB6');
  const PALETTE = ['#1F4FB6','#E43D2B','#2E8B57','#F5B43A','#9B7BC9','#2BA8A0','#EE7A22'];

  React.useEffect(() => {
    let raf, t = 0;
    let pickedColor = PALETTE[Math.floor(Math.random()*PALETTE.length)];
    setColor(pickedColor);
    const W = window.innerWidth, H = window.innerHeight;
    const COUNT = 6;
    // Seed control points
    let pts = Array.from({length: COUNT}, (_,i) => ({
      x: (W/(COUNT-1)) * i,
      y: H * (0.3 + Math.random()*0.4),
      vy: (Math.random()-0.5)*0.4,
    }));
    const tick = () => {
      t += 0.012;
      pts.forEach((p, i) => {
        p.y += Math.sin(t + i*1.3) * 0.3 + p.vy;
        if (p.y < H*0.15) p.vy += 0.01;
        if (p.y > H*0.85) p.vy -= 0.01;
        p.vy *= 0.99;
      });
      // Build smooth cubic path
      let d = `M ${pts[0].x} ${pts[0].y}`;
      for (let i = 0; i < pts.length-1; i++) {
        const p1 = pts[i], p2 = pts[i+1];
        const cx1 = p1.x + (p2.x - p1.x)/2;
        const cx2 = p1.x + (p2.x - p1.x)/2;
        d += ` C ${cx1} ${p1.y}, ${cx2} ${p2.y}, ${p2.x} ${p2.y}`;
      }
      setPath(d);
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg className="wander-canvas" preserveAspectRatio="none" viewBox={`0 0 ${typeof window !== 'undefined' ? window.innerWidth : 1200} ${typeof window !== 'undefined' ? window.innerHeight : 800}`}>
      <path d={path} stroke={color} strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round"/>
      <path d={path} stroke={color} strokeWidth="14" fill="none" opacity="0.08" strokeLinecap="round"/>
    </svg>
  );
}

Object.assign(window, { Nav, Foot, WanderingRibbon, NAV_ITEMS });

// Whimsical city silhouettes — flat colored blocks with halftone.
// All buildings share a 320-unit-tall viewbox; the bottom of each shape sits at y=300.
// Labels are positioned INSIDE the building at the bottom by CSS (see styles.css).
// No outlines, no interior lines. Section color only.

// `labelFg` is the label color used inside the building (chosen for contrast).
//   bone label for dark/saturated buildings (teal, tomato, jade, lilac)
//   char label for light/warm buildings (marigold, flamingo)

const BUILDINGS = [
  /* WORK — the "factory" (former arcade-marquee shape) — teal */
  { id: 'work', section: 'work', color: 'var(--c-work)', labelFg: 'var(--bone)', w: 130, render: (c) => `
    <rect x="30" y="180" width="100" height="120" fill="${c}"/>
    <rect x="8" y="140" width="24" height="160" fill="${c}"/>
    <polygon points="20,128 25,138 30,128 25,118" fill="${c}"/>
    <circle cx="20" cy="125" r="6" fill="${c}"/>
    <rect x="36" y="172" width="88" height="10" fill="${c}"/>
    <circle cx="42" cy="170" r="4" fill="${c}"/>
    <circle cx="56" cy="170" r="4" fill="${c}"/>
    <circle cx="70" cy="170" r="4" fill="${c}"/>
    <circle cx="84" cy="170" r="4" fill="${c}"/>
    <circle cx="98" cy="170" r="4" fill="${c}"/>
    <circle cx="112" cy="170" r="4" fill="${c}"/>
  `},

  /* ART — museum with stepped base + dome — marigold */
  { id: 'art', section: 'art', color: 'var(--c-art)', labelFg: 'var(--char)', w: 140, render: (c) => `
    <rect x="10" y="280" width="120" height="20" fill="${c}"/>
    <rect x="18" y="260" width="104" height="20" fill="${c}"/>
    <rect x="22" y="180" width="96" height="80" fill="${c}"/>
    <polygon points="22,180 70,140 118,180" fill="${c}"/>
    <path d="M 53 140 A 17 17 0 0 1 87 140 Z" fill="${c}"/>
    <rect x="68" y="110" width="4" height="30" fill="${c}"/>
    <circle cx="70" cy="108" r="4" fill="${c}"/>
  `},

  /* GAMES — office tower with antenna — tomato. Shorter than before. */
  { id: 'games', section: 'games', color: 'var(--c-games)', labelFg: 'var(--bone)', w: 130, render: (c) => `
    <rect x="20" y="140" width="90" height="160" fill="${c}"/>
    <rect x="10" y="270" width="110" height="30" fill="${c}"/>
    <rect x="62" y="92" width="6" height="48" fill="${c}"/>
    <circle cx="65" cy="90" r="5" fill="${c}"/>
  `},

  /* MUSIC — concert hall with twin spires — flamingo */
  { id: 'music', section: 'music', color: 'var(--c-music)', labelFg: 'var(--char)', w: 130, render: (c) => `
    <rect x="15" y="180" width="100" height="120" fill="${c}"/>
    <polygon points="20,180 30,110 40,180" fill="${c}"/>
    <circle cx="30" cy="106" r="4" fill="${c}"/>
    <polygon points="90,180 100,110 110,180" fill="${c}"/>
    <circle cx="100" cy="106" r="4" fill="${c}"/>
    <polygon points="20,235 110,235 102,250 28,250" fill="${c}"/>
  `},

  /* WRITING — print shop with chimney (no smoke) — jade */
  { id: 'writing', section: 'writing', color: 'var(--c-writing)', labelFg: 'var(--bone)', w: 130, render: (c) => `
    <rect x="20" y="190" width="100" height="110" fill="${c}"/>
    <polygon points="20,190 70,150 120,190" fill="${c}"/>
    <rect x="90" y="160" width="14" height="36" fill="${c}"/>
    <rect x="86" y="156" width="22" height="6" fill="${c}"/>
  `},

  /* ABOUT — little house with flag — lilac */
  { id: 'about', section: 'about', color: 'var(--c-about)', labelFg: 'var(--bone)', w: 120, render: (c) => `
    <rect x="20" y="200" width="90" height="100" fill="${c}"/>
    <polygon points="14,200 30,160 100,160 116,200" fill="${c}"/>
    <rect x="63" y="125" width="4" height="40" fill="${c}"/>
    <polygon points="67,128 80,134 67,140" fill="${c}"/>
  `},
];

const BUILDING_VIEWBOX_H = 300;   // matches the bottom of every building shape — no empty footer

function CityBuilding({ b, onNavigate }) {
  return (
    <a
      href="#"
      className="city-building"
      onClick={(e) => { e.preventDefault(); onNavigate(b.section); }}
      style={{ width: b.w, '--building-color': b.color, '--label-fg': b.labelFg }}
      data-section={b.section}
      aria-label={b.section}
    >
      <svg
        viewBox={`0 0 ${b.w} ${BUILDING_VIEWBOX_H}`}
        width="100%"
        preserveAspectRatio="xMidYMax meet"
        dangerouslySetInnerHTML={{ __html: b.render(b.color) }}
      />
      <div className="city-label" style={{ color: b.labelFg }}>{b.section}</div>
    </a>
  );
}

function Skyline({ onNavigate }) {
  return (
    <div className="city">
      <div className="city-row">
        {BUILDINGS.map((b) => <CityBuilding key={b.id} b={b} onNavigate={onNavigate} />)}
      </div>
      <div className="city-groundline"></div>
    </div>
  );
}

Object.assign(window, { Skyline, BUILDINGS });

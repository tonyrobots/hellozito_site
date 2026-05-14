// Drawings — proper navigable gallery.
// Big stage + thumbnail strip + left/right arrows + keyboard nav + counter + title in marginalia voice.

const DRAWINGS = [
  { src: '../../assets/drawings/1_WFH_1200px.jpg', title: 'WFH', n: 1 },
  { src: '../../assets/drawings/2_grab the ring_X_1200px.jpg', title: 'grab the ring', n: 2 },
  { src: '../../assets/drawings/3_falling behind_1200px.jpg', title: 'falling behind', n: 3 },
  { src: '../../assets/drawings/4_certain_1200px.jpg', title: 'certain', n: 4 },
  { src: '../../assets/drawings/5_not this way_1200px.jpg', title: 'not this way', n: 5 },
  { src: '../../assets/drawings/6_pick a hand_1200px.jpg', title: 'pick a hand', n: 6 },
  { src: '../../assets/drawings/7_gold and diamonds_1200px.jpg', title: 'gold and diamonds', n: 7 },
  { src: '../../assets/drawings/8_pharaoh_1200px.jpg', title: 'pharaoh', n: 8 },
  { src: '../../assets/drawings/9_beautiful we love it_1200px.jpg', title: 'beautiful, we love it', n: 9 },
  { src: '../../assets/drawings/11_child child_1200px.jpg', title: 'child child', n: 11 },
  { src: '../../assets/drawings/12_go team_1200px.jpg', title: 'go team', n: 12 },
  { src: '../../assets/drawings/13_arrow of time_1200px.jpg', title: 'the arrow of time', n: 13 },
  { src: '../../assets/drawings/14_get your steps_1200px.jpg', title: 'get your steps', n: 14 },
  { src: '../../assets/drawings/15_okay okay_1200px.jpg', title: 'okay, okay', n: 15 },
  { src: '../../assets/drawings/16_free_1200px.jpg', title: 'free', n: 16 },
  { src: '../../assets/drawings/17_moving day_1200px.jpg', title: 'moving day', n: 17 },
  { src: '../../assets/drawings/18_your problems_1200px.jpg', title: 'your problems', n: 18 },
  { src: '../../assets/drawings/19_little brown bird_1200px.jpg', title: 'little brown bird', n: 19 },
  { src: '../../assets/drawings/20_bad fork_1200px.jpg', title: 'bad fork', n: 20 },
  { src: '../../assets/drawings/21_welcome_1200px.jpg', title: 'welcome', n: 21 },
  { src: '../../assets/drawings/22_moon eels_1200px.jpg', title: 'look the moon eels are leaving', n: 22 },
  { src: '../../assets/drawings/23_hamburguesa_1200px.jpg', title: 'hamburguesa', n: 23 },
  { src: '../../assets/drawings/24_forgot my phone_1200px.jpg', title: 'forgot my phone', n: 24 },
  { src: '../../assets/drawings/26_earth is plummeting_1200px.jpg', title: 'the earth is plummeting', n: 26 },
  { src: '../../assets/drawings/27_hang loose_1200px.jpg', title: 'hang loose', n: 27 },
  { src: '../../assets/drawings/28_free part 2_1200px.jpg', title: 'free, part 2', n: 28 },
  { src: '../../assets/drawings/29_four basic head shapes_1200px.jpg', title: 'the four basic head shapes', n: 29 },
  { src: '../../assets/drawings/30_supermarket sushi_1200px.jpg', title: 'supermarket sushi', n: 30 },
  { src: '../../assets/drawings/31_a wonderful time_1200px.jpg', title: 'a wonderful time', n: 31 },
  { src: '../../assets/drawings/32_come with us_1200px.jpg', title: 'come with us', n: 32 },
  { src: '../../assets/drawings/33_drawing of a cactus_1200px.jpg', title: 'drawing of a cactus', n: 33 },
  { src: '../../assets/drawings/34_spin again_1200px.jpg', title: 'spin again', n: 34 },
  { src: '../../assets/drawings/35_you will never be_1200px.jpg', title: 'you will never be', n: 35 },
  { src: '../../assets/drawings/36_poot_1200px.jpg', title: 'poot', n: 36 },
  { src: '../../assets/drawings/37_I took care of it_1200px.jpg', title: 'i took care of it', n: 37 },
  { src: '../../assets/drawings/38_damn you leonard cohen_1200px.jpg', title: 'damn you, leonard cohen', n: 38 },
  { src: '../../assets/drawings/39_may your aim be cosmic and true_1200px.jpg', title: 'may your aim be cosmic and true', n: 39 },
  { src: '../../assets/drawings/40_computers are made of rocks_1200px.jpg', title: 'computers are made of rocks', n: 40 },
  { src: '../../assets/drawings/41_save me_1200px.jpg', title: 'save me', n: 41 },
  { src: '../../assets/drawings/42_hairy ghosts_1200px.jpg', title: 'hairy ghosts', n: 42 },
];

function DrawingsGallery({ onClose }) {
  const [idx, setIdx] = React.useState(20);   // start on "moon eels", a nice one
  const stripRef = React.useRef(null);

  const go = (delta) => {
    setIdx((i) => {
      const n = (i + delta + DRAWINGS.length) % DRAWINGS.length;
      return n;
    });
  };

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')  go(-1);
      if (e.key === 'ArrowRight') go(+1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  // Scroll active thumb into view
  React.useEffect(() => {
    if (!stripRef.current) return;
    const active = stripRef.current.querySelector('.gthumb.active');
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [idx]);

  const d = DRAWINGS[idx];

  return (
    <div className="gallery-shell" onClick={onClose}>
      <header className="gallery-bar" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-meta">
          <span className="gallery-section">drawings</span>
          <span className="gallery-counter">{idx + 1} / {DRAWINGS.length}</span>
        </div>
        <button className="gallery-close" onClick={onClose} aria-label="Close">close ×</button>
      </header>

      <div className="gallery-stage" onClick={(e) => e.stopPropagation()}>
        <button className="gallery-arrow gallery-arrow-l" onClick={() => go(-1)} aria-label="Previous">←</button>
        <figure className="gallery-figure">
          <img src={d.src} alt={d.title} key={d.src} />
          <figcaption className="gallery-caption">
            <span className="gallery-no">N° {String(d.n).padStart(2,'0')}</span>
            <span className="gallery-title">{d.title}</span>
          </figcaption>
        </figure>
        <button className="gallery-arrow gallery-arrow-r" onClick={() => go(+1)} aria-label="Next">→</button>
      </div>

      <div className="gallery-strip" ref={stripRef} onClick={(e) => e.stopPropagation()}>
        {DRAWINGS.map((dr, i) => (
          <button
            key={i}
            className={"gthumb" + (i === idx ? " active" : "")}
            onClick={() => setIdx(i)}
            aria-label={dr.title}
            title={dr.title}
          >
            <img src={dr.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

window.DrawingsGallery = DrawingsGallery;

// Shared project drawer — used by Work, Art, Games.
// Renders: hero gallery (3+ screen placeholders) → meta → title → blurb → long writeup → tags.

function ProjectDrawer({ item, onClose }) {
  React.useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  // gallery is an array of {img, label} OR if absent, fall back to a single hero placeholder
  const gallery = item.gallery && item.gallery.length
    ? item.gallery
    : [{ img: item.coverImg || null, label: item.title }];

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside className="drawer" onClick={(e) => e.stopPropagation()}>
        <button className="drawer-close" onClick={onClose} aria-label="Close">×</button>

        <div className="drawer-gallery">
          {gallery.map((g, i) => (
            <div key={i} className="gallery-slide halftone" style={{background: item.color}}>
              {g.img
                ? <img src={g.img} alt={g.label || ''} />
                : <span className="shot-placeholder big">{g.label || 'screenshot'}</span>}
            </div>
          ))}
        </div>

        <div className="drawer-body">
          <div className="drawer-meta">
            {item.period && <span>{item.period}</span>}
            {item.role && <span>{item.role}</span>}
            {!item.role && item.count && <span>{item.count}</span>}
          </div>
          <h2 className="drawer-title">{item.title}</h2>
          {item.blurb && <p className="drawer-blurb">{item.blurb}</p>}
          {item.detail && <p className="drawer-detail">{item.detail}</p>}
          {item.tags && item.tags.length > 0 && (
            <div className="tag-row">
              {item.tags.map((t,i) => <span key={i} className="tag">{t}</span>)}
            </div>
          )}
          {item.href && (
            <a className="btn" href={item.href} target="_blank" rel="noreferrer">visit →</a>
          )}
        </div>
      </aside>
    </div>
  );
}

// Shared project card — used by Work, Art, Games.
function ProjectCard({ item, onClick }) {
  return (
    <article className="project-card" onClick={() => onClick(item)}>
      <div className="project-cover halftone" style={{background: item.color}}>
        {item.coverImg
          ? <img src={item.coverImg} alt="" />
          : <span className="shot-placeholder">{item.coverLabel || 'screenshot'}</span>}
      </div>
      <div className="project-body">
        <div className="project-meta">
          {item.period && <span>{item.period}</span>}
          {item.role && <span>{item.role}</span>}
          {!item.role && item.count && <span>{item.count}</span>}
        </div>
        <h3 className="project-title">{item.title}</h3>
        {item.blurb && <p className="project-blurb">{item.blurb}</p>}
        {item.tags && item.tags.length > 0 && (
          <div className="tag-row">
            {item.tags.slice(0,3).map((t,i) => <span key={i} className="tag">{t}</span>)}
          </div>
        )}
      </div>
    </article>
  );
}

Object.assign(window, { ProjectDrawer, ProjectCard });

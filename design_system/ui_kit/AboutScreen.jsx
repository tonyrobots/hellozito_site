// About — with rare easter-egg avatar.

function AboutScreen() {
  return (
    <main className="container section">
      <div className="section-head">
        <h2 className="section-title">about</h2>
        <p className="section-blurb">the short version. for the long version, write to me.</p>
      </div>

      <div className="about-grid">
        <div className="about-body">
          <p>I'm Tony Zito. I make products — for a living, and for fun, and the line between those is sometimes a problem.</p>

          <p>The professional side is product design and the things adjacent to it: tech architecture, decent coding intuitions, a stubborn business-strategy instinct that mostly only goes off when something is wrong. I have shipped a lot of software over twenty years, including some you've probably used. I won't list it here.</p>

          <p>The other side is small games, ink drawings, a 90s band called <em>mean spirit'd robots</em>, and a lifelong commitment to making things slightly weirder than the brief asked for.</p>

          <p>What ties it all together is the same idea: I'm interested in the seam between humans and machines, humans and other humans, humans and themselves. The best interactive products make space for emergence — they let you do things the designers didn't think of. They make a user feel less alone.</p>

          <p>I'm based on the East Coast, available for consulting and the occasional collaboration. <a href="mailto:hi@hellozito.com">hi@hellozito.com</a> is the front door.</p>
        </div>

        <aside className="about-portrait">
          <img src="../../assets/avatar.jpeg" alt="A small ink drawing of Tony, looking unconvinced." />
          <div className="caption">a self-portrait, sort of</div>

          <div className="facts">
            <div className="fact"><span className="k">est.</span><span>1973, give or take.</span></div>
            <div className="fact"><span className="k">based</span><span>east coast, USA.</span></div>
            <div className="fact"><span className="k">tools</span><span>figma, the terminal, a small notebook.</span></div>
            <div className="fact"><span className="k">also</span><span>cooking, vinyl, the moon.</span></div>
            <div className="fact"><span className="k">email</span><span><a href="mailto:hi@hellozito.com">hi@hellozito.com</a></span></div>
          </div>
        </aside>
      </div>
    </main>
  );
}

window.AboutScreen = AboutScreen;

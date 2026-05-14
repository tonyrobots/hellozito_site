function App() {
  const [screen, setScreen] = React.useState('home');

  // Scroll to top on screen change
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [screen]);

  const screens = {
    home:    <HomeScreen onNavigate={setScreen} />,
    work:    <WorkScreen />,
    art:     <ArtScreen />,
    games:   <GamesScreen />,
    music:   <MusicScreen />,
    writing: <WritingScreen />,
    about:   <AboutScreen />,
  };

  return (
    <div className="shell">
      <Nav current={screen} onNavigate={setScreen} />
      {screens[screen] || screens.home}
      <Foot onNavigate={setScreen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

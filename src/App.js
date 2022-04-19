import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Dictionary App
      </header>
      <main>
        <Dictionary />
      </main>
<footer className="App-footer">
  This page was coded by {" "}
  <a 
    href="https://keen-wing-9e9d53.netlify.app/" 
    target="_blank" 
    rel="noreferrer" 
    title="Front-end developer portfolio- Abby Szach">
    Abby Szach
    </a>
    {" "}and is open-sourced on {" "}
    <a 
      href="https://github.com/als11022/dictionary-project"
      target="_blank" 
      rel="noreferrer" 
      title="Github repository">
        Github 
      </a>
</footer>
      </div>
    </div>
  );
}

export default App;

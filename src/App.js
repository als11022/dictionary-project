import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        Dictionary App    
        <div>
          <img 
          src="https://img.icons8.com/external-filled-outline-satawat-anukul/64/000000/external-dictionary-education-filled-outline-filled-outline-satawat-anukul-2.png"
          className="App-logo"
          />
          </div>
      </header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
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
     <br /> 
     <small>
       <a target="_blank" href="https://icons8.com/icon/2V52pEwZ9acK/dictionary">
         Dictionary icon by Icons8
         </a>
         </small>
</footer>
      </div>
    </div>
  );
}

export default App;

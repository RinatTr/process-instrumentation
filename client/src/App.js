import './App.css';
import Controller from './components/views/Controller';
import Results from './components/views/Results';
import Term from './components/views/Term';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Dictionary</h1>
      </header>
      <main>
        <div className="container">
          <Controller />
          <Results />
          <Term />
        </div>
      </main>
      <footer className="App-footer">
        <p>Disclaimer: blah blah</p>
      </footer>
    </div>
  );
}

export default App;

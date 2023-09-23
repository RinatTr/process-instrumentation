import './App.css';
import fetchTerms from './API/fetchTerms'
import extractGroupNames from './helpers';
import { useEffect, useState } from "react";
import Header from './components/views/Header';
import Results from './components/views/Results';
import Term from './components/views/Term';


function App() {
  const [terms, setTerms] = useState([]);
  const [groups, setGroups] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    const loadTerms = async () => {
      const terms = await fetchTerms();
      setTerms(terms);
      setGroups(extractGroupNames(terms));

    };
    loadTerms();

  }, []);

  useEffect(() => {
    console.log(selectedGroup)
  },[selectedGroup])
  
//TODO: conditional render: Authorized / not
  return (
    <div className="App">
      <header className="App-header">
       <h1>Dictionary</h1>

      </header>
      <main>
        <div className="container">
          <Header 
              setSelectedGroup={setSelectedGroup}
              groups={groups}
            />
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

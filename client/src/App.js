import './App.css';
import fetchTerms from './API/fetchTerms'
import { extractGroupNames, extractModuleNames, filterByGroup, filterBySearchInput } from './consts';
import { useEffect, useState, useRef } from "react";
import Header from './components/views/Header';
import Results from './components/views/Results';
import Term from './components/views/Term';


function App() {

  const rawTerms = useRef([]);
  const groups = useRef([]);
  const modules = useRef([]);
  const searchedTermsCache = useRef([]);
    
  const [viewTerms, setViewTerms] = useState([]);
  const [populatedTerm, setPopulatedTerm] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(""); //initialValue set as disabled select option value
  const [selectedModule, setSelectedModule] = useState(""); //initialValue set as disabled select option value

  useEffect(() => {
    const loadTerms = async () => {
      const responseData = await fetchTerms();
      rawTerms.current = responseData;
      searchedTermsCache.current = responseData;
      
      groups.current = extractGroupNames(responseData);
      modules.current = extractModuleNames(responseData);
    };
    loadTerms();
  }, []);

  useEffect(() => {
    //reset selectedGroup
    setSelectedGroup("");

    //execute search (filter by prefix) 
    let filtered = filterBySearchInput(rawTerms.current, searchInput)
    searchedTermsCache.current = filtered;

    setViewTerms(filterBySearchInput(rawTerms.current, searchInput))
  },[searchInput])
  
  useEffect(() => {
     //execute filter by group 
     if (searchInput.length) {
       setViewTerms(filterByGroup(searchedTermsCache.current, selectedGroup, groups.current))
      } 
  },[selectedGroup])

  const findAndSetTerm = (selectedTermID) => {
    let foundTerm = viewTerms.find(term => term.id === selectedTermID)
      setPopulatedTerm(foundTerm);
  }
//TODO: conditional render: Authorized / not

  return (
    <div className="App">
      <header className="App-header">
       <h1>Mechanical Engineering Dictionary</h1>

      </header>
      <main>
        <div className="container">
          <Header 
              groups={groups.current}
              modules={modules.current}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              selectedModule={selectedModule}
              setSelectedModule={setSelectedModule}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          <Results  
              terms={viewTerms} 
              sendTermID={findAndSetTerm} 
            />
          <Term termObj={populatedTerm} />
        </div>
      </main>
      <footer className="App-footer">
        <p>Disclaimer: blah blah</p>
      </footer>
    </div>
  );
}

export default App;

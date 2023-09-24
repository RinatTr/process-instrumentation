import './App.css';
import fetchTerms from './API/fetchTerms'
import { extractGroupNames, filterByGroup, filterBySearchInput } from './helpers';
import { useEffect, useState, useRef } from "react";
import Header from './components/views/Header';
import Results from './components/views/Results';
import Term from './components/views/Term';


function App() {

  const rawTerms = useRef([]);
  const groups = useRef([]);
  const searchedTermsCache = useRef([]);
    
  const [viewTerms, setViewTerms] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  useEffect(() => {
    const loadTerms = async () => {
      const responseData = await fetchTerms();
      rawTerms.current = responseData;
      searchedTermsCache.current = responseData;
      // setTerms(responseData);
      groups.current = extractGroupNames(responseData);
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

  console.log("fin",searchInput,viewTerms.length)
//TODO: conditional render: Authorized / not

  return (
    <div className="App">
      <header className="App-header">
       <h1>Dictionary</h1>

      </header>
      <main>
        <div className="container">
          <Header 
              groups={groups.current}
              selectedGroup={selectedGroup}
              setSelectedGroup={setSelectedGroup}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          <Results terms={viewTerms}/>
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

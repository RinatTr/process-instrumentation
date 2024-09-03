
import './App.css';
import fetchTerms from './API/fetchTerms'
import { extractGroupNames, extractModuleNames, filterByGroup, filterBySearchInput, filterByModule } from './consts';
import { useEffect, useState, useRef } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import Header from './components/views/Header';
import Results from './components/views/Results';
import Term from './components/views/Term';
import Disclaimer from './components/views/Disclaimer';

function App() {

  const rawTerms = useRef([]);
  const searchedTermsCache = useRef([]);
    
  const [viewTerms, setViewTerms] = useState([]);
  const [populatedTerm, setPopulatedTerm] = useState({});
  const [searchInput, setSearchInput] = useState("");
  const [groups, setGroups] = useState([]);
  const [modules, setModules] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(""); //initialValue set as disabled select option value
  const [selectedModule, setSelectedModule] = useState(""); //initialValue set as disabled select option value

  useEffect(() => {
    //Fetches and loads on first render
    const loadTerms = async () => {
      const responseData = await fetchTerms();
      rawTerms.current = responseData;
      searchedTermsCache.current = responseData;

      setGroups(extractGroupNames(responseData));
      setModules(extractModuleNames(responseData));
    };
    loadTerms();
  }, []);

  useEffect(() => {
    //Search Functionality
    //reset selected Group and Module
    setSelectedGroup("");
    setSelectedModule("");

    //reset term display
    if (!searchInput.length) {
      setPopulatedTerm({});
    }
    //execute search (filter by prefix) 
    let filtered = filterBySearchInput(rawTerms.current, searchInput)
    searchedTermsCache.current = filtered;

    setViewTerms(filterBySearchInput(rawTerms.current, searchInput))
  },[searchInput]);
  
  useEffect(() => {
     //execute filter by group 
       setViewTerms(filterByGroup(searchedTermsCache.current, selectedGroup, groups))
  },[selectedGroup]);

  useEffect(() => {
     //execute filter by module
     setViewTerms(filterByModule(rawTerms.current, selectedModule, modules))
  },[selectedModule]);

  const findAndSetTerm = (selectedTermID) => {
    let foundTerm = viewTerms.find(term => term.id === selectedTermID)
      setPopulatedTerm(foundTerm);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>מונחי מכשור ובקרה בתעשיית תהליכים</h1>
        <h3>English-Hebrew</h3>
      </header>
      <main>
      {!rawTerms.current.length 
        ? <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} /> 
        : <div className="container">
            <Header 
                groups={groups}
                modules={modules}
                selectedGroup={selectedGroup}
                setSelectedGroup={setSelectedGroup}
                selectedModule={selectedModule}
                setSelectedModule={setSelectedModule}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            <Results  
                terms={viewTerms} 
                collectTermID={findAndSetTerm} 
              />
            <Term termObj={populatedTerm} />
          </div>}  
      </main>
      <links>
        <div><a href={"https://www.youtube.com/watch?v=_dbtlDc0dY4"} target="_blank" rel="noreferrer" className="youtube-link"><span>הצצה לתכני קורס מכשור ובקרה</span></a></div>
        <div><a href={"https://www.youtube.com/watch?v=do2pCSqg-ik"} target="_blank" rel="noreferrer" className="youtube-link"><span>מדריך למשתמש באתר (לצפייה)</span></a></div>
      </links>
      <footer className="App-footer">
        <Disclaimer />
      </footer>
    </div>
  );
}

export default App;

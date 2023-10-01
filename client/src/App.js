import './App.css';
import fetchTerms from './API/fetchTerms'
import { extractGroupNames, extractModuleNames, filterByGroup, filterBySearchInput, filterByModule } from './consts';
import { useEffect, useState, useRef } from "react";
import Header from './components/views/Header';
import Results from './components/views/Results';
import Term from './components/views/Term';


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
        <h1>Process Instrumentation Vocabulary</h1>
      </header>
      <main>
      {!rawTerms.current.length 
        ? <h1>Loading...</h1> 
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
      <footer className="App-footer">
        <p dir="auto"> Disclaimer: The content presented on this website is intended solely for explanatory and informational purposes and should not be considered professional advice. Users must understand that any utilization of the information provided in this dictionary is done at their own risk and responsibility. The contents of the dictionary should not be regarded as a substitute for seeking guidance from a qualified expert in the field for precise interpretation and appropriate application to specific situations. In the event of any uncertainty or difference of opinion arising from the use of this content, we strongly recommend consulting a qualified expert for professional advice.

Our company disclaims any responsibility for any damages or losses that may occur as a result of relying on or using the information provided in this dictionary. We do not commit to updating the content after it has been posted, and over time, the information presented may become outdated or irrelevant. By using this website or the information contained within it, you acknowledge that you release our company from any claims or demands related to the usage of the dictionary content. For inquiries regarding usage, please contact the site administrator.</p>
      </footer>
    </div>
  );
}

export default App;

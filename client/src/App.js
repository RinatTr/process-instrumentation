
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
        <h1>מונחי מכשור ובקרה בתעשיית תהליכים</h1>
        <h3>English-Hebrew</h3>
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
        <p dir="auto">
          <strong>הסרת אחריות: </strong>
           התוכן הנמסר באתר הוא למטרת הסבר והכרה בלבד ואינו מהווה ייעוץ מקצועי. יש להבין כי שימוש במידע
מובא בתוך המילון, באופן כלשהו, נעשה על אחריות המשתמש בלבד.
אין לראות בתוכן המילון חלופה לייעוץ מקצועי או לייעוץ טכני עם מומחה מוסמך בתחום הגיוס לשימוש
בקריאה מדויקת והיערכות מדויקת של הסיטואציה. בכל מקרה של ספק או הבעת דעה המתעוררת בעקבות
שימוש בתוכן זה, מומלץ לפנות למומחה מוסמך או לייעוץ מקצועי.
החברה אינה אחראית לנזקים או הפסדים שעלולים להיגרם כתוצאה משימוש או הסתמכות על המידע
המובא בתוך המילון. החברה אינה מתחייבת לעדכון התוכן לאחר מילויו, ויכול להיות כי המידע המובא כאן
יחלש בזמן או יהיה לא רלוונטי.
שימוש באתר או המידע הנמסר בו מהווה הסכמה להסרת האחריותנו מכל תביעה או דרישה כלפי החברה
בקשר לשימוש כלשהו בתוכן המילון. לצורך בדיקת שימוש כלשהו נדרש לפנות למנהל האתר.</p>
      </footer>
    </div>
  );
}

export default App;

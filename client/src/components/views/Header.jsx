import { useState } from "react";
import Dropdown from "./Dropdown";
import Input from "./Input";

const Header = ({   groups, 
                    modules, 
                    selectedGroup, 
                    setSelectedGroup, 
                    selectedModule, 
                    setSelectedModule, 
                    searchInput, 
                    setSearchInput}) => {
    
    const [isSearch, setIsSearch] = useState(true);
    const [isModule, setIsModule] = useState(false);
    
    const handleSearchClick = () => {
        setIsModule(false)
        setIsSearch(true)
    }

    const handleModuleClick = () => {
        console.log("here")
        setIsSearch(false)
        setIsModule(true)
    }
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <div className="header-selector-container">
                    <div onClick={handleSearchClick} className={`selector search-filter${isSearch ? " selected" : ""}`}></div>
                    <Input 
                        value={searchInput}
                        setInput={setSearchInput} 
                        isDisabled={isModule}
                    />
                    <Dropdown 
                        label={"Filter by group"}
                        options={groups}
                        value={selectedGroup}
                        setSelected={setSelectedGroup} 
                        isDisabled={isModule || !searchInput.length}
                    /> 
                </div>
                <div className="header-selector-container">
                    <div onClick={handleModuleClick} className={`selector module-filter${isModule ? " selected" : ""}`}></div>   
                    <Dropdown 
                        label={"View by Module"}
                        options={modules}
                        value={selectedModule}
                        setSelected={setSelectedModule} 
                        isDisabled={isSearch}
                    /> 
                </div>
            </div>
        </div>
    )
}

export default Header;
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
    return (
        <div className="header-container">
            <Input 
                value={searchInput}
                setInput={setSearchInput} 
               />
            <Dropdown 
                label={"Filter by group"}
                options={groups}
                value={selectedGroup}
                setSelected={setSelectedGroup} 
                isDisabled={!searchInput.length}
               /> 
             <Dropdown 
                label={"Filter by Module"}
                options={modules}
                value={selectedModule}
                setSelected={setSelectedModule} 
                isDisabled={!searchInput.length}
               /> 
        </div>
    )
}

export default Header;
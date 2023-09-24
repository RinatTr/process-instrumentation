import Dropdown from "./Dropdown";
import Input from "./Input";

const Header = ({groups, selectedGroup, setSelectedGroup, searchInput, setSearchInput}) => {
    return (
        <div>
            <Input 
                value={searchInput}
                setInput={setSearchInput} 
               />
               
            <Dropdown 
                label={"Filter by group"}
                options={groups}
                value={selectedGroup}
                setSelected={setSelectedGroup} 
               />
        </div>
    )
}

export default Header;
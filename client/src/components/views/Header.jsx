import Dropdown from "./Dropdown";
import Input from "./Input";

const Header = ({groups, setSelectedGroup, searchInput, setSearchInput}) => {
    return (
        <div>
            <Input 
                value={searchInput}
                setInput={setSearchInput} 
               />
            <Dropdown 
                label={"Filter by"}
                options={groups}
                setSelected={setSelectedGroup} 
               />
        </div>
    )
}

export default Header;
import Dropdown from "./Dropdown";

const Header = ({groups, setSelectedGroup}) => {
    return (
        <div>
            <Dropdown 
                label={"Select Group"}
                options={groups}
                setSelected={setSelectedGroup} 
                />
        </div>
    )
}

export default Header;
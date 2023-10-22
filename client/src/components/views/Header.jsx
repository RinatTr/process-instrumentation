import { useState } from "react";
import { Space, Radio } from 'antd';
import DropdownWrapper from "./DropdownWrapper";
import InputWrapper from "./InputWrapper";

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
        setIsSearch(false)
        setIsModule(true)
    }
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <Space direction="horizontal" className="header-selector-container">
                    <Radio onChange={handleSearchClick} checked={isSearch}/>
                    <InputWrapper 
                        value={searchInput}
                        setInput={setSearchInput} 
                        isDisabled={isModule}
                        options={groups}
                        valueGroup={selectedGroup}
                        setSelected={setSelectedGroup} 
                        isDisabledGroup={isModule || !searchInput.length}
                    />
                </Space>
                <span className="divider" margin={"20px"}>OR</span>
                <Space className="header-selector-container">   
                    <Radio onChange={handleModuleClick} checked={isModule}/>   
                        <DropdownWrapper 
                            label={"filter by module"}
                            options={modules}
                            value={selectedModule}
                            setSelected={setSelectedModule} 
                            isDisabled={isSearch}
                        /> 
                </Space>
            </div>
        </div>
    )
}

export default Header;
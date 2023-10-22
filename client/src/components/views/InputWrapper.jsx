import '../../Field.css';
import DropdownWrapper from "./DropdownWrapper";
import { Input } from 'antd';
/**
 * Renders a dropdown element.
 * @param {<!Array<string>} options - The select options.
 * @param {string} label - The text label for the drop down element.
 * @param {number} value - The value of the dropdown.
 * @param {Function} setSelected - A callback to update user selection.
 * @return {!React.ReactElement}
 */

const InputWrapper = ({ value, setInput, isDisabled, options, valueGroup, setSelected, isDisabledGroup }) => {
    const handleChange = (e) => {
      setInput(e.target.value);
    };

    return (
        <Input 
          size={"large"}
          disabled={isDisabled} 
          value={value}  
          placeholder="Type term..."
          name="Search" 
          onChange={(e) => handleChange(e)}
          addonAfter={<DropdownWrapper
                        options={options}
                        value={valueGroup}
                        label={"type to filter by group"}
                        setSelected={setSelected} 
                        isDisabled={isDisabledGroup} 
                      />}
        />
    );
  };
  
  export default InputWrapper;
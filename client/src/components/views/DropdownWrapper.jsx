import '../../Field.css';
import { Select } from 'antd';
/**
 * Renders a dropdown element.
 * @param {<!Array<string>} options - The select options.
 * @param {string} label - The text label for the drop down element.
 * @param {number} value - The value of the dropdown.
 * @param {Function} setSelected - A callback to update user selection.
 * @return {!React.ReactElement}
 */

 const { Option } = Select; 

 const DropdownWrapper = ({ value, options, label, setSelected, isDisabled}) => {
    const handleChange = (value) => {
      setSelected(value);
    };

    
    return (
        <Select
          disabled={isDisabled} 
          onChange={(value) => handleChange(value)}
          value={value}
          size={"large"}
          className={"field"}
        >
          <Option value="" disabled>{label}</Option>
          {options.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </Select>
    );
  };
  
  export default DropdownWrapper;
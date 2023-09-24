import '../../Field.css';
/**
 * Renders a dropdown element.
 * @param {<!Array<string>} options - The select options.
 * @param {string} label - The text label for the drop down element.
 * @param {number} value - The value of the dropdown.
 * @param {Function} setSelected - A callback to update user selection.
 * @return {!React.ReactElement}
 */

 const Dropdown = ({ value, options, label, setSelected, isDisabled}) => {
    const handleChange = (e) => {
      setSelected(e.target.value);
    };

    return (
      <div className="field dropdown">
        <label>{label}</label>
        <select
          disabled={isDisabled} 
          onChange={(e) => handleChange(e)}
          className="field-style custom-select"
          value={value}
        >
          <option value="" disabled>-select an option-</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Dropdown;
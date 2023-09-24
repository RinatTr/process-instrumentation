import '../../Field.css';
/**
 * Renders a dropdown element.
 * @param {<!Array<string>} options - The select options.
 * @param {string} label - The text label for the drop down element.
 * @param {number} value - The value of the dropdown.
 * @param {Function} setSelected - A callback to update user selection.
 * @return {!React.ReactElement}
 */

 const Dropdown = ({ options, label, setSelected}) => {
    const onChange = (e) => {
      setSelected(e.target.value);
    };
  
    return (
      <div className="field dropdown">
        <label>{label}</label>
        <select
          onChange={(e) => onChange(e)}
          className="custom-select field-style"
        >
          <option value="" disabled selected >-select group-</option>
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
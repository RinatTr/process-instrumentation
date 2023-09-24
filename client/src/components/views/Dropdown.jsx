import '../../Field.css';
/**
 * Renders a dropdown element.
 * @param {<!Array<string>} options - The select options.
 * @param {string} label - The text label for the drop down element.
 * @param {number} value - The value of the dropdown.
 * @param {Function} setSelected - A callback to update user selection.
 * @return {!React.ReactElement}
 */

 const Dropdown = ({ value, options, label, setSelected}) => {
    const handleChange = (e) => {
      setSelected(e.target.value);
    };

    const reset = () => {
      setSelected("")
    }

    return (
      <div className="field dropdown">
        <label>{label}</label>
        <select
          onChange={(e) => handleChange(e)}
          className="custom-select field-style"
          value={value}
        >
          <option value="" disabled selected >-select-</option>
          {options.map((option, index) => (
            <option key={index} value={option} selected>
              {option}
            </option>
          ))}
        </select>
        <button onClick={() => reset()}>reset</button>
      </div>
    );
  };
  
  export default Dropdown;
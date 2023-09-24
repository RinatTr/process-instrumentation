import '../../Field.css';
/**
 * Renders a dropdown element.
 * @param {<!Array<string>} options - The select options.
 * @param {string} label - The text label for the drop down element.
 * @param {number} value - The value of the dropdown.
 * @param {Function} setSelected - A callback to update user selection.
 * @return {!React.ReactElement}
 */

 const Input = ({ value, setInput }) => {
    const onChange = (e) => {

      setInput(e.target.value);
    };
  
    return (
      <div className="field input">
        <label>Search</label>
        <input value={value} className="field-style" name="Search" onChange={(e) => onChange(e)}/>
      </div>
    );
  };
  
  export default Input;
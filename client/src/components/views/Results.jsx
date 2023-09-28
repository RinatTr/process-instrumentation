const Results = ({collectTermID, terms}) => {
    const isOdd = (num) => {
        return num % 2 !== 1;
    }
    const handleClick = (id) => {
        collectTermID(id);
      }
    return (
        <div className="results-wrapper">
            <div className="results-container">
                {terms.map((term, i) => { 
                    return <span onClick={() => handleClick(term.id)} key={term.id} className={`results-row${isOdd(i) ? " odd" : ""}`}>{term["term_en"]}</span> 
                })}
            </div>
        </div>
    )
}

export default Results;
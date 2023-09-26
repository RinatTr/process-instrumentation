const Results = ({terms}) => {
    const isOdd = (num) => {
        return num % 2 !== 1;
    }
    return (
        <div className="results-wrapper">
            <div className="results-container">
                {terms.map((term, i) => { 
                    return <span className={`results-row${isOdd(i) ? " odd" : ""}`}>{term["term_en"]}</span> 
                })}
            </div>
        </div>
    )
}

export default Results;
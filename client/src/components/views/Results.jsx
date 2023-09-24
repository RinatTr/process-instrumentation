const Results = ({terms}) => {
    return (
        <div className="results">
            {terms.map((term) => <span>{term["term_en"]}</span>)}
        </div>
    )
}

export default Results;
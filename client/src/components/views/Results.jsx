const Results = ({terms}) => {
    return (
        <div>
            {terms.map((term) => <span>{term["term_en"]}</span>)}
        </div>
    )
}

export default Results;
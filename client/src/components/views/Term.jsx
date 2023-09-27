const Term = ({termObj}) => {
  console.log(termObj)
  return (
      <div className="term-wrapper">
        { termObj.id !== undefined ? 
          (
           <div className="term-container">
            <div className="group-name">{`${termObj["group_en"]} | ${termObj["presentation_ID"]}`}</div>
            <div className="term-en">{termObj["term_en"]}</div>
            <div className="term-heb">{termObj["term_heb"]}</div>
            <div className="definition">{termObj["definition_heb"]}</div>
          </div>
          ) : ""
          }       
      </div>
  )
}

export default Term;
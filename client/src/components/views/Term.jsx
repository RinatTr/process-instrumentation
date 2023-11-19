import { GROUP_KEY, TERM_EN_KEY, TERM_HEB_KEY, DEFINITION_HEB_KEY, MODULE_KEY, URL_KEY } from '../../consts';

const Term = ({termObj}) => {
  return (
      <div className="term-wrapper">
        { termObj.id !== undefined ? 
          (
           <div className="term-container">
             <div className="term-header"> 
              <span className="group-name">{`${termObj[GROUP_KEY]}`}</span>
              <span className="presentation-id">{`Module: ${termObj[MODULE_KEY]}`}</span>
             </div>
             <div className="en-wrapper">
                <div className="term-en" dir="auto"><strong>{termObj[TERM_EN_KEY]}</strong></div>
             </div>
            <hr className="text-divider"/>
            <div className="heb-wrapper">
              { termObj[URL_KEY].length ?<a href={termObj[URL_KEY]} target="_blank" rel="noreferrer" className="pdf-icon"><span></span></a> : "" }
              <div className="term-heb" dir="auto">{termObj[TERM_HEB_KEY]}</div>
            </div>
            <hr className="text-divider"/>
            <div className="heb-wrapper">
              <div className="definition" dir="auto">{termObj[DEFINITION_HEB_KEY]}</div>
            </div>
          </div>
          ) : ""
          }       
      </div>
  )
}

export default Term;
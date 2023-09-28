import { GROUP_KEY, TERM_EN_KEY, TERM_HEB_KEY, DEFINITION_HEB_KEY, MODULE_KEY } from '../../consts';

const Term = ({termObj}) => {
  return (
      <div className="term-wrapper">
        { termObj.id !== undefined ? 
          (
           <div className="term-container">
            <div className="group-name">{`${termObj[GROUP_KEY]} | ${termObj[MODULE_KEY]}`}</div>
            <div className="term-en">{termObj[TERM_EN_KEY]}</div>
            <div className="term-heb">{termObj[TERM_HEB_KEY]}</div>
            <div className="definition">{termObj[DEFINITION_HEB_KEY]}</div>
          </div>
          ) : ""
          }       
      </div>
  )
}

export default Term;
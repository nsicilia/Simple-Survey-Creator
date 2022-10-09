import React from 'react'
import './classes.css'

const QuestionBox = ({title, type, options}) => {

  function renderSwitch(type) {
    switch (type) {
      case 'text':
        return (
          <label>Enter your name:
            <input type="text" />
          </label>
        );

      case 'bool':
        return (
          <>
          <button className="button">{options[0]}</button>
  
          <button className="button">{options[1]}</button>
          </>
        );

      case 'number':
        return 'this is the number ';

      case 'multiple':
        return (
          <>
          <label>
          <input type="radio" value="Male" name="gender"/>
          {options[0]}
          </label>
          <label>
          <input type="radio" value="Male" name="gender"/>
          {options[1]}
          </label>
          <label>
          <input type="radio" value="Male" name="gender"/>
          {options[2]}
          </label>
          <label>
          <input type="radio" value="Male" name="gender"/>
          {options[3]}
          </label>
          </>
        );

      default:
        return 'Error';
    }
  };

  return (
    <div className="container">

      <h1>{title}</h1>
      {renderSwitch(type)}

    </div>
  )
}

export default QuestionBox
import React from 'react'
import './classes.css'

const QuestionBox = (num) => {
  return (
    <div className="container">
        <form>
          <h1>{num}</h1>
            <label>Enter your name:
            <input type="text" />
            </label>
        </form>
    </div>
  )
}

export default QuestionBox
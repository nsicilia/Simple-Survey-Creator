import './App.css';
import React, { useState } from 'react';
import QuestionBox from './Components/inputField/QuestionBox';

function App() {
  var [questions, setQuestions] = useState([]);
  var [count, setCount] = useState(0);


  const addQuestion = () => {
    setCount((prevState) => prevState + 1);
    setQuestions((prevState) => {
      const newQuestions = Array.from(prevState);  // CREATING A NEW ARRAY OBJECT
      questions.push(count);
      return newQuestions;
    });
  };

  const removeQuestion = (test) => {
    //console.log(test);
    setQuestions((prevState) => {
      let newQuestions = Array.from(prevState);
      newQuestions = newQuestions.filter((item) => item !== test);
      return newQuestions;
    });
  };


  const moveQuestion = (question, direction) => {
    //console.log(test);
    setQuestions((prevState) => {
      let newQuestions = Array.from(prevState);
      let index = newQuestions.indexOf(question);

      if (direction === 'up') {

        if (index === 0) {
          return newQuestions;
        }
        newQuestions.splice(index, 1);
        newQuestions.splice(index - 1, 0, question);

      } else if (direction === 'down') {
        if (index === newQuestions.length - 1) {
          return newQuestions;
        }
        newQuestions.splice(index, 1);
        newQuestions.splice(index + 1, 0, question);

      } else {
        return newQuestions;
      }
      return newQuestions;
    });
  };




  return (
    <div>
      <h1>Simple Question UI</h1>
      <button className="button" onClick={addQuestion}>
        +
      </button>

      <div>
        {questions.map((index) => (
          <div key={index}>
            {QuestionBox(index)}

            <button className="button" onClick={() => removeQuestion(index)}>
              -
            </button>
             
            <button className="button" onClick={() => moveQuestion(index, 'up')}>
              ^
            </button>
              
            <button className="button" onClick={() => moveQuestion(index, 'down')}>
              v
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

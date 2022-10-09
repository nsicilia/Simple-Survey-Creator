import './App.css';
import React, { useState } from 'react';
import QuestionBox from './Components/inputField/QuestionBox';

function App() {
  var [questions, setQuestions] = useState([]);
  var [count, setCount] = useState(0);

  var [title, setTitle] = useState("");
  var [type, setType] = useState("text");

  var [option1, setOption1] = useState("");
  var [option2, setOption2] = useState("");
  var [option3, setOption3] = useState("");
  var [option4, setOption4] = useState("");

  const addQuestion = () => {
    setCount((prevState) => prevState + 1);
    setQuestions((prevState) => {
      const newQuestions = Array.from(prevState); // copy the array
      //questions.push({index: count, title: title, type: type, option1: option1, option2: option2, option3: option3, option4: option4});
      questions.push({ index: count, title: title, type: type, options: [option1, option2, option3, option4] });
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
      <div style={{ border: "5px solid red" }}>
        <h1>Create Question</h1>

        <label>Question</label>
        <input
          type="text"
          placeholder="Enter Question"
          onChange={(e) => setTitle(e.target.value)}
        />


        <label>Question Type</label>
        <select
          onChange={(e) => setType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="bool">Boolean</option>
          <option value="number">Number</option>
          <option value="multiple">Multiple Choice</option>
        </select>

        {type === "multiple" ? (
          <div>

            <label>Choose 1</label>
            <input type="text" placeholder="Enter Option 1" onChange={(e) => setOption1(e.target.value)} />

            <label>Choose 2</label>
            <input type="text" placeholder="Enter Option 2" onChange={(e) => setOption2(e.target.value)} />

            <label>Choose 3</label>
            <input type="text" placeholder="Enter Option 3" onChange={(e) => setOption3(e.target.value)} />

            <label>Choose 4</label>
            <input type="text" placeholder="Enter Option 4" onChange={(e) => setOption4(e.target.value)} />

          </div>
        ): null
        }

        {type === "bool" ? (
          <div>

            <label>Choose 1 (ex. true)</label>
            <input type="text" placeholder="Enter Option 1" onChange={(e) => setOption1(e.target.value)} />

            <label>Choose 2(ex. false)</label>
            <input type="text" placeholder="Enter Option 2" onChange={(e) => setOption2(e.target.value)} />

          </div>
        ): null
        }

        <button className="button" onClick={addQuestion}>
          +
        </button>
      </div>



      <div>
        {questions.map((question) => (
          <div key={question.index}>
            {QuestionBox(question)}

            <button className="button" onClick={() => removeQuestion(question)}>
              -
            </button>

            <button className="button" onClick={() => moveQuestion(question, 'up')}>
              ^
            </button>

            <button className="button" onClick={() => moveQuestion(question, 'down')}>
              v
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import styles from './App.module.css'
import React, { useState } from 'react';
import questionBox from './Components/inputField/questionBox';
import QuestionForm from './Components/QuestionForm/questionForm';

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
    <div className={styles.maincontainer}>
      <h1 className={styles.uititle}>Simple Question UI</h1>

      <div class={styles.qmakercontainer}>
        <div class={styles.qmakercolumn}>
          <QuestionForm
            setTitle={setTitle}
            setType={setType}
            type={type}
            addQuestion={addQuestion}
            setOption1={setOption1}
            setOption2={setOption2}
            setOption3={setOption3}
            setOption4={setOption4}
          />
        </div>
      </div>



      <div class={styles.qlistcontainer}>
        <div class={styles.qlistcolumn}>

          <div className=''>
            {questions.map((question) => (
              <div className={styles.question} key={question.index}>

                <div className={styles.btngrid}>
                  <div>
                    <button className={styles.upbtn} onClick={() => moveQuestion(question, 'up')}>↑</button>
                    <button className={styles.downbtn} onClick={() => moveQuestion(question, 'down')}>↓</button>
                    <button className={styles.removebtn} onClick={() => removeQuestion(question)}>x</button>
                  </div>
                </div>

                {questionBox(question)}

              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;

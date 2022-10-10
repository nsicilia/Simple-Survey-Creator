import React from 'react'
import style from './questionForm.module.css'

const QuestionForm = ({ setTitle, setType, type, addQuestion, setOption1, setOption2, setOption3, setOption4 }) => {


  return (

    <div className={style.formContainer}>
      <h1>Create Question</h1>

      <label className={style.qTitle}>Question</label>
      <input
        className={style.qText}
        type="text"
        placeholder="Enter Question"
        onChange={(e) => setTitle(e.target.value)}
      />



      <label className={style.qTitle}>Question Type</label>
      <select
        onChange={(e) => setType(e.target.value)}
        className={style.qText}
      >
        <option value="text">Text</option>
        <option value="bool">Boolean</option>
        <option value="number">Number</option>
        <option value="multiple">Multiple Choice</option>
      </select>



      {type === "multiple" ? (
        <div className={style.qgrid}>

          <div>
            <label className={style.qTitle} >Choose 1</label>
            <input className={style.qText} type="text" placeholder="Enter Option 1" onChange={(e) => setOption1(e.target.value)} />
            <label className={style.qTitle}>Choose 2</label>
            <input className={style.qText} type="text" placeholder="Enter Option 2" onChange={(e) => setOption2(e.target.value)} />
          </div>
          <div>
            <label className={style.qTitle}>Choose 3</label>
            <input className={style.qText} type="text" placeholder="Enter Option 3" onChange={(e) => setOption3(e.target.value)} />
            <label className={style.qTitle}>Choose 4</label>
            <input className={style.qText} type="text" placeholder="Enter Option 4" onChange={(e) => setOption4(e.target.value)} />
          </div>
        </div>
      ) : null
      }

      {type === "bool" ? (
        <div className={style.qgrid}>

          <div>
            <label className={style.qTitle}>Choose 1 (ex. true)</label>
            <input className={style.qText} type="text" placeholder="Enter Option 1" onChange={(e) => setOption1(e.target.value)} />
          </div>

          <div>
            <label className={style.qTitle}>Choose 2(ex. false)</label>
            <input className={style.qText} type="text" placeholder="Enter Option 2" onChange={(e) => setOption2(e.target.value)} />
          </div>

        </div>
      ) : null
      }

      <button className={style.addbtn} onClick={addQuestion}>
        Add Quesiton
      </button>
    </div>
  )
}


export default QuestionForm
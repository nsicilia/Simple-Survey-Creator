import React from 'react'
import styles from './questionBox.module.css'

const questionBox = ({ title, type, options }) => {

  function renderSwitch(type) {
    switch (type) {
      case 'text':
        return (
          <label className={styles.baseinput} type="number" id="quantity" name="quantity">
            <input className='focus:outline-none' type="text" />
          </label>
        );

      case 'bool':
        return (
          <>
            <button className={styles.boolbtn}>{options[0]}</button>

            <button className={styles.boolbtn}>{options[1]}</button>
          </>
        );

      case 'number':
        return (
          <>
            <input className={styles.baseinput} type="number" id="quantity" name="quantity" ></input>
          </>

        );

      case 'multiple':
        return (
          <>

          
     
            <label className={styles.multiple} for="bordered-radio-1">
              <input id="bordered-radio-1" type="radio" value={options[1]} name="gender" />
              {options[1]}
            </label>

            <label className={styles.multiple} for="bordered-radio-2">
              <input id="bordered-radio-2" type="radio" value={options[1]} name="gender" />
              {options[1]}
            </label>
            <label className={styles.multiple} for="bordered-radio-3">
              <input id="bordered-radio-3" type="radio" value={options[2]} name="gender" />
              {options[2]}
            </label>
            <label className={styles.multiple} for="bordered-radio-4">
              <input id="bordered-radio-4" type="radio" value={options[3]} name="gender" />
              {options[3]}
            </label>
          </>
        );

      default:
        return 'Error';
    }
  };




  return (
    <div className="px-10 pb-10">

      <h2 className={styles.title}>{title}</h2>
      {renderSwitch(type)}

    </div>
  )
}

export default questionBox
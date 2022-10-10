import React from 'react'

const questionBox = ({ title, type, options }) => {

  function renderSwitch(type) {
    switch (type) {
      case 'text':
        return (
          <label className='w-1/3 rounded-md border border-zinc-300 bg-white py-3 px-1 text-base font-medium text-slate-700 outline-none focus:border-green-700 focus:shadow-md mb-5' type="number" id="quantity" name="quantity">
            <input className='focus:outline-none' type="text" />
          </label>
        );

      case 'bool':
        return (
          <>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">{options[0]}</button>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{options[1]}</button>
          </>
        );

      case 'number':
        return (
          <>
            <input className='w-1/3 rounded-md border border-zinc-300 bg-white py-3 px-1 text-base font-medium text-slate-700 outline-none focus:border-green-700 focus:shadow-md mb-5' type="number" id="quantity" name="quantity" ></input>
          </>

        );

      case 'multiple':
        return (
          <>

          
     
            <label className='flex items-center text-xl space-x-1 mb-4' for="bordered-radio-1">
              <input id="bordered-radio-1" type="radio" value={options[1]} name="gender" />
              {options[1]}
            </label>

            <label className='flex items-center text-xl mb-4' for="bordered-radio-2">
              <input id="bordered-radio-2" type="radio" value={options[1]} name="gender" />
              {options[1]}
            </label>
            <label className='flex items-center text-xl mb-4' for="bordered-radio-3">
              <input id="bordered-radio-3" type="radio" value={options[2]} name="gender" />
              {options[2]}
            </label>
            <label className='flex items-center text-xl mb-4' for="bordered-radio-4">
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

      <h1 className=' text-left text-3xl mb-5'>{title}</h1>
      {renderSwitch(type)}

    </div>
  )
}

export default questionBox
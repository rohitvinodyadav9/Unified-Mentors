import React, { useRef } from 'react'


function Calculator() {

    const display = useRef(null)

    const appendToDisplay = (input) => {
        display.current.value += input
    }

    const clearDiplay = () => {
        display.current.value = ""
    }

    const calculate = () => {
        try {
            display.current.value = eval(display.current.value)
        } catch (error) {
            display.current.value = "Error"
        }
    }

  return (
    <div className='font-sans bg-cyan-700 overflow-hidden rounded-2xl max-w-lg'>
        <input className='w-full h-16 p-5 text-5xl text-right'
        placeholder='0'
        readOnly
        ref={display}
        />
        <div className='grid grid-cols-4 gap-4 p-4 ml-6'>
            <button onClick={() => appendToDisplay('+')} className=' h-16 w-16 rounded-full bg-yellow-600 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-yellow-400'>+</button>
            <button onClick={() => appendToDisplay('7')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>7</button>
            <button onClick={() => appendToDisplay('8')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>8</button>
            <button onClick={() => appendToDisplay('9')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>9</button>
            <button onClick={() => appendToDisplay('-')} className=' h-16 w-16 rounded-full bg-yellow-600 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-yellow-400'>-</button>
            <button onClick={() => appendToDisplay('4')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>4</button>
            <button onClick={() => appendToDisplay('5')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>5</button>
            <button onClick={() => appendToDisplay('6')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>6</button>
            <button onClick={() => appendToDisplay('*')} className=' h-16 w-16 rounded-full bg-yellow-600 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-yellow-400'>x</button>
            <button onClick={() => appendToDisplay('1')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>1</button>
            <button onClick={() => appendToDisplay('2')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>2</button>
            <button onClick={() => appendToDisplay('3')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>3</button>
            <button onClick={() => appendToDisplay('/')} className=' h-16 w-16 rounded-full bg-yellow-600 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-yellow-400'>/</button>
            <button onClick={() => appendToDisplay('0')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>0</button>
            <button onClick={() => appendToDisplay('.')} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>.</button>
            <button onClick={() => calculate()} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>=</button>
            <button onClick={() => clearDiplay()} className=' h-16 w-16 rounded-full bg-gray-800 cursor-pointer text-4xl text-white font-black pb-2 hover:bg-gray-600'>C</button>
            <button className=' h-16 w-64 rounded-full bg-yellow-600 cursor-pointer text-2xl text-white font-black pb-2 ml-6'><p>&lt;/Rohit&gt;</p></button>
        </div>
    </div>
  )
}

export default Calculator
import { useState } from "react"
import {evaluate} from 'mathjs'
function App() {
const [input, setInput] = useState('')
const [result, setResult] = useState('')


const click=(e)=>{
  setInput(input.concat(e.target.value))
}
const clear=()=>{
setInput('')
setResult('')
}

const del = () =>{
  setInput(input.slice(0, -1 ))
}

const calculate = () =>{
  try{
    setResult(eval(input))
  }catch{
setResult('error')
  }
// setResult(evaluate(input) )
}

  return (
   
    <div className="container flex justify-center">
     <div className=" bg-gray-800 h-full w-auto">
  <div className="flex flex-col p-3">
        <input type="text" value={input} onChange={click} className="focus:outline-none bg-gray-800 w-80 h-16
        text-gray-300 text-end text-2xl "/>
        <input type="text" disabled value={result} className="focus:outline-none bg-gray-800  h-16
         text-gray-300 text-end text-lg appearance-none" />

     </div>

     <div className="flex justify-end">
     <input type="button" value={'X'} onClick={del} className="text-green-600 mr-4 my-2 text-2xl w-8
      bg-gray-800 border-2 border-green-600 hover:bg-gray-600"></input>
     </div>
     <div className="w-full h-1 bg-gray-500 mb-2"></div>

     <div className="grid grid-cols-4 pb-3 pl-5 gap-y-2 pr-0">
       
       <input type="button" value={'C'} onClick={clear} className="hover:bg-gray-600  
       rounded-full h-16 w-16 text-red-500 text-lg"></input>

       <input type="button" value={'()'} onClick={click} className="hover:bg-gray-600  
        rounded-full h-16 w-16 text-green-500
       text-lg "></input>

       <input type="button" value={'%'} onClick={click} className="hover:bg-gray-600  
         rounded-full text-green-500 text-lg h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'/'} onClick={click} className="hover:bg-gray-600  
       rounded-full h-16 w-16 text-gray-300
       bg-red-700 text-green-600 text-2xl "></input>

       <input type="button" value={'1'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

<input type="button" value={'2'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'3'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'x'} onClick={click} className="h-16 w-16 hover:bg-gray-600  
         rounded-full text-gray-300
       bg-red-700 text-green-600 text-2xl"></input>

       <input type="button" value={'4'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'5'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'6'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'-'} onClick={click} className="hover:bg-gray-600  
       rounded-full h-16 w-16 text-gray-300
       bg-red-700 text-green-600 text-5xl "></input>

       <input type="button" value={'7'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'8'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'9'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'+'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16
       bg-red-700 text-green-600"></input>

       <input type="button" value={'H'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700 text-green-600  "></input>

       <input type="button" value={'0'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'.'} onClick={click} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700"></input>

       <input type="button" value={'='} onClick={calculate} className="hover:bg-gray-600  
        text-2xl rounded-full h-16 w-16 text-gray-300
       bg-red-700 text-green-600 text-2xl "></input>

       
       
       
       
     </div>
     </div>
     
    </div>
     )
  
  }

export default App

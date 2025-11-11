import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter ,setCounter] = useState(15)

  // let counter  = 5;
  const addValue = () =>{

    
    // counter  = counter+1;
     console.log("value added" , counter)
     if(counter != 20){
    setCounter(counter+1)
     }
    
   
  }

  const removeValue = () =>{
    console.log("value removed" , counter)
    if(counter != 0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}>Increase value</button>
      <br />
      <button
      onClick={removeValue}
      >Decrease value</button>
    </>
  )
}

export default App

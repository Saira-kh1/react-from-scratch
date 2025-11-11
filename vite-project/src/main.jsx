import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'   
import React from 'react'


import App from './App.jsx'

function MyApp(){
  return(
    <div>
    <h1>Custom App !!!!!</h1>
    </div>
  )
}

// const ReactElement = {
//     type : 'a',
//     props :{
//         href: 'https://google.com',
//         target: '_blank'  
//      },
//      Children: 'Click me to visit google'
// }
const anotherElemnet = (
  <a href="https://google.com"  target='_blank'>Visit google</a>
)

const anotherUSer = "anotherUser"

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUSer
)


createRoot(document.getElementById('root')).render(
  <>
    {/* {/* <App/> */}
    {/* MyApp() */}
    {/* <MyApp/>
    <ReactElement/> */ }
    {/* <anotherElemnet /> */}
    {reactElement}
    {/* <App/> */}
  </>

)

import  React  from 'react'
import  ReactDOM  from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'


function MyApp()
{
    return(
        <div>
           <h1>custom app</h1> 
        </div>
    )
}


// const ReactElement= {
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)



const anotherUser = "chai aur react"

const reactElement=React.createElement(
    'a',
    { href:'https://google.com',target:'_blank'}, //kuch nhi h toh {} likh kr chor do
    'click me to visit google',  //children
    anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactElement
   //<App/>

)





//bundler-babble
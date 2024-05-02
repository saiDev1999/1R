
import { Component } from "react"
import "./App.css"
import Card from "./components/functional/card/card"
import ModalComponent from "./components/functional/modal/modal"
import NavBar from "./components/functional/navBar/navBar"
import CircleSpinner from "./components/functional/spinners/circle-spinner"
import TableComponent from "./components/functional/table/table"
import ButtonComponent from "./components/functional/button/button"
import GreetingComponent from "./components/functional/greeting/greeting"
import ImageComponent from "./components/functional/image/image"


const App = () => {

  const buttonArray=[
    {
      text:"sign up",
      width:100,
      height:100,
      bgColor:"white",
      id:1
    },
    {
      text:"login",
      width:100,
      height:100,
      bgColor:"white",
      id:2
    },
    {
      text:"submit",
      width:100,
      height:100,
      bgColor:"white",
      id:3
    },
    {
      text:"Click me",
      width:200,
      height:100,
      bgColor:"white",
      id:4
    },
    {
      text:"Click me",
      width:200,
      height:100,
      bgColor:"white",
      id:5
    },
    
  ]


  return(
    <div>
      <GreetingComponent >
      <ImageComponent
       src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
      
      />
      <h1>Hai ravi how are you ? </h1>
      </GreetingComponent>
      <GreetingComponent >
      <ImageComponent
      
      src={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"}
      />
      <h1>Hai sharath how are you ? </h1>
      </GreetingComponent>


       
       {/* {
        buttonArray.map(eachbutton=>{
          const{text,width,height,bgColor,id}=eachbutton
          return(
            <ButtonComponent 
            key={id}
            text={text}  bgColor={bgColor} 
            buttonProperties={
              {
                width:width,
                height:height
              }
            }
            
            
            />
          )
        })
       } */}

    </div>
 
  )
}

export default App


// Taks :
// 1. Repeat the class
// 2. Corousel  Component
// 3. Forms component 
// 4. React skeleton loaders 
// 5. Go through material UI documentation


// 4 ways generally we use to style the react App

// 1. inline styles or object styles 
// 2. External stylesheet styles : parent , child1 , .css 
// 3. External module styles .module.css 
// 4. Sass type of styling or external css library styling ex :Bootstarp , ReactBootstrap ,materiakUI, AntDesign, styled components,Tailwind css



// React boostarp we can configure in 2 ways

// 1. CDN
// 2. via NPM

// DOM : Document object model 
// Drawbacks in DOM :

// 1. Whenever content changes entire dom has to reload
// 2. Updates are slower
// 3. Each node will recalculates when updates are happening


// React virtual dom :

// 1. Whenever any element changes , React contructs the v-dom (replica of original dom but it was light weighted)
// 2. V-dom updates the only element changed part , leaving all other components unchanged

// 2 algorithms:

// 1. Diffing 
// 2. Reconcilation




// React features :

// 1. React is a component based approach
// 2. React maintains the lighweighted in built dom called as V-DOM , because of this react updates are faster
// 3. React is used for single page applications 
// 4. React contains JSX Syntax (JS+Markup)













// Conditional rendering :

// 0. if / else 
// 1. ternary operator 
// 2. shortcircuit operator or logical and operator 





// Tasks :

// 1. Repeat the class 
// 2. Push the code and give repo





// Tasks :
// 1. Repeat the class 
// 2. Create a docs for initial in a react 
// 3. 5 component creation  (tables,lists,forms,cards)



// Component :

// Component is a reusable  independent  bits of code which is responsible to create UI 

// 2 types of Components

// 1. functional based components (simple functions returns markup)
// 2. class based components (using classes)
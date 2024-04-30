import { Component } from "react"
import ButtonComponent from "./components/functional/button/button.js"
import ImageComponent from "./components/functional/image/image.js"
import ListComponent from "./components/functional/list/list-component.js"
import OrderList from "./components/functional/list/ordered-list.js"
import IplTeamListing from "./components/functional/list/ipl/ipl-listing.js"
import MainHeading,{Heading2 as SubHeading,Heading3 as MiniHeading } from "./components/functional/heading/headings.js"
import Button from "./components/class/button/button.js"
import Heading from "./components/class/heading/heading.js"


const App = () => {


  return(
    <div>
      <h2>Hello world</h2>
      {/* <IplTeamListing/> */}
      <MainHeading/>
      <SubHeading/>
      <MiniHeading/>
      <Button/>
      <Heading/>
    
     
    
    </div>
 
  )
}

export default App


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
import { Component } from "react"
import Mounting from "./components/class/lifecycle/mounting/mounting"
import UpdatingPhase from "./components/class/lifecycle/updating/updating"
import TodoComponent from "./components/class/todo/todo"
import UnMounting from "./components/class/lifecycle/unMounting/unmounting"

import ProductListing from "./components/class/products/products"
import Counter from "./components/functional/counter/counter"
import UserForm from "./components/functional/form/userForm"
import LoginForm from "./components/functional/form/loginForm"
import MyForm from "./components/functional/form/singleForm"

class App extends Component {
  state={
    color:"red"
  }

   changeColor=()=>{
    this.setState({
      color:"blue"
    })
   }
   render(){
    return(
      <div>
{/* <UserForm/> */}
{/* <LoginForm/> */}
<MyForm/>
  
      </div>
   
    )

   }
 
}

export default App


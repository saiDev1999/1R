import { Component } from "react"
import Mounting from "./components/class/lifecycle/mounting/mounting"
import UpdatingPhase from "./components/class/lifecycle/updating/updating"
import TodoComponent from "./components/class/todo/todo"
import UnMounting from "./components/class/lifecycle/unMounting/unmounting"

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
<UnMounting/>
  
      </div>
   
    )

   }
 
}

export default App


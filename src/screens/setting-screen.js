import React, { useContext } from 'react'
import NavBar from '../components/functional/navBar/navBar'
import { themeInfo } from '../navigation/navigation-stack'

function SettingScreen() {

  const  {
    handleDarkLightModes,
    incrementCounter,
    handleIncrement,
    handleDecrement,
    currentState,
    handleChangeName,
    subjectAdd

  }=useContext(themeInfo)


  const handleModes=()=>{
    // Control the state which is created globally 
    handleDarkLightModes()

  }

  // const handleIncrement=()=>{
  //   incrementCounter(10)

  // }
  const changeCounterValue=()=>{
    handleIncrement()

  }
  return (
    <div>
             <NavBar/>
        <h2>Wellcome to SettingScreen  {currentState.name}</h2>
        <button onClick={handleModes}  >Click to enable/disable dark mode</button>
         <button onClick={changeCounterValue} >Count increment useReducer</button>
         <button onClick={handleDecrement} >Count decrement useReducer</button>
        <button onClick={handleChangeName} >Change name</button>
        <button onClick={()=>{subjectAdd("Nest Js")}} >Add new subject</button>
    </div>
  )
}

export default SettingScreen
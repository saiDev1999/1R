import React from 'react'
import NavBar from '../components/functional/navBar/navBar'
import UseCallbackExample from '../components/functional/useCallback/useCallback'
import useCounter from '../components/functional/customHooks/useCounter'

function BlogScreen() {
  const[age,incrementAge,decrementAge,resetAge]=useCounter(100,1)
  const[salary,incrementSalary,decrementSalary,resetSalary]=useCounter(1000,1000)
  return (
    <div>
               <NavBar/>
        <h2>Wellcome to BlogScreen</h2>
        <h2>Current age {age}</h2>
        <button onClick={incrementAge} >Increment age </button>
        <button onClick={decrementAge} >Decrement age </button>
        <button onClick={resetAge} >Reset age </button>


        <h2>Current Salary {salary}</h2>
        <button onClick={incrementSalary} >Increment Salary </button>
        <button onClick={decrementSalary} >Decrement Salary </button>
        <button onClick={resetSalary} >Reset Salary </button>

    </div>
  )
}

export default BlogScreen
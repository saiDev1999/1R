import React, { useContext } from 'react'
import NavBar from '../components/functional/navBar/navBar'
import { themeInfo } from '../navigation/navigation-stack'

function AboutScreen() {
  const {count,currentState}=useContext(themeInfo)
  return (
    <div>
          <NavBar/>
          <h2> UseReducer global counter {currentState.count}</h2>
        <h2>Wellcome to AboutScreen current Count {count} </h2>
        <ol>

  
        {
    
          currentState.subjects.map(each=><li key={each} >
            {each}
          </li>)
        }
              </ol>
    </div>
  )
}

export default AboutScreen
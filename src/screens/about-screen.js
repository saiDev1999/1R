import React, { useContext } from 'react'
import NavBar from '../components/functional/navBar/navBar'
import { themeInfo } from '../navigation/navigation-stack'
import UseMemoExample from '../components/functional/useMemo/useMemo'

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

              <UseMemoExample/>
    </div>
  )
}

export default AboutScreen
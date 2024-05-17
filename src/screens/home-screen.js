import React from 'react'
import NavBar from '../components/functional/navBar/navBar'
import UseEffect1 from '../components/functional/useEffect/useEffectEx1'

function HomeScreen() {
  return (
    <div>
        <NavBar/>
        <h2>Wellcome to HomeScreen</h2>
        <UseEffect1/>
    </div>
  )
}

export default HomeScreen
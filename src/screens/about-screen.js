import React, { useContext } from 'react'
import NavBar from '../components/functional/navBar/navBar'
import { themeInfo } from '../navigation/navigation-stack'

function AboutScreen() {
  const {count}=useContext(themeInfo)
  return (
    <div>
          <NavBar/>
        <h2>Wellcome to AboutScreen current Count {count} </h2>
    </div>
  )
}

export default AboutScreen
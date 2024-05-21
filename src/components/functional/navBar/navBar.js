import { useContext } from "react"
import { Link } from "react-router-dom"
import { themeInfo, userInfo } from "../../../navigation/navigation-stack"


const NavBar = ()=>{
    const darkTheme=false
    const {name} = useContext(userInfo)
    const  {
      darkMode,
      count
  
    }=useContext(themeInfo)
    // console.log('userInformation: ', userInformation);


    const linkStyle={
      textDecoration:"none",
      color:darkMode?"white":"black"
    }

   

    return(
        <nav 
        class={darkMode ?"navbar navbar-expand-sm bg-dark navbar-dark":"navbar navbar-expand-sm bg-light navbar-light"}
        
        >
  <div className="container-fluid">
    <ul className="navbar-nav">
    <li className="nav-item nav-link">

      <Link  to={"/"} style={linkStyle}  >
      {name}
      </Link>

  

      </li>
      <li className="nav-item nav-link"   >
        <Link to={"/about"}  style={linkStyle} >
        About
        </Link>
    
      </li>
      <li className="nav-item nav-link">
        <Link  to={"/settings"}  style={linkStyle} >
        Settings
        </Link>
   
      </li>
      <li className="nav-item nav-link">
        <Link to={"/blog"} style={linkStyle} >
        Cart {count}</Link>
      </li>
     
    </ul>
  </div>
</nav>

    )
}

export default NavBar
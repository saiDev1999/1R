import { Link } from "react-router-dom"


const NavBar = ()=>{
    const darkTheme=false

    const linkStyle={
      textDecoration:"none",
      color:"black"
    }
    return(
        <nav 
        class={darkTheme ?"navbar navbar-expand-sm bg-dark navbar-dark":"navbar navbar-expand-sm bg-light navbar-light"}
        
        >
  <div className="container-fluid">
    <ul className="navbar-nav">
    <li className="nav-item nav-link">

      <Link  to={"/"} style={linkStyle}  >
      Home
      </Link>

  

      </li>
      <li className="nav-item nav-link">
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
        Blog</Link>
      </li>
     
    </ul>
  </div>
</nav>

    )
}

export default NavBar
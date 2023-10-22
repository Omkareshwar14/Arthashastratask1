import React from 'react'

import { NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{userSelect:"none" , display:"flex"}}>
  <NavLink className="navbar-brand" to="#" >
    Omkareshwar Halli
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:"flex" , paddingLeft:"35vw"}}>
    <ul className="navbar-nav ms-auto"  >
    
      

      <li className="nav-item">
        <NavLink className="nav-link" to="/chart" style={{color:"white"}} >Line Chart</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/table" style={{color:"white"}}  >Table</NavLink>
      </li>
      
      
      
    </ul>
  </div>

  
</nav>

  <h1 style={{textAlign:"center"}}>Click on Line Chart or Table Button</h1>
  </>

  )
}

export default Navbar
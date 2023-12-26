import React from "react"
import {NavLink} from "react-router-dom"

const Menu=()=>{
    return(
        <>
        <nav className="navbar" >
        <ul>
       <li><NavLink className="navlink" exact activeClassName="active_class" to={"/"}>Home</NavLink></li>
       <li> <NavLink className="navlink" exact activeClassName="active_class" to={"/about"}>About US</NavLink></li>
       <li><NavLink className="navlink" exact activeClassName="active_class" to={"/contact"}>Contact US</NavLink></li> 
       <li><NavLink className="navlink" exact activeClassName="active_class" to={"/services"}>Our services</NavLink></li>
       <li><NavLink className="navlink" exact activeClassName="active_class" to={"/search"}>Search</NavLink></li> 
       <li><NavLink className="navlink" exact activeClassName="active_class" to={"/user"}>User</NavLink></li> 
       <li><NavLink className="navlink" exact activeClassName="active_class" to={"/error"}></NavLink></li> 
</ul>
        </nav>
       
        </>
    );
}
export default Menu;
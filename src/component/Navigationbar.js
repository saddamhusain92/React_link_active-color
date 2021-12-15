import React from 'react'
import { Link , withRouter } from 'react-router-dom'
import './Navcss.css'
function Navigationbar({history}) {
console.log();
const realpath = (curr) =>{
if(history.location.pathname===curr){
    return "red"
}
}
 
    return (
        <div>
            <nav>
            <Link to="/" style={{backgroundColor:realpath("/")}}>
            <label>Home</label>
            </Link>
            <Link to="about" style={{backgroundColor:realpath("/about")}}>
            <label>About</label>
            </Link>
            <Link to="services" style={{backgroundColor:realpath("/services")}}>
            <label>Services</label>
            </Link>
            <Link to="contacts" style={{backgroundColor:realpath("/contacts")}}>
            <label>Contact</label>
            </Link>
            
            </nav>
        </div>
    )
}
export default  withRouter(Navigationbar) ;
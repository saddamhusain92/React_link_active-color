import React from 'react'
import { Link , withRouter } from 'react-router-dom'
import './Navcss.css'
function Navigationbar({history}) {
console.log();
const realpath = (curr) =>{
if(history.location.pathname===curr){
    return "#626567"
}
}
const bottompath = (curr) =>{
    if(history.location.pathname===curr){
        return "1px solid black"
    }
    }
    const colorpath = (curr) =>{
        if(history.location.pathname===curr){
            return "#ffff"
        }
        }
 
    return (
        <div>
            <nav>
            <Link to="/" style={{backgroundColor:realpath("/"),borderBottom:bottompath("/"),color:colorpath("/")}}>
            <label>Home</label>
            </Link>
            <Link to="about" style={{backgroundColor:realpath("/about"),borderBottom:bottompath("/about"),color:colorpath("/about")}}>
            <label>About</label>
            </Link>
            <Link to="services" style={{backgroundColor:realpath("/services"),borderBottom:bottompath("/services"),color:colorpath("/services")}}>
            <label>Services</label>
            </Link>
            <Link to="contacts" style={{backgroundColor:realpath("/contacts"),borderBottom:bottompath("/contacts"),color:colorpath("/contacts")}}>
            <label>Contact</label>
            </Link>
            
            </nav>
        </div>
    )
}
export default  withRouter(Navigationbar) ;
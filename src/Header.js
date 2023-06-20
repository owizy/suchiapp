import { Link , NavLink } from "react-router-dom"
import Logo from "./logo.png"
import Moon from "./icons8_do_not_disturb_ios_96px_2.png"
import Sun from "./icons8_sun_96px.png"
import Menu from "./icons8_medium_icons_96px.png"
import Cart from "./icons8_shopping_cart_96px_1.png"
import Close from "./icons8_close_96px_1.png"
import { useState } from "react"
import "./Header.css"
import { useContext } from "react"
import { CreateCart } from "./Context"
export default function Header(){
    const activeLink=({isActive})=>{
        return{
            color: isActive ? "darkorange"  :"#4F4239" 
        }
    }
    const[show,Setshow]=useState(false)
    function shows(){
        Setshow((e)=>{
            return ! e
        })
    }
    const[bright,setbright]=useState(true)
    const[darktheme,setdarktheme]=useState(false)
    function background(){
        setdarktheme((e)=>{
            return ! e
        })
    }
         const{Cart,SetCart}=useContext(CreateCart)   
    return(
        <header>
            <div className="first">
               <img src={Logo} width={30} className="logo"/>
               <Link>Sushi</Link> 
            </div>
            <div className="second" style={{top: show ? 0 :-1000 }} >
            <NavLink to="/" style={activeLink}>Home</NavLink>  
             <a  href='#about'>About us</a>
             <NavLink style={activeLink} to='/popular'>Popular</NavLink> 
             <a  href='#recent'>Recently</a>
             <NavLink style={activeLink} to='/cart' className='cat'>Cart <span className="num">{Cart.length}</span></NavLink>
             <img src={Close} className="close" onClick={shows}/>
        </div>
             
         
        <div className="forth">
          <img src={Menu} className="menu" onClick={shows}/> 
        </div>    
        </header>
    )
}
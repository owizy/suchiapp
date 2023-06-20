import "./Footer.css"
import { Link } from "react-router-dom"
import Logo from "./logo.png"
import "./Footer.css"
import facebok from "./icons8_facebook_208px_1.png"
import  instagram from "./icons8_Instagram_512px.png"
import twitter  from "./icons8_Twitter_480px.png"
export default function Footer(){
    return(
        <footer>
            
            <div>
            <div className="first">
               <img src={Logo} width={30} className="logo"/>
               <Link>Sushi</Link> 
            </div>
            <p>Food for the boby is not <br/>
            enough . There must be food <br/>
            for the soul.
            </p>
            </div>
            <div>
               <h1>Main Menu</h1>
               <div>
            <p>About</p>
            <p>Menus</p>
            <p>Offer</p>
            <p>Events</p>    
            </div> 
            </div>

               <div>
               <h1>Information</h1>
               <div>
            <p>Contact</p>
            <p>order& return</p>
            <p>Video</p>
            <p>Reservation</p>    
            </div> 
            </div>     
            
            <div>
               <h1>Address</h1>
               <div>
            <p>AV,Haclenda 1234<br/>
            Lima 4321, Peru <br/>
            9am -11pm
            </p>   
            </div> 
            </div>

                       <div>
               <h1>Social Media</h1>
               <div className="social">
            <img src={facebok} width={20}/>
            <img src={instagram} width={25}/>
            <img src={twitter} width={25}/>
            
            </div>
            <p>&copy; All right reserved created by Owuye Abdulmalik  {new Date().getFullYear()}</p> 
            </div>
         
                 </footer>
    )
}
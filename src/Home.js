import sushi from "./home-sushi-rolls.png"
import design from "./home-sushi-title.png"
import "./Home.css"
export default function Home(){
    return(
        <section>
         <div className="f_container">
         <div className="del">
        <h1>Enjoy Delicious</h1>    
        </div>         
        <div className="row">
          <img src={design} className="design"/>
          <h1>Sushi Food</h1>  
        </div>
        <div className="cent">
           <p>
        Enjoy a good dinner with the best <br/>
        dishes in the restuarant and improve<br/>
        your day    
        </p> 
        <button>Order Now</button>
        </div>
         </div>
         <div>
           <img src={sushi} className="suchi"/> 
         </div>
        </section>
    )
}
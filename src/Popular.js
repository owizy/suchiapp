import All from "./All.js"  
import "./Popular.css"
import { Link ,Outlet} from "react-router-dom"
export default function Popular(){
    return(
        <section className="Popular">
              <div className="food">
            <p>The Best Food</p>
            <h1>Popular Dishes</h1>
            
            <All/>
            <Outlet/>
        
           </div>
           
            </section>
    )
}
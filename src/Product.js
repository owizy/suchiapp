import { useContext } from "react"
import { CreateCart } from "./Context"
import "./Popular.css"
export default function Product({props}){
    const{Cart,SetCart}=useContext(CreateCart)
    return(
          <div className="containers">
            
            <div className="container">
              <img src={props.image}/>
              <div>
            <p>{props.name}</p>
            <small>{props.details}</small>
            </div>  
            <span>${props.price}</span>
            <div>
               {
                Cart.includes(props) ?
                <button onClick={()=>{
                    SetCart(Cart.filter((removeitem)=>{
                        return removeitem.id !== props.id
                    }))
                }}>Remove from cart</button>
                :<button onClick={()=>{
                    SetCart([...Cart,props])
                }}>Add to cart</button>
                
               } 
            </div>
            </div>
            </div>
    
    )
}
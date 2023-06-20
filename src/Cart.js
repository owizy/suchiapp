import Header from "./Header";
import { useContext,useEffect,useState } from "react";
import { CreateCart } from "./Context";
import Product from "./Product";
import "./Cart.css"
export default function Cart(){
    const{Cart,SetCart}=useContext( CreateCart)
    const[totalprice,settotalprice]=useState()

       useEffect(()=>{
        settotalprice(
           Cart.reduce((total,item)=>{
            return total +Number(item.price)
           },0) 
        )
       },[Cart])
    return(
        <div>
            <Header/>
            <div className="cartpod">
                {
                    Cart.map((product)=>{
                        return <Product props={product}/>
                    })
                }
                </div>
                <h1>Total pice:<span>${totalprice}</span></h1>
        </div>
    )
}
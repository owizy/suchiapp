import { products } from "./All"
import Product from "./Product"
import "./Popular.css"
import Header from "./Header"
import { useState } from "react"
const AllCategories =['all',... new Set(products.map((e)=>{
    return e.classs
}))]
export default function Productlink(){
    const[prod, setprod]=useState(products)




        const filteritems =(classs)=>{
               if( classs === "all"){
                 setprod(products)
                 return;
               }
               const newItems =products.filter((e)=> e.classs === classs )
               setprod(newItems)
               console.log(newItems)
        }
     return(
     <div>
            <Header/>
            
                <div className="btn_cont">
                 {
                    AllCategories.map((cat,index)=>{
                     return(
                         <button onClick={()=>{
                             filteritems(cat)
                         }} key={index}>{cat}</button>
                     )
                    })            
                 }
                 </div>       
         <div className="dishes">
         {
             prod.map((e)=>{
              return(
                     <Product props={e}/>             
                         )
            })
         }
       </div>
    
     </div>
 )  
 }

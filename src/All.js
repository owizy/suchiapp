import "./Popular.css"
import Product from "./Product"
import iproduct from "./popular-onigiri.png"
import iproduct2 from "./popular-spring-rols.png"
import iproduct3 from "./popular-sushi-rolls.png"
import { Link } from "react-router-dom"
import { useState } from "react"
 
export  const products=[
    {
       id:1,
       name:"onigiri",
       image:iproduct,
       details:"Japanese Dish",
       price:"10.99",
       classs:"Food"
    },
    
    {
        id:2,
        name:"Spring Rolls",
        image:iproduct2,
        details:"Japanese Dish",
        price:"15.99",
        classs:"Food"
     },
     
    {
        id:3,
        name:"Sushi Rolls",
        image:iproduct3,
        details:"Japanese Dish",
        price:"19.99",
        classs:"Food"
     },
     {
        id:4,
        name:"Sushi Rolls",
        image:iproduct3,
        details:"Japanese Dish",
        price:"19.99",
        classs:"Food"
     },
     {
        id:5,
        name:"onigiri",
        image:iproduct,
        details:"Japanese Dish",
        price:"10.99",
        classs:"Food"
     },
     {
        id:6,
        name:"Spring Rolls",
        image:iproduct2,
        details:"Japanese Dish",
        price:"15.99",
        classs:"Food"
     },
     {
        id:7,
        name:"onigiri",
        image:iproduct,
        details:"Japanese Dish",
        price:"10.99",
        classs:"Food"
     },
     
     {
         id:8,
         name:"Spring Rolls",
         image:iproduct2,
         details:"Japanese Dish",
         price:"15.99",
         classs:"Food"
      },
      
     {
         id:9,
         name:"Sushi Rolls",
         image:iproduct3,
         details:"Japanese Dish",
         price:"19.99",
         classs:"drinks"
      }
     
]
// const AllCategories =['all',... new Set(products.map((e)=>{
//     return e.classs
// }))]
// console.log(AllCategories)
 export default function All (){
     const[prod, setprod]=useState(products)
   //  const [category,Setcategory]=useState(AllCategories)



      //   const filteritems =(classs)=>{
      //          if( classs === "all"){
      //            setprod(products)
      //            return;
      //          }
      //          const newItems =products.filter((e)=> e.classs === classs )
      //          setprod(newItems)
      //          console.log(newItems)
      //   }
     return(
     <div>
            
            
                {/* <div className="btn_cont">
                 {
                    AllCategories.map((cat,index)=>{
                     return(
                         <button onClick={()=>{
                             filteritems(cat)
                         }} key={index}>{cat}</button>
                     )
                    })            
                 }
                 </div>        */}
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
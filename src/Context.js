import { createContext ,useState } from "react";

export const CreateCart=createContext()

export default function Context({children}){
    const [Cart,SetCart]=useState([])

    return(
        <CreateCart.Provider value={{Cart, SetCart}}>
         {children}    
    </CreateCart.Provider>

    )
}
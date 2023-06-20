import Header from "./Header"
import "./Body.css"
import Home from "./Home"
import About from "./About"
import Popular from "./Popular"
import Recent from "./Recent"
import Footer from "./Footer"
export default function Body(){

    return(
        <body>
         <Header/>
         <Home/>
         <About/>
         <Popular/>
         <Recent/>
         <Footer/>
        </body>
    )
}
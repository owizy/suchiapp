import { BrowserRouter,Route,Routes } from "react-router-dom";
import Body from "./Body";
import About from "./About";
import Cart from "./Cart";
import All from "./All"
import Suchi from "./suchi"
import Productlink from "./popularlink";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Body/>}>
      <Route path="all" element={<All/>}/>
    </Route> 
    <Route path="/popular" element={<Productlink/>}/>
    <Route path="/cart" element={<Cart/>}/>
      </Routes>
   </BrowserRouter>
   
    );
}

export default App;

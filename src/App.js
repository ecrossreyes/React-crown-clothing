import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navegation from "./routes/navegation/navegation.component";

const Shop = () => {
  return (
    <div>
      <h1>Ecross Shop</h1>
      </div>
  )
}
const App = () => {

 return (
   <Routes>
    <Route path="/" element={<Navegation />}>

       <Route index element={<Home />} />
       <Route path='shop' element={<Shop />} />
    </Route>
       
    
   </Routes>
 );
};

export default App;

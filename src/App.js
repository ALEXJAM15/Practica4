import Home from "./Components/Home";
import About from "./Components/About";
import Barra from "./Layout/Barra";
import Contact from "./Components/Contact";

import { BrowserRouter, Routes } from "react-router-dom";
//Falta ligas y componentes


function App() {
  return (
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Barra/>}>
        <route path='about' element={ <About/> }/>
        <route path='contacto' element={ <Contact/> }/>
        <route index element={ <Home/> }/>
      </Route>

      </Routes>
      </BrowserRouter>
  );
}

export default App;

import { Link, Outlet } from "react-router-dom";



function Barra() {
    return (
      <>
      <ul>

        <li>
          <Link to='/'>
            Inicio
          </Link>
        </li>

        <li>
          <Link to='/About'>
            About
          </Link>
        </li>

        <li>
          <Link to='/Contacts'>
            Contatcto
          </Link>
        </li>

      </ul>


      <section>
         <Outlet/>
      </section>

      </>
    );  
  }
  
  export default Barra;
  
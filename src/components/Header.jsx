import { NavLink,Link } from "react-router-dom"
import '../index.css'

export default function Header(){
    return(
        <header>
        <Link className='site-logo' to='/'>#VANLIFE</Link>
      <nav>
       
        <NavLink 
           to='/host'
           className={({isActive})=> isActive ? "my-link":null}
        >
        Host
        </NavLink>

        <NavLink 
           to='/about'
           className={({isActive})=> isActive ? "my-link":null}
        >
        About
        </NavLink>

        <NavLink 
          to='/vans'
          className={({isActive})=> isActive ? "my-link":null}
          >
            Vans
        </NavLink>
        
      </nav>
    </header>
    )
}
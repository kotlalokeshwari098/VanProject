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

        <Link to='/login'> <img src="https://imgs.search.brave.com/usgrrKkNw9C2DcmfvMkxjg_EPrTrzSNYuOUUu04xxzg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFGbVRP/Q2RnLWMvMi8wLzE2/MDB3L2NhbnZhLWN1/dGUtY2FydG9vbi1h/bmltZS1tYW5nYS1p/bGx1c3RyYXRlZC1n/aXJsLWF2YXRhci1I/QldYR0F1NUhoOC5q/cGc" alt="" height={40} width={40} /></Link>
        
      </nav>
    </header>
    )
}
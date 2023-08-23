import React from "react"
import { Link, NavLink } from "react-router-dom"
import loginIcon from "../images/avatar-icon.png"

export default function Header() {


    return (
        <header>
            <Link to="/" className='logo'>#VANLIFE</Link>
            <nav>
                <NavLink 
                    to="host" 
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Host
                </NavLink>

                <NavLink 
                    to="about" 
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    About
                </NavLink>

                <NavLink 
                    to="vans" 
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Vans
                </NavLink>

                <NavLink
                    to="login"
                >
                    <img 
                        src={loginIcon} 
                        alt="Login" 
                        className="login-icon"
                    />
                </NavLink>

            </nav>
        </header>
    )
}


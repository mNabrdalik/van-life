import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {

    return (
        <div>
            <nav className="host-nav">
                <NavLink 
                    to="/host" 
                    end
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to="income" 
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Income
                </NavLink>

                <NavLink 
                    to="vans" 
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Vans
                </NavLink>

                <NavLink 
                    to="reviews" 
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                    Reviews
                </NavLink>
            </nav>    
            <Outlet/>  
        </div>

    )
}
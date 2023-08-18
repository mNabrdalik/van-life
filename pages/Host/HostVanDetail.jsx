import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import arrowBack from "../../images/ArrowBack.png"

export default function HostVanDetails() {

    //data from url
    const params = useParams()

    const [currVan, setCurrVan] = React.useState({});

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrVan(data.vans))
    },[])

    if(!currVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="van-detail-container">
            <Link 
                // insted of using to={"../vans"} better to add relative="path" to go back one level higher in hierarchy
                to={".."}
                relative="path" 
                className="back-btn"
            ><img src={arrowBack} alt="Back to Vans" /> <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <img src={currVan.imageUrl} alt={currVan.name} />
                <div className="host-van-detail-info-text">
                    <i className={`van-type van-type-${currVan.type}`}>
                        {currVan.type}
                    </i>
                    <h3>{currVan.name}</h3>
                    <h4>${currVan.price}/day</h4>
                </div>
            </div>
            <div className="host-van-info">
                <nav className="host-nav host-van-nav-detail">
                    <NavLink 
                        to="." 
                        end
                        className={({isActive}) => isActive ? "active-link" : null}
                    >
                        Details
                    </NavLink>

                    <NavLink 
                        to="pricing" 
                        className={({isActive}) => isActive ? "active-link" : null}
                    >
                        Pricing
                    </NavLink>

                    <NavLink 
                        to="photos" 
                        className={({isActive}) => isActive ? "active-link" : null}
                    >
                        Photos
                    </NavLink>

                </nav>   
                 {/* context => share values with child routes  */}
                {/* <Outlet context={{currVan}}/>   */}
            </div>
            
        </div>

    )
}
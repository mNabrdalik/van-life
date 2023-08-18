import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import arrowBack from "../../images/ArrowBack.png"

export default function HostVanDetail() {

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
    )
}
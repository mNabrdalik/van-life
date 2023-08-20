import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import arrowBack from "../../images/ArrowBack.png"

export default function VanDetail() {
    //data from url -> :id
    const params = useParams()
    //get data from url from previous page. Used to go back to previous subpage which filtered data, no to default subpage 
    const location = useLocation()

    const[van, setVan] = React.useState([]);

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))    
    },[params.id])

    const typeInLink = location.state.search ? location.state.type : "all"
   
    return (
        <div className="van-detail-container">
            {van ? (
            <div className="van-detail">
                <Link 
                    to={location.state.search ? "..?" + location.state.search : ".."}
                    relative="path" 
                    className="back-btn"
                ><img src={arrowBack} alt="Back to Vans" /> <span>Back to {typeInLink} vans</span>
                </Link>

                <img className="van-img" src={van.imageUrl} alt={van.name} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button btn btn-primary">Rent this van</button>
            </div>
            ) : <h2>Loading ...</h2> }
        </div>
    )
}
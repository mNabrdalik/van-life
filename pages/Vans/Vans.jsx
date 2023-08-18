import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {

    //state for data from memes api
    const[vans, setVans] = React.useState([]);

    //side effect - on first site render (empty array), save database from allVans state
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))    
    },[])

    const vanElements = vans.map(item => (
        <Link key={item.id} to={`/vans/${item.id}`}>
            <div className="van-tile">
                <img src={item.imageUrl} alt={item.name} />
                <div className="van-info">
                    <h3>{item.name}</h3>
                    <p>${item.price} <span>/day</span></p>
                </div>
                <i className={`van-type ${item.type} selected`}>{item.type}</i>
            </div>
        </Link>

    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>

    )
}
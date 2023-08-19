import React from "react";
import { Link, useSearchParams, NavLink } from "react-router-dom";

export default function Vans() {

    //searchParams => query to search/filter data, based on query(?) from URL 
    const[searchParams, setSearchParams] = useSearchParams()

    //state for data from server.js
    const[vans, setVans] = React.useState([]);

    const typeFilter = searchParams.get('type')

    //side effect - on first site render (empty array), save database from allVans state
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))    
    },[])

    //check if was used search
    const displayedVans = typeFilter ? vans.filter(item => item.type.toLowerCase() === typeFilter) :  vans;

    const vanElements = displayedVans.map(item => (
        <NavLink key={item.id} to={`${item.id}`}>
            <div className="van-tile">
                <img src={item.imageUrl} alt={item.name} />
                <div className="van-info">
                    <h3>{item.name}</h3>
                    <p>${item.price} <span>/day</span></p>
                </div>
                <i className={`van-type ${item.type} selected`}>{item.type}</i>
            </div>
        </NavLink>

    ))

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <nav className="van-list-filters"> 
            
                <button 
                    onClick={() => {setSearchParams({type: "simple"})}}
                    className={
                        `van-type simple ${typeFilter === "simple" ? "selected" : null}`
                    }
                >Simple</button>

                <button 
                    onClick={() => {setSearchParams({type: "luxury"})}}
                    className={
                        `van-type luxury ${typeFilter === "luxury" ? "selected" : null}`
                    }
                >Luxury</button>

                <button 
                    onClick={() => {setSearchParams({type: "rugged"})}}
                    className={
                        `van-type rugged ${typeFilter === "rugged" ? "selected" : null}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button 
                        onClick={() => {setSearchParams({})}}
                        className="van-type clear-filters"
                    >Clear filters</button> 
                    ) : null}
            </nav>
            <div className="van-list">
                {vanElements}
            </div>
        </div>

    )
}
import React from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import {getVans} from "../../api"


export function loader() {
    //data from api, server.js
    return getVans()
}

export default function Vans() {

    //using data from loader() function
    const vans = useLoaderData()

    //searchParams => query to search/filter data, based on query(?) from URL 
    const[searchParams, setSearchParams] = useSearchParams()

    const[error, setError] = React.useState(null)

    const typeFilter = searchParams.get('type')

    //render error info on site
    if (error) {
        return (
            <div className="van-list-container">
                <h1>There was an error: {error.message}</h1>
            </div>
        )
    }

    //check if was used search
    const displayedVans = typeFilter ? vans.filter(item => item.type.toLowerCase() === typeFilter) :  vans;

    const vanElements = displayedVans.map(item => (
        // in "to", absolute path "/vans/${item.id}" was change to relative => item.id
        //state is for remeber filters and send to VanDetail. Necessary in case when someone back grom VanDetail to Vans and shouldn't have cleared filters.
        <Link key={item.id} to={item.id} state={{search: searchParams.toString(), type: item.type}}>
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
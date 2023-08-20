import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {getVans} from "../../api"

export default function Vans() {

    //searchParams => query to search/filter data, based on query(?) from URL 
    const[searchParams, setSearchParams] = useSearchParams()

    //state for data from server.js
    const[vans, setVans] = React.useState([]);

    // state for loading data effect
    const[loading, setLoading] = React.useState(false)

    const[error, setError] = React.useState(null)

    const typeFilter = searchParams.get('type')

    //side effect - on first site render (empty array), save database from allVans state
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true) //this is turn on state with render loading info on screen
            try {
                const data = await getVans()
                setVans(data)
            } catch(err) {
                console.log("Ooops, there was and error!")
                console.log(err)

                setError(err) //set data in error state
            } finally {
                setLoading(false) //this is turn off state with render loading info on screen
            }
          
        }

        loadVans()
    },[])

    //render loading info on site
    if (loading) {
        return (
            <div className="van-list-container">
                <h1>Loading ...</h1>
            </div>
        )
    }

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
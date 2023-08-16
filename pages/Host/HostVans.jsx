import React from "react"
import {Link} from "react-router-dom"

export default function HostVans() {

    const[vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    },[])

    const hostVansEls  = vans.map(item => (
        <Link to={`/host/vans/${item.id}`} key={item.id} className="hostVan-tile">
            <img src={item.imageUrl} alt={item.name} />
            <div className="hostVan-info">
                <h3>{item.name}</h3>
                <p>${item.price} <span>/day</span></p>
            </div>
        </Link>
    ))

    return (
        <div className="host-van-list-container">
            <h1>Your listed vans</h1>
            <div className="hostVans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </div>
    )
}
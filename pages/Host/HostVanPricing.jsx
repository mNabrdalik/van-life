import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {

    const {currVan} = useOutletContext()

    return (
        <div className="host-van-info-price">
            <h2>${currVan.price}<span>/day</span></h2>
        </div>
    )
}
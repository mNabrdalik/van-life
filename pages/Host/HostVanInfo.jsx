import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanDetail() {

    const {currVan} = useOutletContext();

    return (
        <div className="host-van-info-desc">
            <h4>Name: <span>{currVan.name}</span></h4>
            <h4>Category: <span>{currVan.type}</span></h4>
            <h4>Description: <span>{currVan.description}</span></h4>
            <h4>Visibility: <span>public</span></h4>
        </div>
    )
}
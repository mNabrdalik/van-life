import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {

    const {currVan} = useOutletContext()

    return (
        <div className="host-van-info-gallery">
            <img src={currVan.imageUrl} alt={currVan.name} />
        </div>
    )
}
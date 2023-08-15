import React from "react";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

    return (
        <div>
            Host Dashboard Here
            <Outlet/>
        </div>
    )
}
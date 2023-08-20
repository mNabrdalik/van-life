import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {

    return (
        <div className="notFound">
            <h1>404 :(</h1>
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Link to="/" className='btn btn-black'>Return to home</Link>
        </div>
    )
}
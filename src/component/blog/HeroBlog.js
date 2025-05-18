import React from 'react';
import { Link } from 'react-router-dom';

const HeroBlog = () => {
    return (
        <div className="container-fluid bg-primary p-5 bg-hero mb-5">
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h1 className="display-2 text-uppercase text-white mb-md-4">Blog Grid</h1>
                    <Link to={"/"} className="btn btn-primary py-md-3 px-md-5 me-3">Home</Link>
                    <Link to={"/blog"} className="btn btn-light py-md-3 px-md-5">Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroBlog;

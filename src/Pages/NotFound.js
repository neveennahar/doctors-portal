import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2 className="text-3xl"> 404 | PAGE NOT FOUND</h2>
            <Link to={'/'}><button className="btn">Go to home</button></Link>
        </div>
    );
};

export default NotFound;
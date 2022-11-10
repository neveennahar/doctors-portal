import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-taupe.vercel.app/services?limit=3')
            .then((res) => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Spa Center</h1>
                        <Link to={"/"} className="btn btn-secondary">Start Exploring</Link>
                    </div>
                </div>
            </div>

            <div className='my-4'>
                <h1 className="text-center">Services</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services?.map((service) => <div className="card bg-base-100 shadow-xl">
                            <figure><img className='h-52' src={service?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service?.name}</h2>
                                <p>{service?.description}</p>
                                <div className="card-actions justify-end">
                                    <Link className="btn btn-primary" to={`/services/${service._id}`}>Details</Link>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
                <div className="text-center mt-4">
                    <Link className='btn btn-secondary' to='/services'>See All Services</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;
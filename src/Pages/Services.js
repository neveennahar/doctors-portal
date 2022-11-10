import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='my-4'>
            <h1 className="text-center">All Services</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map((service, index) => <div key={index} className="card bg-base-100 shadow-xl">
                        <figure><img className='h-52' src={service?.image} alt={service.title} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{service?.title}</h2>
                            <p>{service?.description}</p>
                            <div className="card-actions justify-end">
                                <Link className="btn btn-primary" to={`/services/${service._id}`}>Details</Link>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default Services;
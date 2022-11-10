import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCourses = () => {
    const courses = useLoaderData()

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {
                courses?.map((course) => {
                    return (
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img className='h-52' src={course?.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{course?.name}</h2>
                                <p>Price: {course?.price}</p>
                                <div className="card-actions justify-end">
                                    <Link className="btn btn-primary" to={`/courses/${course.id}`}>Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </div>
    );
};

export default AllCourses;
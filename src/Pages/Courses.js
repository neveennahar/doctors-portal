import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div className='grid grid-cols-1 md:grid-cols-5 gap-5 mt-5 rounded-lg'>
            <div className='bg-base-300 h-full p-4'>
                {
                    courses?.map((course) => <Link className='p-4 btn btn-primary block w-full my-3' to={`/courses/${course.id}`}>{course.name} </Link>)
                }


            </div>

            <div className='md:col-span-4'>
                <Outlet />
            </div>

        </div>
    );
};

export default Courses;
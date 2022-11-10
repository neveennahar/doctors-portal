import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MyContext } from '../Context/AuthContext';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(true)
    const { user } = useContext(MyContext)
    const service = useLoaderData();

    useEffect(() => {
        if (service?._id) {
            fetch(`https://assignment-11-server-taupe.vercel.app/reviews/service/${service?._id}`)
                .then(res => res.json())
                .then(data => setReviews(data))
        }
    }, [service?._id, refresh])

    const addReview = (event) => {
        event.preventDefault();

        const reviewData = event.target.review.value;

        const review = {
            email: user?.email,
            service_id: service?._id,
            description: reviewData
        }

        fetch('https://assignment-11-server-taupe.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success("review added...")
                    setRefresh(!refresh)
                }
            })



    }


    return (
     <div>

<div className="card bg-base-100 shadow-xl">
                            <figure><img className='h-52' src={service?.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{service?.name}</h2>
                                <p>{service?.description}</p>
                                <div className="card-actions justify-end">
                                    <Link className="btn btn-primary" to={`/services/${service._id}`}>Details</Link>
                                </div>
                            </div>
                        </div>

<div className='grid grid-cols-1 md:grid-cols-2 my-4 gap-8'>

<div className="reviews my-5">
    {
        reviews?.map((review) => {
            return (
                <div className="card bg-base-100 shadow-xl my-2">
                    <div className="card-body">
                        <p>Review: {review?.description}</p>

                        <p>Author email: {review?.email}</p>
                    </div>
                </div>
            )
        })
    }
</div>

{
    user ? <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={addReview} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">your reivew</span>
                </label>
                <input type="text" name='review' placeholder="review" className="input input-bordered" />
            </div>

            <div className="form-control mt-6">
                <button className="btn btn-primary">send</button>
            </div>
        </form>
    </div>
        :
        <Link to='/login' className='btn btn-primary'> Please Login to give review</Link>
}
</div>



     </div>


    );
};

export default ServiceDetails;
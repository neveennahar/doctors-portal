import React from 'react';
import { toast } from 'react-toastify';

const UpdateReviewModal = ({ review, setReview, user, setRefresh, refresh }) => {


    console.log(review)

    const updateService = (event) => {
        event.preventDefault()
        const form = event.target;

        const reviewData = {
            description: form.description.value,
        }

        fetch(`https://assignment-11-server-taupe.vercel.app/reviews/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("updated ")
                setReview(null)
                setRefresh(!refresh)
            })

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setReview(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={updateService} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input type="text" defaultValue={review?.description} name='description' placeholder="Sevice Name" className="input input-bordered" />
                            </div>


                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateReviewModal;
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UpdateReviewModal from '../components/UpdateReviewModal';
import { MyContext } from '../Context/AuthContext';

const MyReviews = () => {
    const [refresh, setRefresh] = useState(false)
    const [myreviews, setMyreviews] = useState([])
    const { user } = useContext(MyContext)

    const [review, setReview] = useState(null)

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-11-server-taupe.vercel.app/myreviews/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setMyreviews(data)
                })
        }
    }, [refresh, user?.email])


    const deleteReview = (id) => {

        const confirm = window.confirm("Are you sure to delete");
        if (!confirm) {
            return;
        }

        fetch(`https://assignment-11-server-taupe.vercel.app/reviews/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                setRefresh(!refresh)
            })
    }


    return (
        <div className=''>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myreviews.length === 0 ?
                                <h1>No Reviews Yet</h1>
                                :
                                <>
                                    {
                                        myreviews.map((review) => {
                                            return (
                                                <tr>
                                                    <td>{review?.description}</td>
                                                    <td>
                                                        <label htmlFor="my-modal-3" onClick={() => setReview(review)} className='btn btn-xs btn-info'>update</label>
                                                        <button onClick={() => deleteReview(review?._id)} className='btn btn-xs btn-error'>delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </>
                        }


                    </tbody>
                </table>
            </div>
            {
                review && <UpdateReviewModal
                    review={review}
                    setReview={setReview}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    user={user}

                />
            }


        </div>
    );
};

export default MyReviews;
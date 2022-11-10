import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import UpdateServiceModal from '../components/UpdateReviewModal';
import { MyContext } from '../Context/AuthContext';

const MyServices = () => {

    const [refresh, setRefresh] = useState(false)
    const [myservices, setMyservices] = useState([])
    const { user } = useContext(MyContext)

    const [service, setService] = useState(null)

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assignment-11-server-taupe.vercel.app/services?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyservices(data)
                })
        }
    }, [refresh, user?.email])
    const addService = (event) => {
        event.preventDefault();
        const form = event.target;

        const service = {
            image: form.image.value,
            title: form.title.value,
            description: form.description.value,
            email: user?.email
        }

        fetch('https://assignment-11-server-taupe.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRefresh(!refresh)
                form.reset()
            })
    }

    const deleteService = (id) => {

        const confirm = window.confirm("Are you sure to delete");
        if (!confirm) {
            return;
        }

        fetch(`https://assignment-11-server-taupe.vercel.app/services/${id}`, {
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={addService} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name='title' placeholder="Sevice Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Image</span>
                        </label>
                        <input type="text" name='image' placeholder="Sevice Image Url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Description</span>
                        </label>
                        <input type="text" name='description' placeholder="Sevice Description" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Service</button>
                    </div>
                </form>
            </div>

            <div className="overflow-x-auto md:col-span-2">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>name</th>
                            <th>description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myservices.map((service) => {
                                return (
                                    <tr>
                                        <td>{service?.title}</td>
                                        <td>{service?.description}</td>
                                        <td>
                                            <button onClick={() => deleteService(service?._id)} className='btn btn-xs btn-error'>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
            {
                service && <UpdateServiceModal
                    service={service}
                    setService={setService}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    user={user}

                />
            }


        </div>
    );
};

export default MyServices;
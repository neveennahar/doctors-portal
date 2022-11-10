import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/AuthContext';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(MyContext)

    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleRegistration = (event) => {
        setError("")
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                if (result?.user) {
                    updateUserProfile({ displayName: name, photoURL: photoURL })
                    navigate('/', { replace: true })
                }
            })
            .catch((error) => {
                console.log(error)
                setError(error.message)
            })

    }

    return (
        <div className='w-96 mx-auto my-5 p-5 rounded-xl shadow-xl'>

            <h2 className="text-center my-3 text-2xl font-bold">Registration</h2>
            <p className="text-red-400 mb-2">{error}</p>

            <form onSubmit={handleRegistration}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
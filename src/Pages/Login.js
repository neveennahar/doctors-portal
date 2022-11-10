import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../Context/AuthContext';

const Login = () => {
    const { googleSignIn, githubSignIn, signIn } = useContext(MyContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('')
    const from = location.state?.from?.pathname || '/'

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleLogin = (event) => {
        setError("")
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                console.log(result.user)
                if (result?.user) {
                    navigate(from, { replace: true })
                }
            })
            .catch(error => setError(error?.message))
    }
    const handleGoogleLogin = () => {

        setError("")

        googleSignIn(googleProvider)
            .then((result) => {
                console.log(result.user)
                if (result?.user) {
                    navigate(from, { replace: true })
                }
            })
            .catch(error => setError(error?.message))
    }



    return (
        <div className='w-96 mx-auto my-5 p-5 rounded-xl shadow-xl'>

            <h2 className="text-center my-3 text-2xl font-bold">Login</h2>
            <p className="text-red-400 mb-2">{error}</p>

            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Login</button>
                </div>
            </form>
            <button onClick={handleGoogleLogin} className='btn btn-error text-white w-full my-3'>Google Login</button>




        </div>
    );
};

export default Login;
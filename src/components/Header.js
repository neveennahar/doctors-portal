import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/AuthContext';

const Header = () => {

    const { user, logOut } = useContext(MyContext)
    console.log(user);

    return (
        <div className="navbar bg-base-200 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/services"}>Services</Link></li>
                        <li><Link to={"/blog"}>Blog</Link></li>
                        {
                            !user ?
                                <>
                                    <li><Link to={"/login"}>Login</Link></li>
                                    <li><Link to={"/register"}>Register</Link></li>
                                </>
                                :
                                <>
                                    <li><a onClick={logOut} >Logout</a></li>
                                    <li><Link to="/myreviews">My Reviews</Link></li>
                                    <li><Link to="/myservices">My Services</Link></li>
                                    <li>
                                        <div className="avatar z-50 tooltip tooltip-right" data-tip="hello">
                                            <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user?.photoURL || "https://placeimg.com/192/192/people"} />
                                            </div>
                                        </div>
                                    </li>
                                </>
                        }

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Spa Center</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/services"}>Services</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                    {
                        !user ?
                            <>
                                <li><Link to={"/login"}>Login</Link></li>
                                <li><Link to={"/register"}>Register</Link></li>
                            </>
                            :
                            <>
                                <li><a onClick={logOut} >Logout</a></li>
                                <li><Link to="/myreviews">My Reviews</Link></li>
                                <li><Link to="/myservices">My Services</Link></li>
                                <li>
                                    <div className="avatar z-50 tooltip tooltip-right" data-tip={user?.displayName}>
                                        <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={user?.photoURL || "https://placeimg.com/192/192/people"} />
                                        </div>
                                    </div>
                                </li>
                            </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Header;


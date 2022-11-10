import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Layout from '../Layout/Layout';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Blog from '../Pages/Blog';
import PrivateRoute from './PrivateRoute';
import MyReviews from '../Pages/MyReviews';
import Services from '../Pages/Services';
import ServiceDetails from '../Pages/ServiceDetails';
import MyServices from '../Pages/MyServices';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/services",
                element: <Services />,
                loader: () => fetch('https://assignment-11-server-taupe.vercel.app/services')
            },
            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`https://assignment-11-server-taupe.vercel.app/services/${params.id}`)
            },
            {
                path: "/myreviews",
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: "/myservices",
                element: <PrivateRoute><MyServices /></PrivateRoute>
            },


        ]
    },
    {
        path: "*",
        element: <NotFound />
    }

])
import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] md:w-[50%] mx-auto my-8'>
            <h1 className='font-bold mb-5'>Questions and Answers</h1>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    1. Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
                        SQL databases defines and manipulates data based structured query language (SQL).A NoSQL database has dynamic schema for unstructured data.In almost all situations SQL databases are vertically scalable.But on the other hand NoSQL databases are horizontally scalable.SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. </p>
                </div>
            </div>

            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    2. What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>JWT, or JSON Web Token, is an open standard(RFC 7519) set of claims to share security information or authorization/authentication requests between a client and a server.

                        Authentication: In the case of authentication, a JWT is returned when the user successfully logs in using their credentials. User can save it locally either in the local storage, session storage, or cookies.

                        Authorization: Once the user successfully logs in, there may be a need to access data from the server. In such cases, the user can use JWT to retrieve the data. JWT should be sent by the user, typically in the Authorization header using the Bearer schema.
                        Information Exchange: JWTs are widely used to exchange a set of information between parties. Since they are signed, you can be sure of the sender that he is genuine. Also, the signature part of the token allows you to make sure that the token has not been tampered with.</p>
                </div>
            </div>

            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                    3. What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p> JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine.

                        JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.

                        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.

                        JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development

                        JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;
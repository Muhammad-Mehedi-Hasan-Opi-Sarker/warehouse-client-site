import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog container'>
            {/* first question  */}
            <h2><span style={{ color: '#ff5c00' }}>Quention 1:</span> Difference between javascript and nodejs</h2>
            {/* for javascript  */}
            <div className='blogs'>
                <div>
                    <h3>Javascript</h3>
                    <ul>
                        <li>Javascript only can run on browser.</li>
                        <li>It is used on the client site.</li>
                        <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                        <li>Javascript is used in frontend development.</li>
                    </ul>
                </div>
                {/* for nodejs  */}
                <div>
                    <h3>Nodejs</h3>
                    <ul>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>Nodejs is used in server-side development.</li>

                    </ul>
                </div>
            </div>
            {/* question second */}
            <h2><span style={{ color: '#ff5c00' }}>Question 2:</span> Differences between sql and nosql databases.</h2>
            <div className='blogs'>

                <div>
                    <h3>SQL</h3>
                    <ul>
                        <li>
                            SQL databases are primarily called as Relational Database.
                        </li>
                        <li>SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability)</li>
                        <li>These databases are not suited for hierarchical data storage.</li>
                        <li>These databases have fixed or static or predefined schema</li>
                        <li>These databases are best suited for complex queries</li>
                    </ul>
                </div>
                <div>
                    <h3>No SQL</h3>
                    <li>NoSQL database are primarily called as non-relational or distributed database.</li>
                    <li>NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). </li>
                    <li>These databases are best suited for hierarchical data storage.</li>
                    <li>They have dynamic schema</li>
                    <li>These databases are not so good for complex queries</li>
                </div>
            </div>
            <div>
                <h2><span style={{ color: '#ff5c00' }}>Question 3:</span> What is the purpose of jwt and how does it work</h2>
                <p>A JSON Web Token (JWT) is a JSON object used to securely transfer information across
                     the web (between two parties). It can be used for authentication 
                     system and also for information exchange Tokens consist mainly of headers,
                     The serialized method is mainly used to transfer data through the network with
                      each request and response. 
                    Web tokens use the decrypted method to read and write data.</p>
            </div>
        </div>
    );
};

export default Blog;
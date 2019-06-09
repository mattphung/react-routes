import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <React.Fragment>
            <h1>Home Page</h1>

            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/oldurl">Old Url</Link></li>
            </ul>


        </React.Fragment>
        

     );
}
 
export default HomePage;
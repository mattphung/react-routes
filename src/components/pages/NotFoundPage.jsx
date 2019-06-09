import React from 'react';  
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return ( 
       
    <React.Fragment>
        <h3>Not found Page</h3> 
        <br/>
        <Link to="/">Home</Link>
    </React.Fragment>
        
    );
}
 
export default NotFoundPage;
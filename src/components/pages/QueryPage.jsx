import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const QueryPage = ({ location }) => {

    const params = queryString.parse(location.search);

    return ( 
    <React.Fragment>
        <h3>Query String</h3>
        <br/>
            <Link to="/">Home</Link>
            <br/>
            <br/>
        <p>Query string parameters are stored in the location prop. <br /> 
        install query string package. npm i query-string@6.1.0<br/>
        
        </p>

        <span>Param #1: {params.id}</span>
        <br/>
        <span>Param #2: {params.username}</span> 

    </React.Fragment>

     );
}
 
export default QueryPage;
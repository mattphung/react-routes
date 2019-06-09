import React from 'react';
import { Link } from 'react-router-dom';

const RouteParamPage = ({match}) => {

    const { params } = match;

    console.log('parameters', {match});
    

    return ( 
    <React.Fragment>
        <h3>Passing Route Parameters</h3>
        <br/>
            <Link to="/">Home</Link>
            <br/>
            <br/>
        <p>Use React Dev tool to look at the match prop. Generally, query string parameters are preferred over route parameters</p>

        <span>Param #1: {params.id}</span>
        <br/>
        <span>Param #2: {params.username}</span> 
    </React.Fragment>
     );
}
 
export default RouteParamPage;
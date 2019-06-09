import React from 'react';
import { Link } from 'react-router-dom';

const CustomPropPage = (props) => {

    var displayReactCode = '<Route path="/customprops" exact render={(props) => <CustomPropPage myProp="Matty" {...props} />}></Route>';

    console.log('props', props);
    
    return ( 
        <React.Fragment>
            <h3>Custom Props</h3>
            <br/>
            <Link to="/">Home</Link>
            <br/>
            <br/>
            <p>By default Route components automatically pass history, location and match as props. To work with the props you have to include props as a default argument.
                Use the Render attribute to include custom props. The routes are located in app.jsx
                <br/>    
            <br/>ex. {displayReactCode}
            <br/>The spread operator is used to clone the default props to be included. Without ...props then your the account component will only contain your custom prop   
                
            </p>
            my custom prop: {props.myProp}
        </React.Fragment>
     );
}
 
export default CustomPropPage;
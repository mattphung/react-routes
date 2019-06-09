# react-routes
This is a bsic tutorial on routes

PROJECT SETUP
    1. Create the React project: create-react-app react-routes
   	2. Install React Router. Ex:  sudo npm install react-router-dom
	3. In Index.js, import { BrowserRouter } from “react-router-dom” and wrap <BrowserRouter> tags around <App>. 
	4.  Open App.js and import components
		import { Route, Switch } from 'react-router-dom';
		import HomePage from './components/pages/HomePage';
		import LoginPage from './components/pages/LoginPage';

         {/* Use switch so the url will be processed systematically. Specific url on top and gets more generic going down the list  */}
        <Switch>
            <Route path="/account" exact component={AccountPage}></Route>
            
            <Route path="/login" exact component={LoginPage}></Route>
            <Route path="/notfound" exact component={NotFoundPage}></Route>
            <Route path="/register" exact component={RegisterPage}></Route>

            {/* automatically redirect old url to new page. Requires the redirect component */}
            <Redirect from="/oldurl" to="/register" ></Redirect>

            {/* used exact in the home route so only handles the root. Ex. http://www.yahoo.com */}
            <Route path="/" exact component={HomePage}></Route>                 

            {/* Requires the redirect component */}
            <Redirect to="/notfound"></Redirect>
        </Switch>


	10. Create the HomePage
            import { Link } from 'react-router-dom';

            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/account">Account</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/oldurl">Old Url</Link></li>
            </ul>    



ROUTE PROPS
    Route components automatically injects history, location and match props
        history - history in the browser 
        location - where the app is now
        match - how the url is matched to the path

    How to pass additional props besides the 3 default props
        use the render attribute
            ex. <Route path="/account" exact render={(props) => <AccountPage showHiddenAccounts="Yes" {...props} />}></Route>
                The spread operator is used to clone the default props to be included. Without ...props then your the account component will only contain your custom prop













import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AccountPage from './components/pages/AccountPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';
import RegisterPage from './components/pages/RegisterPage';
import CustomPropPage from './components/pages/CustomPropPage';
import QueryPage from './components/pages/QueryPage';
import RouteParamPage from './components/pages/RouteParamPage';

function App() {
  return (
      <React.Fragment>
    			
         {/* Use switch so the url will be processed systematically. Specific url on top and gets more generic going down the list  */}
        <Switch>
            <Route path="/account" exact component={AccountPage}></Route>
            
            <Route path="/login" exact component={LoginPage}></Route>
            <Route path="/notfound" exact component={NotFoundPage}></Route>
            <Route path="/register" exact component={RegisterPage}></Route>
            <Route path="/customprops" exact render={(props) => <CustomPropPage myProp='Matty' {...props} />}></Route>

            <Route path="/query" exact component={QueryPage}></Route>
            <Route path="/routeparam/:id?/:username?" component={RouteParamPage}></Route>


            {/* automatically redirect old url to new page. Requires the redirect component */}
            <Redirect from="/oldurl" to="/register" ></Redirect>

            {/* used exact in the home route so only handles the root. Ex. http://www.yahoo.com */}
            <Route path="/" exact component={HomePage}></Route>                 

            {/* Requires the redirect component */}
            <Redirect to="/notfound"></Redirect>
        </Switch>

  		</React.Fragment>       

  );
}

export default App;

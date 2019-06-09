import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AccountPage from './components/pages/AccountPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import NotFoundPage from './components/pages/NotFoundPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  return (
      <React.Fragment>
    			
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

  		</React.Fragment>       

  );
}

export default App;

# react-routes
This is a bsic tutorial on routes

Project Stepup
    1. Create the React project: create-react-app react-routes
   	2. Install React Router. Ex:  sudo npm install react-router-dom
	3. In Index.js, import { BrowserRouter } from “react-router-dom” and wrap <BrowserRouter> tags around <App>. 
	4.  Open App.js and import HomePage and Login
		import { Route, Switch } from 'react-router-dom';
		import HomePage from './components/pages/HomePage';
		import LoginPage from './components/pages/LoginPage';

		  <div>
    			<Route path='/' exact component={HomePage}></Route>
    			<Route path='/login' exact component={LoginPage}></Route>
  		  </div>


	10. Create the HomePage and LoginPage 
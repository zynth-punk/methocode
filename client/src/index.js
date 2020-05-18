import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import index from './pages/indexPage';
import mainMenu from './pages/mainMenuPage';
import aboutPage from './pages/aboutPage';
import codeTranslator from './pages/codeTranslatorPage';
import helpPage from './pages/helpPage';
import userLogin from './pages/userLoginPage';
import userSignUp from './pages/userSignUpPage';
import userProfile from './pages/userProfilePage';
import CoursePage from './pages/CoursePage';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  
  <React.StrictMode>
    <Router>
      <div>
        <Route exact path='/' component={index} />
        <Route exact path='/index' component={index} />
        <Route exact path='/mainmenu' component={mainMenu} />
        <Route exact path='/courses' component={CoursePage} />
        <Route exact path='/translator' component={codeTranslator} />
        <Route exact path='/about' component={aboutPage} />
        <Route exact path='/help' component={helpPage} />
        <Route exact path='/userlogin' component={userLogin} />
        <Route exact path='/userprofile' component={userProfile} />
        <Route exact path='/usersignUp' component={userSignUp} />
      </div>
    </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

//registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

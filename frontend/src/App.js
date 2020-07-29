import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';


import NavBar from './components/views/NavBar/NavBar'
import FixedBar from './components/views/FixedBar/FixedBar'
import Footer from './components/views/Footer/Footer'
import LandingPageRepo from './components/views/LandingPage/LandingPageRepo'
import LandingPageVote from './components/views/LandingPage/LandingPageVote'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import VoteDetailPage from './components/views/DetailPage/VoteDetailPage'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
      <Route path={ new RegExp("^(?!.*(/register|/login)).*$") } component={NavBar}/>
      <Route path={ new RegExp("^(?!.*(/register|/login)).*$") } component={FixedBar}/>
      <div style={{minHeight:'calc(100vh - 80px)'}}>
        <Switch>
          <Route exact path='/' component={LandingPageVote}/>
          <Route exact path='/repo' component={LandingPageRepo}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/register' component={RegisterPage}/>
          <Route exact path="/vote/detail" component={VoteDetailPage}/>
        </Switch>
      </div>
      <Route path="^/(?!.*(/login|/register)).*$" component={Footer}/>
    </Router>
    </Suspense>
  );
}

export default App;

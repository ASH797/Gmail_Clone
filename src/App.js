import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom'
import EmailList from './EmailList';
import Mail from './Mail';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Router>

          <Switch>
            <Route path='/mail'>{<Mail />}</Route>
            <Route exact path='/' >{<EmailList />}</Route>

          </Switch>
        </Router>

      </div>


    </div>
  );
}

export default App;

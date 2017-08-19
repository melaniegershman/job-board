import React, { Component } from 'react';
import './App.css';
import { JobListings} from './components/jobs';
import JobPostForm from './components/form';
import { Route, Switch, Redirect } from 'react-router-dom'


const App = () => {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}
const Header = () => {
    return (
        <nav>
            <h1>Job Board</h1>
        </nav>
    )
}
const Main = () => {
    return (
        <Switch>
            <Route exact path='/jobs' component={JobListings} />
            <Route exact path='/jobs/new' component={JobPostForm} />
            <Redirect from='/' to='/jobs' />
        </Switch>
    )
}


export default App;

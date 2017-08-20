import React, { Component } from 'react';
import './App.css';
import { JobListings} from './components/jobs';
import JobPostForm from './components/form';
import { Route, Switch, Redirect, Link} from 'react-router-dom'


const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    )
}
const Header = (props, context) => {
    console.log("pathname ", context);
    return (

        <nav>
            <h1><Link to='/jobs/'>Job Board</Link></h1>
        </nav>
    )
}
const Main = () => {
    return (
        <Switch>
            <Route exact path='/jobs' component={JobListings} />
            <Route exact path='/jobs/new' component={JobPostForm} />
            <Route path='/jobs/edit/:id' component={JobPostForm} />
            <Redirect from='/' to='/jobs' />
        </Switch>
    )
}


export default App;

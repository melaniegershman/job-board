import React, { Component } from 'react';
import './App.css';
import Job from './components/jobs';
import JobPostForm from './components/form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    }

    loadData() {
        fetch('http://localhost:3000/api/v1/jobs.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    jobs: data
                });
            });
    }

    componentDidMount() {
        this.loadData();
    }


    render() {
        if(this.state.jobs) {
            let jobs = this.state.jobs.map( job => {
                return (
                    <Job key={job.id} name={job.name} description={job.description} experience={job.experience} />
                );
            });

            return (
                <div>
                    <div>{jobs}</div>
                    <JobPostForm />
                </div>
            )

        } else {
            return <div></div>
        }
    }
}




export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class JobListings extends Component {
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
            // need to add a catch for error
    }

    componentDidMount() {
        this.loadData();
    }


    render() {
        if(this.state.jobs) {
            let jobs = this.state.jobs.map( job => {
                var willing_to_relocate = (job.willing_to_relocate) ? "Yes" : "No";
                return (
                    <Job
                        key={job.id}
                        name={job.name}
                        description={job.description}
                        experience={job.experience}
                        willing_to_relocate={willing_to_relocate}
                    />
                );
            });

            return (
                <div>
                    <Link to='/jobs/new'>Add New Job Posting</Link>
                    {jobs}
                </div>
            )

        } else {
            return <div></div>
        }
    }
}



export const Job = props => {
    return (
        <li>
            <h3>Job Title: {props.name}</h3>
            <p>Job Description: {props.description}</p>
            <p>Experience required: {props.experience}</p>
            <p>Willing to relocate: {props.willing_to_relocate}</p>
        </li>
    )
}

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
                        location={job.location}
                        industry={job.industry}
                        employment_type={job.employment_type}
                    />
                );
            });

            return (
                <section className="Job-post">
                    {jobs}
                </section>
            )

        } else {
            return <div></div>
        }
    }
}



export const Job = props => {
    return (
        <li>
            <h3>{props.name}</h3>
            <p className="description"><span>Job Description</span>{props.description}</p>
            <div className="details">
                <p><span>Experience</span>{props.experience}</p>
                <p><span>Relocation</span>{props.willing_to_relocate}</p>
                <p><span>Location</span>{props.location}</p>
                <p><span>Industry</span>{props.industry}</p>
                <p><span>Employment Type</span>{props.employment_type}</p>
            </div>

        </li>
    )
}

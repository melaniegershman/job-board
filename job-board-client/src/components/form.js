import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import fetchPost from './helpers/fetch-post';


class JobPostForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {
                name: '',
                description: '',
                experience: '',
                willing_to_relocate: '',
            },
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        let newState = Object.assign({}, this.state);
        newState['data'][event.target.name] = event.target.value;

        this.setState(newState);

    }

    handleSubmit(event) {
        event.preventDefault();

        fetchPost(this.state.data, (submittedState) => this.setState(submittedState));

    }

    render () {
        let redirect = this.state.submitted ? <Redirect to='/jobs' /> : ""
        return (
            <section className="New-job-form">
                <form onSubmit={this.handleSubmit}>
                    <p>Job Title:</p>
                    <input type="text" name="name" placeholder='Enter the title of the job position' value={this.state.data.name} onChange={this.handleChange} />
                    <p>Job Description:</p>
                    <textarea rows="4" cols="50" name="description" placeholder='Enter a job description' value={this.state.data.description} onChange={this.handleChange} />
                    <p>What is your required experience level?</p>
                    <select name="experience" onChange={this.handleChange}>
                      <option value="Intern">Intern</option>
                      <option value="Entry-level">Entry-level</option>
                      <option value="Mid-level">Mid-level</option>
                      <option value="Senior">Senior</option>
                    </select>
                    <p>Are you willing to relocate?</p>
                    <input type="radio" name="willing_to_relocate" value="true" onChange={this.handleChange} />
                    <label>Yes</label>
                    <input type="radio" name="willing_to_relocate" value="false" onChange={this.handleChange} />
                    <label>No</label>
                    <input type="submit" value="Submit Job Posting" />
                    {redirect}
                </form>
            </section>
        )
    }
}


export default JobPostForm;

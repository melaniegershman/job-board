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
                location: '',
                industry: '',
                employment_type: '',
                id: this.props.match.params.id || ''
            },
            submitted: false,
            isEditing: this.props.match.params.id ? true : false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.state.isEditing) this.loadData();
    }

    loadData() {
        fetch(`http://localhost:3000/api/v1/jobs/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                let newState = Object.assign({}, this.state);
                newState.data = data;

                this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    handleChange(event) {

        let newState = Object.assign({}, this.state);
        newState['data'][event.target.name] = event.target.value;

        this.setState(newState);

    }

    handleSubmit(event) {
        event.preventDefault();

        fetchPost(this.state, (submittedState) => this.setState(submittedState));
    }

    render () {
        let redirect = this.state.submitted ? <Redirect to='/jobs' /> : ""
        let heading = this.state.isEditing ? `Edit job listing` : "Post a new job";
        let buttonCTA = this.state.isEditing ? "Edit job" : "Add new job"

        return (
            <section className="New-job-form Job-entry">
                <h3>{heading}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label className="label">Job Title
                        <input type="text" name="name" placeholder='Enter the title of the job position' value={this.state.data.name} onChange={this.handleChange} />
                    </label>
                    <label className="label">Job Description
                        <textarea rows="4" cols="100" name="description" placeholder='Enter a job description' value={this.state.data.description} onChange={this.handleChange} />
                    </label>
                    <label className="label">Job location
                        <input type="text" name="location" placeholder='Enter the location of the job position' value={this.state.data.location} onChange={this.handleChange} />
                    </label>
                    <label className="label">Industry
                        <input type="text" name="industry" placeholder="Enter the job industry" value={this.state.data.industry} onChange={this.handleChange} />
                    </label>
                    <label className="label">Employment type
                        <input type="text" name="employment_type" placeholder="Enter the employment type" value={this.state.data.employment_type} onChange={this.handleChange} />
                    </label>
                    <label className="label">What is your required experience level?
                        <select name="experience" onChange={this.handleChange}>
                            <option value="Intern">Intern</option>
                            <option value="Entry-level">Entry-level</option>
                            <option value="Mid-level">Mid-level</option>
                            <option value="Senior">Senior</option>
                        </select>
                    </label>
                    <label className="label">
                        <span className="label">Are you willing to relocate new employees?</span>

                        <label className="label">
                            <span className="label">Yes</span>
                            <input type="radio" name="willing_to_relocate" value="true" onChange={this.handleChange} />
                        </label>
                        <label className="label">
                            <span className="label">No</span>
                            <input type="radio" name="willing_to_relocate" value="false" onChange={this.handleChange} />
                        </label>
                    </label>

                    <input type="submit" value={buttonCTA} />
                    {redirect}
                </form>
            </section>
        )
    }
}


export default JobPostForm;

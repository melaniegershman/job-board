import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

const config = {
    name: null,
    description: null,
    experience: null,
    willing_to_relocate: null
}

class JobPostForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            experience: '',
            willing_to_relocate: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const newState = {}
        newState[event.target.name] = event.target.value;

        this.setState(newState);

        console.log('handleChange: ', event.target.value);

    }

    handleSubmit(event) {
        event.preventDefault();
        var details = this.state;

        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch('http://localhost:3000/api/v1/jobs', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formBody
      }).then(response => response.json()).then(response => console.log("response: ", response ))
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Job Title:</p>
                <input type="text" name="name" placeholder='Enter the title of the job position' value={this.state.name} onChange={this.handleChange} />
                <p>Job Description:</p>
                <textarea rows="4" cols="50" name="description" placeholder='Enter a job description' value={this.state.description} onChange={this.handleChange}> </textarea>
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
                <input type="submit"/>
            </form>
        )
    }
}


export default JobPostForm;

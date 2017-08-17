import React, { Component } from 'react';

const config = {

}

const JobPostForm = () => {
    return (
            <div>
                <p>Job Title:</p>
                <input placeholder='Enter the title of the job position' />
                <p>Job Description:</p>
                <input placeholder='Enter a job description' />
                <p>Is this position remote?</p>
                <input type="radio" value="yes"/>
                <label>Yes</label>
                <input type="radio" value="no"/>
                <label>No</label>
                <button onClick={this.handleClick}>Submit</button>
            </div>

    )
}


export default JobPostForm;

var NewJob= React.createClass({
    handleClick() {
        var name    = this.refs.name.value;
        var description = this.refs.description.value;
        $.ajax({
            url: '/api/v1/jobs',
            type: 'POST',
            data: { job: { name: name.upcase, description: description } },
            success: (job) => {
                this.props.handleSubmit(job);
            }
        });
    },
    render() {
        return (
                <div>
                    <p>Job Title:</p>
                    <input ref='name' placeholder='Enter the title of the job position' />
                    <p>Job Description:</p>
                    <input ref='description' placeholder='Enter a job description' />
                    <p>Is this position remote?</p>
                    <input type="radio" ref="willing_to_relocate" value="yes"/>
                    <label>Yes</label>
                    <input type="radio" ref="willing_to_relocate" value="no"/>
                    <label>No</label>
                    <button onClick={this.handleClick}>Submit</button>
                </div>

        )
    }
});

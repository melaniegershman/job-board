var AllJobs = React.createClass({
    getInitialState() {
        return {jobs: []}
    },
    componentDidMount() {
        $.getJSON('/api/v1/jobs.json', (response) => {
            this.setState({jobs: response})
            console.log(response);
        });
    },
    render() {
        var jobs = this.state.jobs.map((job) => {
            return (
                <div key={job.id}>
                    <h3>Title: {job.name}</h3>
                    <p>Description: {job.description}</p>
                    <p>Experience required: {job.experience}</p>
                </div>
            )
        })
        return (
            <div>
                {jobs}
            </div>
        )
    }
});

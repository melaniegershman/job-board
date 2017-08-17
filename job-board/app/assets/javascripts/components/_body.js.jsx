var Body = React.createClass({
    getInitialState() {
        return {jobs: []}
    },

    componentDidMount() {
        $.getJSON('/api/v1/jobs.json', (response) => {
            this.setState({jobs: response})
        });
    },

    render() {
        return (
            <div>
                <h1>Post a New Job</h1>
                <NewJob/>
                <h1>Jobs List</h1>
                <AllJobs/>
            </div>
        )
    }
});

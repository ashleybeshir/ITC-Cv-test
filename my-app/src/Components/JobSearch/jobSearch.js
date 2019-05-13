import React, { Component } from 'react';
import Pagination from '../Pagination/pagination';
import Job from '../Job/job';

class JobSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobSearch : ""
        }
    }

    searchForJob = (event) => {
        let search = event.target.value;

        this.setState({
            jobSearch : search
        });

    }

    filterJobs = () => {
        let jobList = this.props.jobList;
        if(this.state.jobSearch.trim() !== ""){
            jobList = jobList.filter(job => job.title.toLowerCase().includes(this.state.jobSearch.toLowerCase()));
        }
        return jobList;
    }

    render()
    {
        let filteredJobList = this.filterJobs();
        return(
            <div>
                <p>Search for a job:</p>
                <input placeholder="Search Jobs Here" onChange={this.searchForJob}/>
                <Pagination pageLimit={3}>
                    {filteredJobList.map((x, i) => 
                        <Job key={i} title={x.title} location={x.location} department={x.department} salary={x.salary} description={x.description} />
                    )}
                </Pagination>
            </div>
        );
    }
}

export default JobSearch;
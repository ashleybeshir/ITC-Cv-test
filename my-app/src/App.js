import React, { Component } from 'react';
import {GetJobs, AddJob} from './Services/JobsService';
import JobEditor from './Components/JobEditor/jobEditor';
import JobSearch from './Components/JobSearch/jobSearch';
import {StyledDiv} from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      jobList: [],
    };
  }

  componentDidMount = async ()=>{
    let fillerjobs = await GetJobs();

    this.setState({
      jobList: fillerjobs,
    });
  }

  addJob = async (job) => {
    await AddJob(job);
    //Not a efficient way of doing this. 
    //Better to save it on to a state that way you wont have to do api call to get jobs
    //Currently it set up to use local array instead of api so it shouldnt matter in this case
    let newJobList = await GetJobs();
    this.setState({
      jobList: newJobList,
    });
  }

  render() {
    return (
      <StyledDiv>
        <h1>Vacancies</h1>
        <p>To get a feel for what it’s like to work for us then please visit Who We Are or see what we’ve been up to within ITC News. Due to continued growth, we currently have the following vacancy:</p>
        <JobEditor addJob={this.addJob}/>
        <JobSearch jobList={this.state.jobList}/>
      </StyledDiv>
    );
  }
}

export default App;

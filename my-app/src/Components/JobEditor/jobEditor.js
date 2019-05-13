import React, { Component } from 'react';
import InputLabel from './InputLabel/inputLabel';
import {StyledForm} from './jobEditor.css';

class JobEditor extends Component {
    constructor(props) {
      super(props);

      this.state = {
          job: {
            title: "", 
            department: "",
            description: "",
            location: "",
            salary: ""
          },

          errors: {
              title: "",
              location: "",
              department: "",
              salary: "",
              description: ""
          }
      };
    }
    
    validateInput = (input) => {
        let errorState = this.state.errors;
        let jobState = this.state.job;

        let valid = true;

        if(input.value.trim() === ""){
            errorState[input.name] = `${input.name} can't be empty`;
            valid = false;
        }else{
            errorState[input.name] = "";
            jobState[input.name] = input.value;
        }

        this.setState({
            errors : errorState,
            job: jobState
        });

        return valid;
    }

    onChange = (event) => {
        this.validateInput(event.target);
    }

    handleSubmit = async (event) => 
    {
        event.preventDefault();
        let target = event.target;
        let inputs = target.querySelectorAll('input');
        let valid = true;
        inputs.forEach((x)=> {
            if(this.validateInput(x) === false){
                valid = false;
            }
        } );

        if(valid){
            console.log("once");
            await this.props.addJob(this.state.job);
        }
    }
  
    render() {
      return (
        <StyledForm onSubmit={this.handleSubmit}>
            <InputLabel labelField = "Job Title*:" name="title" defaultMessage="John" onChange={this.onChange} errors={this.state.errors.title}/>
            <InputLabel labelField = "Location*:" name="location" onChange={this.onChange} defaultMessage="Manchester, United Kingdom" errors={this.state.errors.location}/>
            <InputLabel labelField = "Department:" name="department" onChange={this.onChange} defaultMessage="Development" errors={this.state.errors.department}/>
            <InputLabel labelField = "Salary*:" name="salary" onChange={this.onChange} defaultMessage="25,000" errors={this.state.errors.salary}/>
            <InputLabel labelField = "Description*:" onChange={this.onChange} name="description" defaultMessage="Explain the role and criteria here...." errors={this.state.errors.description}/>
            <input type="submit" value="Submit" />
        </StyledForm>
      );
    }
}

export default JobEditor;

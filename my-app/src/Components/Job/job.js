import React, { Component } from 'react';
import {StyledDiv} from './job.css';

const Job = ({title, location, department, salary, description}) => {
    return(
    <StyledDiv>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{location}</p>
        <p>{salary} Annual Salary</p>
        <p>More Info</p>
    </StyledDiv>);
}

export default Job;
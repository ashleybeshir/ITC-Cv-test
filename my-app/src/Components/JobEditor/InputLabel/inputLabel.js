import React, { Component } from 'react';

const InputLabel = ({labelField, defaultMessage, errors, onChange, name}) => {
    let hasError = errors.trim() !== "" ? true : false; 

    return(
    <div>
        <p>{labelField} {hasError ? <span className="input-errors">{errors}</span>: null}</p>
        <input name={name} defaultValue={defaultMessage} onChange={onChange}></input>
    </div>);
}

export default InputLabel;
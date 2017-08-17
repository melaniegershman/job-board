import React, { Component } from 'react';

const Job = props => {
    return (
        <li>
            <h3>Title: {props.name}</h3>
            <p>Description: {props.description}</p>
            <p>Experience required: {props.experience}</p>
        </li>
    )
}

export default Job;

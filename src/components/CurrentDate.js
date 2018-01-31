import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CurrentDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return(
            <div className="currentDate">
                <div className="currentDate__title">
                    <div className="calendar-wrapper"></div>
                </div>
            </div>
        )
    }
}

export default CurrentDate;


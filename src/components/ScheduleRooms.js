import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// import Header from '../blocks/Header';
// import TimeLine from '../blocks/TimeLine';
// import TimeLine from './Schedule';

class ScheduleRooms extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="schedule__rooms">

            </div>
        )
    }
}

export default ScheduleRooms;



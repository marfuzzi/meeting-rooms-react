import React, { Component } from 'react';
import store from '../redux';
import Button from '../blocks/Button';
import moment from 'moment';

class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {count} = this.props;
        return(
            <div className="calendar">
                <div className="calendar__arrow">
                    <Button type="circle" name="arrow-left"/>
                </div>
                <div className="currentDate__title"></div>
                <div className="calendar__arrow">
                    <Button type="circle" name="arrow-left"/>
                </div>
            </div>
        )
    }
}

export default Calendar;

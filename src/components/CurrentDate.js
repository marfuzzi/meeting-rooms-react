import React, { Component } from 'react';

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


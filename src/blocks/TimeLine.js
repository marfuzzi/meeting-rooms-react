import React, { Component } from 'react';

class TimeLine extends Component {
    constructor(props) {
        super(props);
    }

    _renderTimeLine() {
        const { startHour, endHour } = this.props
        return new Array(endHour - startHour + 1).fill().map((t, i) => {
            let hour = i + 8;
            hour = (hour === 8) ? `${hour + ':00'}` : hour;
            return(<div key={i} className="timeline__hour" >{hour}</div>);
        });
    }

    render() {
        return (
            <div className="timeline">
                {this._renderTimeLine()}
            </div>
        )
    }
}

export default TimeLine;

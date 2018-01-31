import React, { Component } from 'react';
import moment from 'moment'
import { startHour, endHour } from '../utils/constants';
import store from '../redux';

class CurrentTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString(),
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(),60000);
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }

    _renderCurrentTime() {
        const selectedDate = store.getState().selectedDate;
        const position = calculatePosition(this.state.time, selectedDate, startHour, endHour);
        return (
            <div className="currentTime" style={{ ...position }} />
        );

        function calculatePosition(currentTime, currentDay, startHour, endHour) {
            const timelineStart = Number(moment(currentDay).add(7.5, 'h'));
            const timelineEnd = Number(moment(currentDay).add(23.5, 'h'));
            const current = Number(moment(currentTime));
            const columnsDiff = timelineEnd - timelineStart;
            const leftCurrDiff = current - timelineStart;
            return {
                left: `${leftCurrDiff/columnsDiff*100}%`,
            };
        }
    }

    render() {
        const selectedDate = store.getState().selectedDate;
        if (!moment(selectedDate).isSame(moment(this.state.time), 'day')) {
            return null;
        }

    return (
        <div>{this._renderCurrentTime()}</div>
    )
    }
}

export default CurrentTime;

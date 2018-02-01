import React, { Component } from 'react';
import moment from 'moment'
import { startHour, endHour } from '../utils/constants';
import store from '../redux';
import { connect } from 'react-redux';

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

    _renderCurrentTime(selectedDate) {
        const position = calculatePosition(this.state.time, selectedDate, startHour, endHour);
        return (
            <div className="currentTime" style={{ ...position }} />
        );

        function calculatePosition(currentTime, currentDay, startHour, endHour) {
            const gridStart = Number(selectedDate.startOf('day').add(7.5, 'h'));
            const gridEnd = Number(selectedDate.startOf('day').add(23.5, 'h'));
            const current = Number(moment(currentTime));
            const columnsCount = gridEnd - gridStart;
            const leftPadding = current - gridStart;
            return {
                left: `${leftPadding/columnsCount*100}%`,
            };
        }
    }

    render() {
        let selectedDate = this.props.selectedDate;
        if (!selectedDate.isSame(moment(this.state.time), 'day')) {
            return null;
        }

    return (
        <div>{this._renderCurrentTime(selectedDate)}</div>
    )
    }
}

const mapStateToProps = function(store) {
    return {
        selectedDate: store.selectedDate
    };
}

export default connect(mapStateToProps)(CurrentTime);

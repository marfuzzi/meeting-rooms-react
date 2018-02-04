import React, { Component } from 'react';
import { startHour, endHour } from '../utils/constants';
import moment from 'moment';
import { connect } from 'react-redux';
import ClickOutHandler from 'react-onclickout';

import Tooltip from './Tooltip';

class EventBusy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTooltip:false,
        }
    }

    _onClickOut = () => {
        this.setState({
            showTooltip:false
        });
    }

    _showTooltip = () => {
        this.setState({
            showTooltip:true
        });
    };

    render() {
        const { eventData } = this.props;
        const dateStart = moment(Date.parse(eventData.dateStart));
        const dateEnd = moment(Date.parse(eventData.dateEnd));
        let selectedDate = this.props.selectedDate;

        if (!selectedDate.isSame(moment(Number(dateStart)), 'day')) {
            return null;
        }

        const position = calculatePosition(dateStart, dateEnd , selectedDate, startHour, endHour);

        function calculatePosition(dateStart, dateEnd , selectedDate, startHour, endHour) {
            const gridStart = Number(selectedDate.startOf('day').add(8, 'h'));
            const gridEnd = Number(selectedDate.startOf('day').add(23, 'h'));
            const columnsCount = gridEnd - gridStart;
            let leftPadding = dateStart - gridStart;
            let rightPadding = gridEnd - dateEnd;

            if (leftPadding < 0) leftPadding = 0;
            if (rightPadding < 0) rightPadding = 0;

            return {
                left: `${leftPadding/columnsCount*100}%`,
                right: `${rightPadding/columnsCount*100}%`
            };
        }

        return (
            <ClickOutHandler onClickOut={this._onClickOut}>
                <div className="event event__busy" style={{...position}} onClick = {this._showTooltip}>
                    {this.state.showTooltip && <Tooltip eventId = {eventData.id}/>}
                </div>
            </ClickOutHandler>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        selectedDate: store.selectedDate
    };
}

export default connect(mapStateToProps)(EventBusy);

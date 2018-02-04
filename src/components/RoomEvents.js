import React, { Component } from 'react';

import EventBusy from './EventBusy'
//import Tool from './Tool'

class RoomEvents extends Component {
    _onMouseMove = (e) => {
        e.persist();
    }

    render() {
        const { eventsData } = this.props;

        return (
            <div className="room__events">
                <div className="event event__wrap">
                    <div className="event event__available" onMouseMove={this._onMouseMove}>
                    {/* <Tool /> */}
                    </div>
                    {eventsData && eventsData.map((event)=> {
                        return (
                            <EventBusy key={event.id} eventData={event}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default RoomEvents;

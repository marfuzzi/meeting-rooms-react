import React, { Component } from 'react';

import EventBusy from './EventBusy'

class RoomEvents extends Component {
    render() {
        const { eventsData, room } = this.props;

        return (
            <div className="room__events">
                <div className="event event__wrap">
                    <div className="event event__available"></div>
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

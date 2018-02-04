import React, { Component } from 'react';
import $ from 'jquery';
import EventBusy from './EventBusy'
import Tool from './Tool'

class RoomEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toolStyle:{
                display: "none",
                left: 0
            }
        };
    }

    _onMouseMove = (e) => {
        var parent = $('.event__available');
        var tool = $(parent).find('.tool');
        var parentWidth = $(parent).width();
        var toolWidth = tool.width();
        var leftBorder = e.pageX - $(parent).offset().left;
        var rightBorder = parentWidth - leftBorder;
        var leftPadding = leftBorder - toolWidth/2;
        var rightPadding = rightBorder - toolWidth/2;

        if( leftBorder < 0 || rightBorder < 0) return;
        // не выходит за границы
        if (leftPadding < 0) leftPadding = 0;
        if (rightPadding < 0) leftPadding = parentWidth-toolWidth;
        this.setState({
            toolStyle:{
                display: "block",
                left: leftPadding +"px"
            }
        });
    }

    _onMouseOut = (e) => {
        this.setState({
            toolStyle:{
                display: "none"
            }
        });
    }

    render() {
        const { eventsData } = this.props;
        return (
            <div className="room__events">
                <div className="event event__wrap">
                    <div className="event event__available" onMouseMove={this._onMouseMove} onMouseOut={this._onMouseOut}>
                        <Tool toolStyle={this.state.toolStyle}/>
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

import React from 'react';
import { withApollo } from 'react-apollo';

import { ROOMS_QUERY } from '../queries';

class Recomendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            rooms: {},
            selectedRoom: ''
        }
    }

    componentWillMount() {
        const client = this.props.client;
          client.query({
              query: ROOMS_QUERY
            }).then( (data) => {
              this.setState({
                loading: false,
                rooms: data.data.rooms
              });
        });
    }

    _onClick = (room) => {
        this.setState({
            selectedRoom: room.id
        });
        if (this.props.onClick) {
            this.props.onClick(room);
        }
    }

    render(){
        if (this.state.loading) {
            return null;
        }
        const rooms = this.state.rooms;

        return (
            rooms.map((room) => {
                let isActive = (room.id === this.state.selectedRoom);
                const classActive = (isActive) ? " input__field_meeting" : " input__field_recommendation";

                return (<div className={"input__field" + classActive}
                    key={room.id} onClick={() => this._onClick(room)} >
                    <span className="meeting-time">16:00—16:30</span>
                    <span>{room.title} · {room.floor}</span>
                </div>)
            })
        )
    }
};

export default withApollo(Recomendation);

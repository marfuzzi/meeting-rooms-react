import { reducerCall } from './index';

/**
 * Rooms reducer
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function rooms(state = {}, action) {
    return reducerCall(state, action, reducerClass);
}

/**
 * Reducer static class
 */
class reducerClass
{
    /**
     * add
     *
     * @param new_state
     * @param action
     * @returns {*}
     */
    static Add(new_state, action)
    {
        new_state.active = new_state.active ? new_state.active : {};
        new_state.active = {
            active: true,
            id: '',
            name: '',
        }
        return new_state;
    }
    /**
     * Edit
     *
     * @param new_state
     * @param action
     * @returns {*}
     */
    static EditShow(new_state, action)
    {
        new_state.active = new_state.active ? new_state.active : {};
        new_state.active = {
            active: true,
            id: action.props.interval.id,
            start: action.props.interval.start,
            end: action.props.interval.end,
            theme: action.props.interval.theme,
            room_id:action.props.room_id,
            room_name:action.props.room_name
        }
        return new_state;
    }
    /**
     * InfoShow
     *
     * @param new_state
     * @param action
     * @returns {*}
     */
    static InfoShow(new_state, action)
    {
        new_state.active = new_state.active ? new_state.active : {};
        new_state.active = {
            active: true,
            id: action.props.interval.id,
            start: action.props.interval.start,
            end: action.props.interval.end,
            theme: action.props.interval.theme,
            room_id:action.props.room_id,
            room_name:action.props.room_name
        }
        return new_state;
    }

    // /**
    //  * Show
    //  *
    //  * @param new_state
    //  * @param action
    //  * @returns {*}
    //  */
    // static handleClick(new_state, action)
    // {
    //     new_state.active = new_state.active ? new_state.active : {};
    //     new_state.active.active = {
    //         active: true,
    //         id: action.id,
    //         name: action.name,
    //     }
    //     return new_state;
    // }
    /**
     * Show the delete prompt
     *
     * @param new_state
     * @param action
     * @returns {*}
     */
    static modalDeleteShow(new_state, action)
    {
        new_state.modal = new_state.modal ? new_state.modal : {};
        new_state.modal = {
            show: true,
            id: action.id,
            room_id: action.room_id,
        }
        return new_state;
    }

    /**
     * Hide the delete prompt
     *
     * @param new_state
     * @param action
     * @returns {*}
     */
    static modalDeleteHide(new_state, action)
    {
        new_state.modal = {
            show: false,
            id:0,
            room_id: 0
        }
        return new_state;

    }

    /**
     * Delete a room
     *
     * @param new_state
     * @param action
     * @returns {*}
     */
    static delete(new_state, action)
    {
        for (const room of new_state.list) {
            if (room.id == action.room_id) {
                room.meeting.forEach(function(item, i, arr) {
                    if(item.id == action.id) {
                        room.meeting[i].end = "";
                        room.meeting[i].start = "";
                        room.meeting[i].theme = "";
                    }
                })
            }
        }

        return new_state;

    }

     /**
     * Add a user
     *
     * @param new_state
     * @param action
     * @returns {*}
     */
    static add(new_state, action)
    {
        // generate a new id
        const id = Number((Math.random() * 1000000).toPrecision(6));

        // add the user
        new_state.list.push({
            id: id,
            name: action.name,
            capacity: action.capacity,
        });
        new_state.active = {
            active: true,
            id: '',
            name: '',
        }
        return new_state;
    }

    /**
     * Edit a user
     *
     * @param new_state
     * @param action
     * @returns {*}
     */
    static edit(new_state, action)
    {
        for (const room of new_state.list) {
            if (room.id == action.room_id) {
                room.meeting.forEach(function(item, i, arr) {
                    if(item.id == action.id) {
                        room.meeting[i].end = action.end;
                        room.meeting[i].start = action.start;
                        room.meeting[i].theme = action.theme;
                    }
                })
            }
        }

        new_state.active = {
            active: true,
            id: '',
            name: '',
        }
        return new_state;
    }
}

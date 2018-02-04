import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true
        };
    }

    componentWillReceiveProps(props){
        let eventData = (props.title && props.date && props.startTime && props.endTime
                        && props.users.length && props.room && props.formValid);
        this.setState({
            isDisabled: !eventData
        })
    }


    render() {
        let isDisabled = this.state.isDisabled;
        const classDisabled = (isDisabled) ? " disabled" : " ";

        return (
            <Link to="/#popup">
                <button className={"button" + classDisabled}  disabled={isDisabled}>
                    Создать встречу
                </button>
            </Link>
        )
    }
}

export default CreateEvent;

import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

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
            <a href="/#popup">
                <button className={"button" + classDisabled}  disabled={isDisabled}>
                    Создать встречу
                </button>
            </a>
        )
    }
}

export default CreateEvent;


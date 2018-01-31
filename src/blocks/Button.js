import React, { Component } from 'react';

import Icon from './Icon';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type, name} = this.props;
        return (
            <div className={'button-' + type}>
                <Icon name={name}/>
            </div>
        )
    }
}

export default Button;

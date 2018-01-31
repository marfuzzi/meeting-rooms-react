import React, { Component } from 'react';

import Button from './Button';

class Input extends Component {
    constructor(props) {
        super(props);

    }

    _renderButton() {
        const {button} = this.props;
        if(button)
            return (
                <Button
                    type="icon"
                    name={button}/>
            );
    }

    _renderInput() {
        const {name, placeholder, value} = this.props;
        return (
            <input className="input__field" placeholder={placeholder} value={value} id={name} name={name}/>
        );
    }

    render() {
        const { input, name, block } = this.props;
        return (
            <div>
                <label htmlFor={name} className="input__label">{block}</label>
                <div className={input}>
                    {this._renderButton()}
                    {this._renderInput()}
                </div>
            </div>
        )
    }
}

export default Input;

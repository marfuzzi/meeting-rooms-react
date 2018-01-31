import React, { Component } from 'react';

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props;
        const divStyle = {
            background: 'url('+'../static/images/'+name+'.svg'+') no-repeat center'
        };
        return (
            <div className="icon" style={divStyle}></div>
        )
    }
}

export default Icon;

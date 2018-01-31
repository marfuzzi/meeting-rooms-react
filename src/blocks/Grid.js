import React, { Component } from 'react';
import { startHour, endHour } from '../utils/constants';

import CurrentTime from '../components/CurrentTime';

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    _renderGrid() {
        return new Array(endHour - startHour + 1).fill().map((t, i) => {
            return (
                <div key={i} className="grid" >
                    <div className="grid__line"></div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="schedule__grid">
                {this._renderGrid()}
                <CurrentTime />
            </div>
        )
    }
}

export default Grid;

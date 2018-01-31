import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Header from '../blocks/Header';

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonCreate:false
        };
    }
    render() {
        return(
            <div className="wrapper__event">
                <Header  buttonCreate={this.state.buttonCreate}/>
                <main className="event-page">
                    <div className="event-page__content">
                        <div className="event-page__title">
                            {/* block event-page__title */}
                            <a href="/">На главную</a>
                            {/* +button('circle', 'close') */}
                        </div>
                        <div className="event-page__row">
                            <div className="event-page__ceil">
                                {/* block event-page__theme */}
                            </div>
                            <div className="event-page__ceil event-page__date">
                                <div className="event-page__day">
                                {/* block event-page__day */}
                                </div>
                                <div className="event-page__timeInterval">
                                    <div className="event-page__time">
                                    {/* block event-page__timeStart */}
                                    </div>
                                    <div className="dash">-</div>
                                    <div className="event-page__time">
                                    {/* block event-page__timeStart */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="event-page__row">
                            <div className="event-page__ceil">
                            {/* block event-page__users */}
                                <div className="event-page__members">
                                {/* block event-page__members */}
                                </div>
                            </div>
                            <div className="event-page__ceil">
                            {/* block event-page__meeting */}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default CreatePage;

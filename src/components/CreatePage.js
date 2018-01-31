import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Header from '../blocks/Header';
import Input from '../blocks/Input';
import Button from '../blocks/Button';

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonCreate:false,
            createPage:true
        };
    }
    render() {
        return(
            <div className="wrapper__event">
                <Header  buttonCreate={this.state.buttonCreate}/>
                <main className="event-page">
                    <div className="event-page__content">
                        <div className="event-page__title">
                            <div className="h1"> Новая встреча</div>
                            <a href="/">
                                <Button
                                    type="circle"
                                    name="close"
                                />
                            </a>
                        </div>
                        <div className="event-page__row">
                            <div className="event-page__ceil">
                                <Input
                                    input = "input"
                                    name = "theme"
                                    placeholder = "О чем будем говорить"
                                    value = ""
                                    button = ""
                                    block = "Тема"
                                />
                            </div>
                            <div className="event-page__ceil event-page__date">
                                <div className="event-page__day">
                                    <Input
                                        input = "select"
                                        name = "date"
                                        placeholder = "14 декабря 2017"
                                        value = ""
                                        button = "calendar"
                                        block = "Дата"
                                    />
                                </div>
                                <div className="event-page__timeInterval">
                                    <div className="event-page__time">
                                        <Input
                                            input = "select"
                                            name = "start"
                                            placeholder = "08:00"
                                            value = ""
                                            button = ""
                                            block = "Начало"
                                        />
                                    </div>
                                    <div className="dash">—</div>
                                    <div className="event-page__time">
                                        <Input
                                            input = "select"
                                            name = "end"
                                            placeholder = "23:00"
                                            value = ""
                                            button = ""
                                            block = "Конец"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="event-page__row">
                            <div className="event-page__ceil">
                                <Input
                                    input = "select"
                                    name = "users"
                                    placeholder = "Например, Тор Одинович"
                                    value = ""
                                    button = ""
                                    block = "Участники"
                                />
                                <div className="event-page__members">
                                {/* block event-page__members */}
                                </div>
                            </div>
                            <div className="event-page__ceil">
                                <label className="input__label"> Рекомендованные переговорки</label>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default CreatePage;

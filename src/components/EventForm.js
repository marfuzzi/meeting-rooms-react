import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import ClickOutHandler from 'react-onclickout';

import Header from '../blocks/Header';
import Button from '../blocks/Button';
import Input from './Input';
import Calendar from './Calendar';
import UserOptions from './UserOptions';
import Recomendation from './Recomendation';
import CreateEvent from './CreateEvent';

class EventForm extends Component {
    constructor(props) {
        super(props);

        let title, date, startTime, endTime, room;

        this.state = {
            buttonCreate:false,

            showCalendar:false,
            showStartTime:false,
            showEndTime:false,
            showSelectedUser: false,

            titleValid: false,
            dateValid: false,
            timeValid: false,
            formValid: false,
            usersValid: false,

            title: title || '',
            date: date || '',
            startTime: startTime || '',
            endTime: endTime || '',
            users: [],
            room: room,
            formErrors: {title: '', date: '', time: '', users: ''}
        };
    }

    _onClickOut = (elem) => {
        this.setState({
            [elem]: false
        });
    }

    _showOptions = (elem) => {
        this.setState({
            [elem]: true
        });
    };

    _onChange = (name, value) => {
        this.setState({
            [name] : value
        }, () => { this.validateField(name, value) });
    };

    _userOptionClick = (user) => {
        const users = [...this.state.users, user];
        this.setState({
          users: users
        }, () => { this.validateField("users") })
    };

    _deleteUser = (selectedUser) => {
        const users = this.state.users.filter((user) =>
            user.id !== selectedUser.id
        );
        this.setState({
            users: users
        }, () => { this.validateField("users") })
    };

    _addRoom = (room) => {
        this.setState({
            room: room
        })
    };

    _renderTimeOptions(type) {
        let time = [];

        for (let t = 8; t < 23; t++) {
            if (t < 10) t='0'+t;
            ['00','15','30','45'].forEach((key) => {
                time.push(t +':' + key)
            })
        }
        time.push('23:00')

        return time.map((value, i) => {
            return (
                <div key={i} className="select__option" onClick={() => this._onChange(type, value)}>
                    <span>{value}</span>
                </div>
            );
        });
    }

    _renderSelectedUsers() {
        let users = this.state.users;

        return users.map((user)=>
            <div className="member" key={user.id}>
                <div className="user-avatar" style={{backgroundImage: user.avatarUrl ? 'url('+ user.avatarUrl +')' :'url(../static/images/avatar/1.png'}}/>
                <span className="user-name">{user.login}</span>
                <Button type="circle" name="close" onClick={() => this._deleteUser(user)}/>
            </div>
        )
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let dateValid = this.state.dateValid;
        let timeValid = this.state.timeValid;
        let usersValid = this.state.usersValid;
        let startTime = this.state.startTime;
        let endTime = this.state.endTime;
        let users = this.state.users;
        let start, end;

        switch(fieldName) {
            case 'title':
                titleValid = value.length <= 10;
                fieldValidationErrors.title = titleValid ? '': 'Длинное название темы';
            break;
            case 'date':
                dateValid = (/([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})/).test(value) && value.length === 10;
                fieldValidationErrors.date = dateValid ? '' : 'Дата введена неверно';
            break;
            case 'startTime':
            case 'endTime':
                if (endTime === '' || startTime === '') break;
                start = moment().utcOffset(0).set({"hours": startTime.slice(0, 2), "minutes": startTime.slice(3, 5)});
                end = moment().utcOffset(0).set({"hours": endTime.slice(0, 2), "minutes": endTime.slice(3, 5)});
                timeValid = start < end;
                fieldValidationErrors.time = timeValid ? '' : '!';
            break;
            case 'users':
                usersValid = users.length > 1;
                fieldValidationErrors.users = usersValid ? '': 'Должно быть не меньше двух участников';
            break;
            default:
            break;
        };

        this.setState({
            formErrors: fieldValidationErrors,
            titleValid: titleValid,
            dateValid: dateValid,
            timeValid: timeValid,
            usersValid: usersValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.titleValid && this.state.dateValid && this.state.timeValid && this.state.usersValid});
        }

    render() {
        const day = moment().format('DD.MM.YYYY');
        let title = (this.props.typeForm === "create") ? "Новая встреча" : "Редактирование встречи";
        let labelRooms = (this.props.typeForm === "create") ? "Рекомендованные переговорки" : "Ваша переговорка";
        return(
            <div className="wrapper_event">
                <Header buttonCreate={this.state.buttonCreate} />
                <main className="event-page">
                    <div className="event-page__content">
                        <div className="event-page__title">
                            <div className="h1">{title}</div>
                            <Link to="/">
                                <Button
                                    type="circle"
                                    name="close"
                                />
                            </Link>
                        </div>
                        <div className="event-page__row">
                            <div className="event-page__ceil">
                                <Input
                                    formErrors={this.state.formErrors.title}
                                    onChange={this._onChange}
                                    value={this.state.title}
                                    input="input"
                                    name="title"
                                    placeholder="О чем будем говорить"
                                    button=""
                                    block="Тема"
                                />
                            </div>
                            <div className="event-page__ceil event-page__date">
                                <ClickOutHandler onClickOut={() => this._onClickOut('showCalendar')} >
                                    <div className="event-page__day" onClick={() => this._showOptions('showCalendar')}>
                                        <Input
                                            formErrors={this.state.formErrors.date}
                                            onChange={this._onChange}
                                            value={this.state.date}
                                            input="select"
                                            name="date"
                                            placeholder={day}
                                            button="calendar"
                                            block="Дата"
                                        />
                                        <div className="select__options select__options_calendar">
                                            {this.state.showCalendar && <Calendar count={1} onClick={this._onChange}/> }
                                        </div>
                                    </div>
                                </ClickOutHandler>
                                <div className="event-page__timeInterval">
                                <ClickOutHandler onClickOut={() => this._onClickOut('showStartTime')} >
                                    <div className="event-page__time" onClick={() => this._showOptions('showStartTime')}>
                                        <Input
                                            formErrors={this.state.formErrors.time}
                                            input="select"
                                            name="startTime"
                                            value={this.state.startTime}
                                            placeholder="08:00"
                                            button=""
                                            block="Начало"
                                        />
                                        <div className="select__options">
                                            {this.state.showStartTime && this._renderTimeOptions("startTime")}
                                        </div>
                                    </div>
                                </ClickOutHandler>
                                <div className="dash">—</div>
                                <ClickOutHandler onClickOut={() => this._onClickOut('showEndTime')}>
                                    <div className="event-page__time" onClick={() => this._showOptions('showEndTime')}>
                                        <Input
                                            formErrors={this.state.formErrors.time}
                                            input="select"
                                            name="endTime"
                                            value={this.state.endTime}startTime
                                            placeholder="23:00"
                                            button=""
                                            block="Конец"
                                        />
                                        <div className="select__options">
                                            {this.state.showEndTime && this._renderTimeOptions("endTime")}
                                        </div>
                                    </div>
                                </ClickOutHandler>
                                </div>
                            </div>
                        </div>
                        <div className="event-page__row">
                            <div className="event-page__ceil" onClick={() => this._showOptions('showSelectedUser')}>
                            <ClickOutHandler onClickOut={() => this._onClickOut('showSelectedUser')}>
                                <Input
                                    formErrors={this.state.formErrors.users}
                                    input="select"
                                    name="users"
                                    placeholder="Например, Тор Одинович"
                                    button=""
                                    block="Участники"
                                />
                                {this.state.showSelectedUser && <UserOptions onClick = {this._userOptionClick} selectedUsers = {this.state.users}/>}
                            </ClickOutHandler>
                                <div className="event-page__members">
                                    {this._renderSelectedUsers()}
                                </div>
                            </div>
                            <div className="event-page__ceil">
                            <label className="input__label">{labelRooms}</label>
                            {this.props.typeForm === "create" &&
                                <Recomendation onClick = {this._addRoom} room= {this.state.room}/>
                            }
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="footer">
                    <Link to="/">
                        <button className="button button_cancel">Отмена</button>
                    </Link>
                    {this.props.typeForm === "create" &&
                        <CreateEvent
                            title={this.state.title}
                            date={this.state.date}
                            startTime={this.state.startTime}
                            endTime={this.state.endTime}
                            users={this.state.users}
                            room={this.state.room}
                            formValid={this.state.formValid}
                        />
                    }
                </footer>
            </div>
        )
    }
}
const mapStateToProps = function(store) {
    return {
        selectedDate: store.selectedDate
    };
}

export default connect(mapStateToProps)(EventForm);
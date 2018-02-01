import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import store from '../redux';
import { connect } from 'react-redux';

import Button from '../blocks/Button';
import Calendar from './Calendar';

class CurrentDate extends Component {

    render() {
        let { selectedDate } = this.props;
            selectedDate = selectedDate.isSame(moment(), 'day')
              ? `${selectedDate.format('D MMM', 'ru')} · Сегодня`
              : selectedDate.format('D MMMM', 'ru')
        return(
            <div className="currentDate">
                <div onClick={this.props.beforeDay}>
                    <Button type="circle" name="arrow-left"/>
                </div>
                <div className="currentDate__title">{selectedDate}
                    <div className="calendar-wrapper">
                        {/* <Calendar count='3'/> */}
                    </div>
                </div>
                <div onClick={this.props.afterDay}>
                    <Button type="circle" name="arrow-right"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        selectedDate: store.selectedDate
    };
  }
  const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        beforeDay: function() {
        dispatch({type:"BEFORE_DATE"});
      },
        afterDay: function() {
            dispatch({type:"AFTER_DATE"});
        }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CurrentDate);

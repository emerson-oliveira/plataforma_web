import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker} from 'react-dates';

import moment from 'moment';


class DateRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate : null,
      endDate : null
    }
    moment.locale(navigator.language)
  }
  render() {
    return (
      <DateRangePicker
        startDatePlaceholderText ={'Data Inicial'}
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        endDatePlaceholderText ={'Data Final'}
        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      />
      )
    }
  }

export default DateRange

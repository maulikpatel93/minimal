// locales/guIN.js
import { getPickersLocalization } from '@mui/x-date-pickers';

// Mapping of months and weekdays in Gujarati
const guINPickers = {
  // Calendar navigation
  previousMonth: 'અગાઉનો મહિનો',
  nextMonth: 'આગામી મહિનો',

  // View navigation
  openPreviousView: 'અગાઉના વિહંગાવલોકન ખોલો',
  openNextView: 'આગામી વિહંગાવલોકન ખોલો',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === 'year'
      ? 'વર્ષના વિહંગાવલોકન પર સ્વિચ કરો'
      : 'કેલેન્ડરના વિહંગાવલોકન પર સ્વિચ કરો',

  // DateRange placeholders
  start: 'પ્રારંભ',
  end: 'અંત',

  // Action bar
  cancelButtonLabel: 'રદ કરો',
  clearButtonLabel: 'સાફ કરો',
  okButtonLabel: 'બરાબર',
  todayButtonLabel: 'આજ',

  // Toolbar titles
  datePickerToolbarTitle: 'તારીખ પસંદ કરો',
  dateTimePickerToolbarTitle: 'તારીખ અને સમય પસંદ કરો',
  timePickerToolbarTitle: 'સમય પસંદ કરો',
  dateRangePickerToolbarTitle: 'તારીખ શ્રેણી પસંદ કરો',

  // Clock labels
  clockLabelText: (view, time, adapter) =>
    `${view} પસંદ કરો. ${time === null ? 'સમય પસંદ કરેલ નથી' : `પસંદ કરેલો સમય ${adapter.format(time, 'fullTime')}`} છે`,
  hoursClockNumberText: (hours) => `${hours} કલાક`,
  minutesClockNumberText: (minutes) => `${minutes} મિનિટ`,
  secondsClockNumberText: (seconds) => `${seconds} સેકંડ`,

  // Open picker labels
  openDatePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `તમે પસંદ કરેલી તારીખ ${utils.format(value, 'fullDate')} છે`
      : 'તારીખ પસંદ કરો',
  openTimePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `તમે પસંદ કરેલો સમય ${utils.format(value, 'fullTime')} છે`
      : 'સમય પસંદ કરો',

  // Table labels
  timeTableLabel: 'સમય પસંદ કરો',
  dateTableLabel: 'તારીખ પસંદ કરો',
};

export const guIN = getPickersLocalization(guINPickers);

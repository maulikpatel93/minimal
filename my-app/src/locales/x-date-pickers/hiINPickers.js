// locales/hiIN.js

// Mapping of months and weekdays in Hindi
export const hiINPickers = {
  // Calendar navigation
  previousMonth: 'पिछला महीना',
  nextMonth: 'अगला महीना',

  // View navigation
  openPreviousView: 'पिछला दृश्य खोलें',
  openNextView: 'अगला दृश्य खोलें',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === 'year'
      ? 'वर्ष दृश्य पर स्विच करें'
      : 'कैलेंडर दृश्य पर स्विच करें',

  // DateRange placeholders
  start: 'प्रारंभ',
  end: 'अंत',

  // Action bar
  cancelButtonLabel: 'रद्द करें',
  clearButtonLabel: 'साफ करें',
  okButtonLabel: 'ठीक',
  todayButtonLabel: 'आज',

  // Toolbar titles
  datePickerToolbarTitle: 'तारीख चुनें',
  dateTimePickerToolbarTitle: 'तारीख और समय चुनें',
  timePickerToolbarTitle: 'समय चुनें',
  dateRangePickerToolbarTitle: 'तारीख श्रेणी चुनें',

  // Clock labels
  clockLabelText: (view, time, adapter) =>
    `${view} चुनें. ${time === null ? 'समय नहीं चुना गया' : `चुना गया समय ${adapter.format(time, 'fullTime')} है`}`,
  hoursClockNumberText: (hours) => `${hours} घंटे`,
  minutesClockNumberText: (minutes) => `${minutes} मिनट`,
  secondsClockNumberText: (seconds) => `${seconds} सेकंड`,

  // Open picker labels
  openDatePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `आपने चुनी हुई तारीख ${utils.format(value, 'fullDate')} है`
      : 'तारीख चुनें',
  openTimePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `आपने चुना हुआ समय ${utils.format(value, 'fullTime')} है`
      : 'समय चुनें',

  // Table labels
  timeTableLabel: 'समय चुनें',
  dateTableLabel: 'तारीख चुनें',
};

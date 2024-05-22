// locales/gu/index.js
import buildLocalizeFn from 'date-fns/locale/_lib/buildLocalizeFn';
import buildMatchPatternFn from 'date-fns/locale/_lib/buildMatchPatternFn';
import buildMatchFn from 'date-fns/locale/_lib/buildMatchFn';

const eraValues = {
  narrow: ['ઈસપૂ', 'ઇસ'],
  abbreviated: ['ઈસપૂ', 'ઇસ'],
  wide: ['ઈસવીસન પહેલાં', 'ઈસવીસન']
};

const quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['પ્રથમ ત્રિમાસિક', 'દ્વિતીય ત્રિમાસિક', 'તૃતીય ત્રિમાસિક', 'ચોથું ત્રિમાસિક']
};

const monthValues = {
  narrow: ['જ', 'ફ', 'મા', 'એ', 'મે', 'જુ', 'જ્', 'આ', 'સ', 'ઓ', 'ન', 'ડિ'],
  abbreviated: ['જાન્યુ', 'ફેબ્રુ', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઓગ', 'સપ્ટે', 'ઓક્ટો', 'નવે', 'ડિસે'],
  wide: ['જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન', 'જુલાઈ', 'ઓગસ્ટ', 'સપ્ટેમ્બર', 'ઓક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર']
};

const dayValues = {
  narrow: ['ર', 'સો', 'મં', 'બુ', 'ગુ', 'શુ', 'શ'],
  short: ['રવિ', 'સોમ', 'મંગળ', 'બુધ', 'ગુરુ', 'શુક્ર', 'શનિ'],
  abbreviated: ['રવિ', 'સોમ', 'મંગળ', 'બુધ', 'ગુરુ', 'શુક્ર', 'શનિ'],
  wide: ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર']
};

const dayPeriodValues = {
  narrow: {
    am: 'સાંજ',
    pm: 'સવાર',
    midnight: 'મધ્યરાત',
    noon: 'બપોર',
    morning: 'સવાર',
    afternoon: 'બપોર',
    evening: 'સાંજ',
    night: 'રાત'
  },
  abbreviated: {
    am: 'સાંજ',
    pm: 'સવાર',
    midnight: 'મધ્યરાત',
    noon: 'બપોર',
    morning: 'સવાર',
    afternoon: 'બપોર',
    evening: 'સાંજ',
    night: 'રાત'
  },
  wide: {
    am: 'સાંજ',
    pm: 'સવાર',
    midnight: 'મધ્યરાત',
    noon: 'બપોર',
    morning: 'સવાર',
    afternoon: 'બપોર',
    evening: 'સાંજ',
    night: 'રાત'
  }
};

const formattingDayPeriodValues = {
  narrow: {
    am: 'સાંજ',
    pm: 'સવાર',
    midnight: 'મધ્યરાત',
    noon: 'બપોર',
    morning: 'સવાર',
    afternoon: 'બપોર',
    evening: 'સાંજ',
    night: 'રાત'
  },
  abbreviated: {
    am: 'સાંજ',
    pm: 'સવાર',
    midnight: 'મધ્યરાત',
    noon: 'બપોર',
    morning: 'સવાર',
    afternoon: 'બપોર',
    evening: 'સાંજ',
    night: 'રાત'
  },
  wide: {
    am: 'સાંજ',
    pm: 'સવાર',
    midnight: 'મધ્યરાત',
    noon: 'બપોર',
    morning: 'સવાર',
    afternoon: 'બપોર',
    evening: 'સાંજ',
    night: 'રાત'
  }
};

const matchEraPatterns = {
  narrow: /^(ઈસપૂ|ઇસ)/i,
  abbreviated: /^(ઈસપૂ|ઇસ)/i,
  wide: /^(ઈસવીસન પહેલાં|ઈસવીસન)/i
};
const parseEraPatterns = {
  any: [/^(ઈસપૂ|ઇસ)/i]
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^(પ્રથમ|દ્વિતીય|તૃતીય|ચોથું) ત્રિમાસિક/i
};
const parseQuarterPatterns = {
  any: [/(1|પ્રથમ)/i, /(2|દ્વિતીય)/i, /(3|તૃતીય)/i, /(4|ચોથું)/i]
};

const matchMonthPatterns = {
  narrow: /^[જફમએમેજૉઆસઓનડ]/i,
  abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઓગ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,
  wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i
};
const parseMonthPatterns = {
  narrow: [/^જ/i, /^ફ/i, /^મ/i, /^એ/i, /^મે/i, /^જુ/i, /^જૅ/i, /^આ/i, /^સ/i, /^ઓ/i, /^ન/i, /^ડિ/i],
  abbreviated: [/^જાન્યુ/i, /^ફેબ્રુ/i, /^માર્ચ/i, /^એપ્રિલ/i, /^મે/i, /^જૂન/i, /^જુલાઈ/i, /^ઓગ/i, /^સપ્ટે/i, /^ઓક્ટો/i, /^નવે/i, /^ડિસે/i],
  wide: [/^જાન્યુઆરી/i, /^ફેબ્રુઆરી/i, /^માર્ચ/i, /^એપ્રિલ/i, /^મે/i, /^જૂન/i, /^જુલાઈ/i, /^ઓગસ્ટ/i, /^સપ્ટેમ્બર/i, /^ઓક્ટોબર/i, /^નવેમ્બર/i, /^ડિસેમ્બર/i]
};

const matchDayPatterns = {
  narrow: /^[રસમબુગુશ]/i,
  short: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,
  abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,
  wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i
};
const parseDayPatterns = {
  narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i],
  any: [/^રવિ/i, /^સોમ/i, /^મંગળ/i, /^બુધ/i, /^ગુરુ/i, /^શુક્ર/i, /^શનિ/i]
};

const matchDayPeriodPatterns = {
  any: /^(સાંજ|સવાર|મધ્યરાત|બપોર|સવાર|બપોર|સાંજ|રાત)/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^સાંજ/i,
    pm: /^સવાર/i,
    midnight: /^મધ્યરાત/i,
    noon: /^બપોર/i,
    morning: /સવાર/i,
    afternoon: /બપોર/i,
    evening: /સાંજ/i,
    night: /રાત/i
  }
};

const guINAdapter = {
  code: 'gu-IN',
  formatDistance: (token, count, options) => {
    const formatDistanceLocale = {
      lessThanXSeconds: {
        one: 'કમ સે કમ એક સેકંડ',
        other: 'કમ સે કમ {{count}} સેકંડ'
      },
      xSeconds: {
        one: '1 સેકંડ',
        other: '{{count}} સેકંડ'
      },
      halfAMinute: 'અડધી મિનિટ',
      lessThanXMinutes: {
        one: 'કમ સે કમ એક મિનિટ',
        other: 'કમ સે કમ {{count}} મિનિટ'
      },
      xMinutes: {
        one: '1 મિનિટ',
        other: '{{count}} મિનિટ'
      },
      aboutXHours: {
        one: 'લગભગ 1 કલાક',
        other: 'લગભગ {{count}} કલાક'
      },
      xHours: {
        one: '1 કલાક',
        other: '{{count}} કલાક'
      },
      xDays: {
        one: '1 દિવસ',
        other: '{{count}} દિવસ'
      },
      aboutXMonths: {
        one: 'લગભગ 1 મહિનો',
        other: 'લગભગ {{count}} મહિનો'
      },
      xMonths: {
        one: '1 મહિનો',
        other: '{{count}} મહિનો'
      },
      aboutXYears: {
        one: 'લગભગ 1 વર્ષ',
        other: 'લગભગ {{count}} વર્ષ'
      },
      xYears: {
        one: '1 વર્ષ',
        other: '{{count}} વર્ષ'
      },
      overXYears: {
        one: '1 વર્ષ થી વધુ',
        other: '{{count}} વર્ષ થી વધુ'
      },
      almostXYears: {
        one: 'લગભગ 1 વર્ષ',
        other: 'લગભગ {{count}} વર્ષ'
      }
    };

    let result;
    const tokenValue = formatDistanceLocale[token];

    if (typeof tokenValue === 'string') {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace('{{count}}', count);
    }

    if (options && options.addSuffix) {
      if (options.comparison > 0) {
        return result + ' માં';
      } else {
        return result + ' પહેલા';
      }
    }

    return result;
  },
  formatLong: {
    date: () => 'd MMMM yyyy',
    time: () => 'h:mm:ss a',
    dateTime: () => 'd MMMM yyyy h:mm:ss a'
  },
  formatRelative: () => {
    const formatRelativeLocale = {
      lastWeek: "'ગયા' eeee 'at' p",
      yesterday: "'ગઇ કાલે at' p",
      today: "'આજે at' p",
      tomorrow: "'કાલે at' p",
      nextWeek: "eeee 'at' p",
      other: 'P'
    };

    return (token) => formatRelativeLocale[token];
  },
  localize: {
    era: buildLocalizeFn(eraValues, 'wide'),
    quarter: buildLocalizeFn(quarterValues, 'wide'),
    month: buildLocalizeFn(monthValues, 'wide'),
    day: buildLocalizeFn(dayValues, 'wide'),
    dayPeriod: buildLocalizeFn(dayPeriodValues, 'wide'),
  },
  match: {
    era: buildMatchFn(matchEraPatterns, parseEraPatterns),
    quarter: buildMatchFn(matchQuarterPatterns, parseQuarterPatterns),
    month: buildMatchFn(matchMonthPatterns, parseMonthPatterns),
    day: buildMatchFn(matchDayPatterns, parseDayPatterns),
    dayPeriod: buildMatchFn(matchDayPeriodPatterns, parseDayPeriodPatterns),
  },
  options: {
    weekStartsOn: 0, // Sunday
    firstWeekContainsDate: 1
  }
};

export default guINAdapter;

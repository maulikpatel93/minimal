// locales/guINCore.js
export const guINCore = {
    props: {
      MuiBreadcrumbs: {
        expandText: 'પાથ બતાવો',
      },
      MuiTablePagination: {
        labelRowsPerPage: 'પ્રતિ પૃષ્ઠ પંક્તિઓ:',
        labelDisplayedRows: ({ from, to, count }) =>
          `${from}-${to} માંથી ${count !== -1 ? count : `More than ${to}`}`,
        nextIconButtonText: 'આગળના પૃષ્ઠ',
        backIconButtonText: 'પાછળના પૃષ્ઠ',
      },
      MuiRating: {
        getLabelText: (value) => `${value} તારાઓ`,
        emptyLabelText: 'ખાલી',
      },
      MuiAutocomplete: {
        clearText: 'સાફ કરો',
        closeText: 'બંધ કરો',
        loadingText: 'લોડ થઈ રહ્યું છે...',
        noOptionsText: 'કોઈ વિકલ્પો નથી',
        openText: 'ખોલો',
      },
      MuiAlert: {
        closeText: 'બંધ',
      },
      MuiPagination: {
        'aria-label': 'પૃષ્ઠ દિશાનિર્દેશ',
        first: 'પ્રથમ',
        last: 'અંતિમ',
        next: 'આગળ',
        previous: 'પાછળ',
        more: 'વધુ',
      },
    },
  };
  
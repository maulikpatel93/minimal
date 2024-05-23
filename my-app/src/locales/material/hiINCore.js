// locales/hiINCore.js
export const hiINCore = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'पथ दिखाएं',
    },
    MuiTablePagination: {
      labelRowsPerPage: 'प्रति पृष्ठ पंक्तियाँ:',
      labelDisplayedRows: ({ from, to, count }) =>
        `${from}-${to} में से ${count !== -1 ? count : `More than ${to}`}`,
      nextIconButtonText: 'अगला पृष्ठ',
      backIconButtonText: 'पिछला पृष्ठ',
    },
    MuiRating: {
      getLabelText: (value) => `${value} तारे`,
      emptyLabelText: 'खाली',
    },
    MuiAutocomplete: {
      clearText: 'साफ करें',
      closeText: 'बंद करें',
      loadingText: 'लोड हो रहा है...',
      noOptionsText: 'कोई विकल्प नहीं',
      openText: 'खोलें',
    },
    MuiAlert: {
      closeText: 'बंद',
    },
    MuiPagination: {
      'aria-label': 'पृष्ठ दिशा-निर्देश',
      first: 'पहला',
      last: 'अंतिम',
      next: 'आगे',
      previous: 'पीछे',
      more: 'और',
    },
  },
};

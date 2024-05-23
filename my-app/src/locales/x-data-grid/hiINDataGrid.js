// locales/hiINDataGrid.js
export const hiINDataGrid = {
  noRowsLabel: 'कोई पंक्तियाँ नहीं',
  noResultsOverlayLabel: 'कोई परिणाम नहीं मिला',

  // Density selector toolbar button text
  toolbarDensity: 'घनत्व',
  toolbarDensityLabel: 'घनत्व',
  toolbarDensityCompact: 'संकुचित',
  toolbarDensityStandard: 'मानक',
  toolbarDensityComfortable: 'आरामदायक',

  // Columns selector toolbar button text
  toolbarColumns: 'कॉलम्स',
  toolbarColumnsLabel: 'कॉलम्स चुनें',

  // Filters toolbar button text
  toolbarFilters: 'फ़िल्टर',
  toolbarFiltersLabel: 'फ़िल्टर दिखाएँ',
  toolbarFiltersTooltipHide: 'फ़िल्टर छिपाएँ',
  toolbarFiltersTooltipShow: 'फ़िल्टर दिखाएँ',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} सक्रिय फ़िल्टर` : `${count} सक्रिय फ़िल्टर`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'खोजें...',
  toolbarQuickFilterLabel: 'खोज',
  toolbarQuickFilterDeleteIconLabel: 'साफ़ करें',

  // Export selector toolbar button text
  toolbarExport: 'निर्यात',
  toolbarExportLabel: 'निर्यात',
  toolbarExportCSV: 'CSV के रूप में डाउनलोड करें',
  toolbarExportPrint: 'प्रिंट',
  toolbarExportExcel: 'Excel के रूप में डाउनलोड करें',

  // Columns management text
  columnsManagementSearchTitle: 'खोज',
  columnsManagementNoColumns: 'कोई कॉलम्स नहीं',
  columnsManagementShowHideAllText: 'सभी दिखाएँ/छिपाएँ',
  columnsManagementReset: 'रीसेट',

  // Filter panel text
  filterPanelAddFilter: 'फ़िल्टर जोड़ें',
  filterPanelRemoveAll: 'सभी हटाएँ',
  filterPanelDeleteIconLabel: 'हटाएँ',
  filterPanelLogicOperator: 'तार्किक ऑपरेटर',
  filterPanelOperator: 'ऑपरेटर',
  filterPanelOperatorAnd: 'और',
  filterPanelOperatorOr: 'या',
  filterPanelColumns: 'कॉलम्स',
  filterPanelInputLabel: 'मूल्य',
  filterPanelInputPlaceholder: 'फ़िल्टर मूल्य',

  // Filter operators text
  filterOperatorContains: 'शामिल है',
  filterOperatorEquals: 'बराबर है',
  filterOperatorStartsWith: 'से शुरू होता है',
  filterOperatorEndsWith: 'से समाप्त होता है',
  filterOperatorIs: 'है',
  filterOperatorNot: 'नहीं है',
  filterOperatorAfter: 'के बाद है',
  filterOperatorOnOrAfter: 'पर या बाद है',
  filterOperatorBefore: 'के पहले है',
  filterOperatorOnOrBefore: 'पर या पहले है',
  filterOperatorIsEmpty: 'खाली है',
  filterOperatorIsNotEmpty: 'खाली नहीं है',
  filterOperatorIsAnyOf: 'में से कोई भी है',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'शामिल है',
  headerFilterOperatorEquals: 'बराबर है',
  headerFilterOperatorStartsWith: 'से शुरू होता है',
  headerFilterOperatorEndsWith: 'से समाप्त होता है',
  headerFilterOperatorIs: 'है',
  headerFilterOperatorNot: 'नहीं है',
  headerFilterOperatorAfter: 'के बाद है',
  headerFilterOperatorOnOrAfter: 'पर या बाद है',
  headerFilterOperatorBefore: 'के पहले है',
  headerFilterOperatorOnOrBefore: 'पर या पहले है',
  headerFilterOperatorIsEmpty: 'खाली है',
  headerFilterOperatorIsNotEmpty: 'खाली नहीं है',
  headerFilterOperatorIsAnyOf: 'में से कोई भी है',
  'headerFilterOperator=': 'बराबर है',
  'headerFilterOperator!=': 'बराबर नहीं है',
  'headerFilterOperator>': 'से अधिक है',
  'headerFilterOperator>=': 'से अधिक या बराबर है',
  'headerFilterOperator<': 'से कम है',
  'headerFilterOperator<=': 'से कम या बराबर है',

  // Filter values text
  filterValueAny: 'कोई भी',
  filterValueTrue: 'सच',
  filterValueFalse: 'झूठ',

  // Column menu text
  columnMenuLabel: 'मेनू',
  columnMenuShowColumns: 'कॉलम्स दिखाएँ',
  columnMenuManageColumns: 'कॉलम्स प्रबंधित करें',
  columnMenuFilter: 'फ़िल्टर',
  columnMenuHideColumn: 'कॉलम छिपाएँ',
  columnMenuUnsort: 'क्रमबद्ध न करें',
  columnMenuSortAsc: 'आरोही क्रम में क्रमबद्ध करें',
  columnMenuSortDesc: 'अवरोही क्रम में क्रमबद्ध करें',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} सक्रिय फ़िल्टर` : `${count} सक्रिय फ़िल्टर`,
  columnHeaderFiltersLabel: 'फ़िल्टर दिखाएँ',
  columnHeaderSortIconLabel: 'क्रमबद्ध करें',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} पंक्तियाँ चुनी गई हैं`
      : `${count.toLocaleString()} पंक्ति चुनी गई है`,

  // Total row amount footer text
  footerTotalRows: 'कुल पंक्तियाँ:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} में से ${totalCount.toLocaleString()} दिखाई गई हैं`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'चेकबॉक्स चयन',
  checkboxSelectionSelectAllRows: 'सभी पंक्तियाँ चुनें',
  checkboxSelectionUnselectAllRows: 'सभी पंक्तियाँ अचयनित करें',
  checkboxSelectionSelectRow: 'पंक्ति चुनें',
  checkboxSelectionUnselectRow: 'पंक्ति अचयनित करें',

  // Boolean cell text
  booleanCellTrueLabel: 'हाँ',
  booleanCellFalseLabel: 'नहीं',

  // Actions cell more text
  actionsCellMore: 'अधिक',

  // Column pinning text
  pinToLeft: 'बाएँ पिन करें',
  pinToRight: 'दाएँ पिन करें',
  unpin: 'पिन हटाएँ',

  // Tree Data
  treeDataGroupingHeaderName: 'समूह',
  treeDataExpand: 'बच्चों को देखें',
  treeDataCollapse: 'बच्चों को छुपाएँ',

  // Grouping columns
  groupingColumnHeaderName: 'समूह',
  groupColumn: (name) => `${name} के अनुसार समूहित करें`,
  unGroupColumn: (name) => `${name} के अनुसार समूहित करना बंद करें`,

  // Master/detail
  detailPanelToggle: 'विवरण पैनल टॉगल करें',
  expandDetailPanel: 'विस्तार करें',
  collapseDetailPanel: 'संकुचित करें',

  // Row reordering text
  rowReorderingHeaderName: 'पंक्ति पुनः व्यवस्थित करना',

  // Aggregation
  aggregationMenuItemHeader: 'संचयन',
  aggregationFunctionLabelSum: 'योग',
  aggregationFunctionLabelAvg: 'औसत',
  aggregationFunctionLabelMin: 'न्यूनतम',
  aggregationFunctionLabelMax: 'अधिकतम',
  aggregationFunctionLabelSize: 'आकार',
};

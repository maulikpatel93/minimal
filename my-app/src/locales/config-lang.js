import merge from 'lodash/merge';
// date fns
import {
  fr as frFRAdapter,
  vi as viVNAdapter,
  enUS as enUSAdapter,
  zhCN as zhCNAdapter,
  arSA as arSAAdapter,
  hi as hiINAdapter,
  gu as guINAdapter,
} from 'date-fns/locale';

// date pickers (MUI)
import {
  enUS as enUSDate,
  frFR as frFRDate,
  viVN as viVNDate,
  zhCN as zhCNDate,
} from '@mui/x-date-pickers/locales';
// core (MUI)
import {
  enUS as enUSCore,
  frFR as frFRCore,
  viVN as viVNCore,
  zhCN as zhCNCore,
  arSA as arSACore,
} from '@mui/material/locale';
// data grid (MUI)
import {
  enUS as enUSDataGrid,
  frFR as frFRDataGrid,
  viVN as viVNDataGrid,
  zhCN as zhCNDataGrid,
  arSD as arSDDataGrid,
} from '@mui/x-data-grid';

// import gu as guInAdapter from './date-fns/locale/gu';

import { guINPickers } from '../locales/x-date-pickers/guINPickers';  // Custom date picker locale
import { guINCore } from '../locales/material/guINCore';  // Custom core locale
import { guINDataGrid } from '../locales/x-data-grid/guINDataGrid';  // Custom data grid locale
import { hiINDataGrid } from './x-data-grid/hiINDataGrid';
import { hiINPickers } from './x-date-pickers/hiINPickers';
import { hiINCore } from './material/hiINCore';

// PLEASE REMOVE `LOCAL STORAGE` WHEN YOU CHANGE SETTINGS.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English',
    value: 'en',
    systemValue: merge(enUSDate, enUSDataGrid, enUSCore),
    adapterLocale: enUSAdapter,
    icon: 'flagpack:us',
    numberFormat: {
      code: 'en-US',
      currency: 'USD',
    },
  },
  {
    label: 'Hindi',
    value: 'hi',
    systemValue: merge(hiINPickers, hiINDataGrid, hiINCore),
    adapterLocale: hiINAdapter,
    icon: 'flagpack:in',
    numberFormat: {
      code: 'hi-IN',
      currency: 'INR',
    },
  },
  {
    label: 'Gujarati',
    value: 'gu',
    systemValue: merge(guINPickers, guINDataGrid, guINCore),
    adapterLocale: guINAdapter,
    icon: 'flagpack:in',
    numberFormat: {
      code: 'gu-IN',
      currency: 'INR',
    },
  },
  // {
  //   label: 'French',
  //   value: 'fr',
  //   systemValue: merge(frFRDate, frFRDataGrid, frFRCore),
  //   adapterLocale: frFRAdapter,
  //   icon: 'flagpack:fr',
  //   numberFormat: {
  //     code: 'fr-Fr',
  //     currency: 'EUR',
  //   },
  // },
  // {
  //   label: 'Vietnamese',
  //   value: 'vi',
  //   systemValue: merge(viVNDate, viVNDataGrid, viVNCore),
  //   adapterLocale: viVNAdapter,
  //   icon: 'flagpack:vn',
  //   numberFormat: {
  //     code: 'vi-VN',
  //     currency: 'VND',
  //   },
  // },
  // {
  //   label: 'Chinese',
  //   value: 'cn',
  //   systemValue: merge(zhCNDate, zhCNDataGrid, zhCNCore),
  //   adapterLocale: zhCNAdapter,
  //   icon: 'flagpack:cn',
  //   numberFormat: {
  //     code: 'zh-CN',
  //     currency: 'CNY',
  //   },
  // },
  // {
  //   label: 'Arabic',
  //   value: 'ar',
  //   systemValue: merge(arSDDataGrid, arSACore),
  //   adapterLocale: arSAAdapter,
  //   icon: 'flagpack:sa',
  //   numberFormat: {
  //     code: 'ar',
  //     currency: 'AED',
  //   },
  // },
];

export const defaultLang = allLangs[0]; // English

// GET MORE COUNTRY FLAGS
// https://icon-sets.iconify.design/flagpack/
// https://www.dropbox.com/sh/nec1vwswr9lqbh9/AAB9ufC8iccxvtWi3rzZvndLa?dl=0

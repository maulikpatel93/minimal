"use client";

import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { palette } from "./palette";
import { customShadows } from "./custom-shadows";
import { shadows } from "./shadows";
import { typography } from "./typography";
import * as locales from '@mui/material/locale';
// const roboto = Roboto({
//     weight: ["300", "400", "500", "700"],
//     style: ["normal", "italic"],
//     subsets: ["latin"],
// });
const settings = {
    themeMode: 'dark', // 'light' | 'dark'
    themeDirection: 'ltr', //  'rtl' | 'ltr'
    themeContrast: 'default', // 'default' | 'bold'
    themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
    themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
    themeStretch: false,
}
// const locale = "enUS";
export default function ThemeRegistry({ children }) {
    const [locale, setLocale] = React.useState('zhCN');
    // const { currentLang } = useLocales();
    // const settings = useSettingsContext();

    // const presets = createPresets(settings.themeColorPresets);
    // const contrast = createContrast(settings.themeContrast, settings.themeMode);

    const memoizedValue = useMemo(
        () => ({
            palette: {
                ...palette(settings.themeMode),
                // ...presets.palette,
                // ...contrast.palette,
            },
            customShadows: {
                ...customShadows(settings.themeMode),
                // ...presets.customShadows,
            },
            direction: settings.themeDirection,
            shadows: shadows(settings.themeMode),
            shape: { borderRadius: 8 },
            typography,
        }),
        [
            settings.themeMode,
            settings.themeDirection,
            // presets.palette,
            // presets.customShadows,
            // contrast.palette,
        ]
    );

    const theme = createTheme(memoizedValue);

    // theme.components = componentsOverrides(theme);

    const themeWithLocale = useMemo(
        () => createTheme(theme, locale),
        [locale, theme]
    );

    return (
        <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
            <MUIThemeProvider theme={themeWithLocale}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}


MUIThemeProvider.propTypes = {
    children: PropTypes.node,
};

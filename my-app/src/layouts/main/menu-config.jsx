/* eslint-disable import/no-unresolved */

import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------


const ICON_SIZE = {
    width: 22,
    height: 22,
};

const menuConfig = [
    {
        title: 'Home',
        icon: <Iconify icon="eva:home-fill" {...ICON_SIZE} />,
        path: '/',
    },
    {
        title: 'Documentation',
        icon: <Iconify icon="eva:book-open-fill" {...ICON_SIZE} />,
        path: '/documentation',
    },
];

export default menuConfig;

/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

// @mui
import { Box } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

//
import { varContainer } from '.';

// ----------------------------------------------------------------------

MotionViewport.propTypes = {
    children: PropTypes.node.isRequired,
    disableAnimatedMobile: PropTypes.bool,
};

export default function MotionViewport({ children, disableAnimatedMobile = true, ...other }) {
    const isDesktop = useResponsive('up', 'sm');

    if (!isDesktop && disableAnimatedMobile) {
        return <Box {...other}>{children}</Box>;
    }

    return (
        <Box
            component={m.div}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={varContainer()}
            {...other}
        >
            {children}
        </Box>
    );
}

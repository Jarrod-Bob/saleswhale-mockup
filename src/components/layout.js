import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import SideNav from './SideNav/SideNav';
// import MiniDrawer from './components/Sidebar/components/MiniDrawer'

const useStyles = makeStyles(theme => ({
    root: {
        // marginBottom: '-20px',
        height: '100%',
        // [theme.breakpoints.up('sm')]: {
        //   paddingTop: 64
        // }
        // width: '100%',
        boxSizing: "border-box"
    },
    shiftContent: {
        paddingLeft: 80
    },
    content: {
        height: '100%',
        marginBottom: '-20px',

    },
    background: {
        background: '#F1F4F8'
    }
}));

const Main = props => {
    const { children } = props;

    const classes = useStyles();

    return (
        // <>
        <div
            className={clsx({
                [classes.root]: true,
                [classes.shiftContent]: true
            }, classes.background)}
        >
            <SideNav />
            <main className={classes.content}>
                {children}
            </main>
        </div>
        // </>
    );
};

Main.propTypes = {
    children: PropTypes.node
};

export default Main;

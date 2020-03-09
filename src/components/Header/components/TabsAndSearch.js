import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, TextField, InputAdornment, Input, InputLabel } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';

import "../../../GlobalCss.css"


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0083E3"
        }
    }
})

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > div': {
            maxWidth: 50,
            width: '100%',
            backgroundColor: '#0083E3',

        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        width:"100px",
        color: '#000',
        fontWeight: "700",
        fontSize: "18px",
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))(props => <Tab {...props} />);

export default function TabsAndSearch(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.changeTab(newValue);
    };

    const handleSearch = (e) => {
        props.handleSearch(e.target.value);
    }

    return (
        // <MuiThemeProvider theme={theme}>
        <Paper square elevation={0}>
            <Grid>
                <Grid item xs="12" style={{ display: "flex", boxShadow:"none" }}>
                    <span>
                        <StyledTabs textColor="primary" value={value} onChange={handleChange}>
                            <StyledTab label="All" />
                            <StyledTab label="Favorites" />
                            <StyledTab label="Archived" />
                        </StyledTabs></span>
                    <span style={{ marginLeft: "auto", marginTop: "15px", paddingRight: "50px" }}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <svg style={{top:"0.125em", position:"relative"}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7415 10.3275L15.707 14.293L14.293 15.707L10.3275 11.7415C9.2525 12.529 7.9315 13 6.5 13C2.916 13 0 10.084 0 6.5C0 2.916 2.916 0 6.5 0C10.084 0 13 2.916 13 6.5C13 7.932 12.529 9.2525 11.7415 10.3275ZM6.5 1C3.4675 1 1 3.4675 1 6.5C1 9.5325 3.4675 12 6.5 12C9.5325 12 12 9.5325 12 6.5C12 3.4675 9.5325 1 6.5 1Z" fill="#999999" />
                                </svg>
                            </Grid>
                            <Grid item>
                                <input onChange={handleSearch} style={{ border: "0", fontSize: "16px", margin: "auto" }} type="text" placeholder="Search team name ..." />
                            </Grid>
                        </Grid>
                    </span>
                </Grid>
            </Grid>
        </Paper>
        // </MuiThemeProvider>

    );
}
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Box } from '@material-ui/core'
import NavBar from './NavBar/NavBar'
import Header from './Header/Header'
import Content from './Content/Content'
import ActivityFeed from './ActivityFeed/ActivityFeed'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#0083E3"
        }
    }
})

export default class SalesWhale extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 0,
            currentNav: null,
            open: false,
            search: null,
            archivedObj: null,
            
        }
        this.changeTab = this.changeTab.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.addArchived = this.addArchived.bind(this);
    }

    static propTypes = {
        prop: PropTypes
    }

    changeTab = (value) => {
        this.setState({ tab: value });
    }

    handleSearch = (name) => {
        this.setState({
            search: name
        })
    }

    handleOpen = (e) => {
        this.setState({
            open: true
        })
    }

    
    handleClose = (e) => {
        this.setState({
            open: false
        })
    }

    componentDidUpdate(prevProps) {
        if(this.state.open !== prevProps.open) {
            this.render();
        }
    }

    addArchived = (obj) => {
        this.setState({
            archivedObj: obj,
        })
    }


    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div style={{height:"100vh", maxHeight:"1440px"}}>
                    <Grid container spacing={0}>
                        <Grid item xs="12">
                        <Grid item xs="12" style={{ padding: "0 0" }}>
                            <NavBar />
                        </Grid>
                        <Grid item xs="12" style={{ padding: "0 0" }}>
                            <Header handleSearch={this.handleSearch} handleOpen={this.handleOpen} changeTab={this.changeTab} />
                        </Grid>
                        </Grid>
                        
                        
                        <Box style={{ margin: "40px 40px 0px 40px", width:"100%"}}>
                            <Grid style={{}} container spacing={3}>
                                <Grid item md="9" xs="12">
                                    <Content addArchived={this.addArchived} search={this.state.search} handleClose={this.handleClose} open={this.state.open} tab={this.state.tab} />
                                </Grid>
                                <Grid item md="3" xs="12">
                                    <ActivityFeed archivedObj={this.state.archivedObj} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}

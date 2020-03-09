import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Grid, Dialog, DialogContent, TextField, DialogTitle, Button, DialogActions, Slide } from '@material-ui/core';
import TeamCard from './components/TeamCard';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "teams": [
                {
                    "id": 1,
                    "name": "Axa",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/966/twitter/wataten-avatar.jpg?1546777130",
                    "description": "AXA is a French multinational insurance firm headquartered in the 8th random place and random time etc",
                    "campaigns_count": 20,
                    "leads_count": 1500,
                    "is_favorited": true,
                    "is_archived": false,
                    "created_at": "28 July 2018"
                },
                {
                    "id": 2,
                    "name": "Indeed - US",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
                    "description": "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
                    "campaigns_count": 15,
                    "leads_count": 7130,
                    "is_favorited": false,
                    "is_archived": false,
                    "created_at": "15 October 2018"
                },
                {
                    "id": 3,
                    "name": "Indeed - EU",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870",
                    "description": "Indeed is an American worldwide employment-related search engine for job stuff and other random stuff",
                    "campaigns_count": 18,
                    "leads_count": 3500,
                    "is_favorited": false,
                    "is_archived": false,
                    "created_at": "1 October 2018"
                },
                {
                    "id": 4,
                    "name": "Workday - US",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
                    "description": "Workday Inc is an on demand financial management and human capital management something とかなんとか",
                    "campaigns_count": 16,
                    "leads_count": 2000,
                    "is_favorited": false,
                    "is_archived": false,
                    "created_at": "4 August 2017"
                },
                {
                    "id": 5,
                    "name": "Workday - AU",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/908/twitter/tensura-avatar.png?1538236957",
                    "description": "Workday Inc is an on demand financial management and human capital management something とかなんとか",
                    "campaigns_count": 12,
                    "leads_count": 1500,
                    "is_favorited": false,
                    "is_archived": false,
                    "created_at": "3 August 2017"
                },
                {
                    "id": 6,
                    "name": "Time",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/979/twitter/5-hanayome-avatar.jpg?1547281143",
                    "description": "Time is an American weekly news magazine and new website published in New York and like a bunch of other places and stuff",
                    "campaigns_count": 13,
                    "leads_count": 10000,
                    "is_favorited": true,
                    "is_archived": false,
                    "created_at": "4 November 2017"
                },
                {
                    "id": 7,
                    "name": "Zendesk",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/924/twitter/uzamaid-avatar.png?1538475352",
                    "description": "Zendesk Inc is a customer service software company headquartered in San Francisco and they do things I guess",
                    "campaigns_count": 17,
                    "leads_count": 1200,
                    "is_favorited": true,
                    "is_archived": false,
                    "created_at": "15 August 2017"
                },
                {
                    "id": 8,
                    "name": "Uber",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/965/twitter/kemono-friends-2-avatar.jpg?1546501240",
                    "description": "Uber is a transportation network company headquartered in San Francisco, California. They drive people around I guess",
                    "campaigns_count": 10,
                    "leads_count": 3200,
                    "is_favorited": false,
                    "is_archived": true,
                    "archived_on": "28 October 2017"
                },
                {
                    "id": 9,
                    "name": "Grab",
                    "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655",
                    "description": "GrabTaxi Holdings Pte Ltd is a Singapore-based technology company that offers rides and other stuff but mostly rides to people",
                    "campaigns_count": 23,
                    "leads_count": 2000,
                    "is_favorited": false,
                    "is_archived": true,
                    "archived_on": "28 October 2017"
                }
            ],
            newEvent: {
                name: "",
                description: "",
            },
        }
        this.toggleFav = this.toggleFav.bind(this)
        this.toggleArchived = this.toggleArchived.bind(this)
        this.handleClose = this.handleClose.bind(this)

    }

    static propTypes = {
        prop: PropTypes,
    }

    toggleFav = (id) => {
        const { teams } = { ...this.state };
        const currState = teams;
        const fav = currState[id - 1].is_favorited;
        currState[id - 1].is_favorited = !fav;
        this.setState({ teams: currState });
    }

    toggleArchived = (id) => {
        const { teams } = { ...this.state };
        const currState = teams;
        const isArchived = currState[id - 1].is_archived;
        currState[id - 1].is_archived = !isArchived;

        let action;
        if(!isArchived){
            action = "archived"; 
        } else {
            action = "unarchived";
        }

        let obj = {
            "id": -1,
            "person": {
                "id": 1,
                "name": "Julie",
                "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
            },
            "action": action,
            "target": currState[id - 1].name,
            "created_at": "now",
        }
        this.props.addArchived(obj);
        this.setState({ teams: currState });
    }

    componentWillReceiveProps(prevProps) {
        if (this.props.open !== prevProps.open) {
            this.render();
        }
    }

    handleClose = (e) => {
        this.props.handleClose();
    }

    onSubmit = (e) => {
        this.props.handleClose();
        const { teams } = { ...this.state };
        const currState = teams;
        const id = currState.length;
        currState[id] = {
            "id": id + 1,
            "name": this.state.newEvent.name,
            "image": "https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/895/twitter/revue-starlight-a.png?1531195655",
            "description": this.state.newEvent.description,
            "campaigns_count": 0,
            "leads_count": 0,
            "is_favorited": false,
            "is_archived": false,
            "archived_on": "28 October 2017",
            "created_at": "13 August 2017"
        }
        this.setState({ ...this.state, teams: currState });
        this.setState({
            ...this.state,
            newEvent: {
                name: null,
                description: null,
            }
        })
    }

    onChange = (e) => {
        const target = e.target
        const name = target.name
        this.setState({
            ...this.state,
            newEvent: {
                ...this.state.newEvent,
                [name]: e.target.value
            }
        })
    }



    render() {
        let teamsToRender;
        if(this.props.search == null) {
            teamsToRender = this.state["teams"];
        } else {
            teamsToRender = this.state["teams"].filter(team => team.name.includes(this.props.search));
        }
        return (
            <div>
                <Paper square style={{ height:"calc(100vh - 300px)", display:"flex",flexDirection:"column", marginBottom: "0px", paddingBottom: "0px", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.05)" }}>
                    <Typography style={{ fontSize: "18px", padding: "20px 30px 20px 35px", display: "flex" }}>
                        <span>
                            {this.props.tab == 0 ? <strong>All Teams</strong>
                                : this.props.tab == 1
                                    ? <strong>Favorited Teams</strong>
                                    : this.props.tab == 2
                                        ? <strong>Archived Teams</strong>
                                        : null}
                        </span>
                        <span style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto", fontSize: "14px", color: "#7F7F7F" }}>Showing&nbsp;
                        {this.props.tab == 0 ? this.state.teams.length
                                : this.props.tab == 1
                                    ? this.state.teams.filter(team => team.is_favorited == true).length
                                    : this.props.tab == 2
                                        ? this.state.teams.filter(team => team.is_archived == true).length
                                        : null} out of&nbsp;
                        {this.props.tab == 0 ? this.state.teams.length
                                : this.props.tab == 1
                                    ? this.state.teams.filter(team => team.is_favorited == true).length
                                    : this.props.tab == 2
                                        ? this.state.teams.filter(team => team.is_archived == true).length
                                        : null} teams</span>
                    </Typography>
                    <Divider />
                    <div style={{ border:"none", flexGrow:"0",height:"100%", overflowY:"auto"}}>
                    <div style={{  margin: "30px" }}>
                        <Grid container spacing={2}>                        
                            {teamsToRender.map(team => (
                                this.props.tab == 0 ?
                                    <Grid item md="4" sm="6" xs="12">
                                        <TeamCard team={team} toggleArchived={this.toggleArchived} toggleFav={this.toggleFav} />
                                    </Grid>
                                    :
                                    this.props.tab == 1 && team.is_favorited == true ?
                                        <Grid item md="4" sm="6" xs="12">
                                            <TeamCard team={team} toggleArchived={this.toggleArchived} toggleFav={this.toggleFav} />
                                        </Grid>
                                        :
                                        this.props.tab == 2 && team.is_archived == true ?
                                            <Grid item md="4" sm="6" xs="12">
                                                <TeamCard team={team} toggleArchived={this.toggleArchived} toggleFav={this.toggleFav} />
                                            </Grid>
                                            : null
                            ))}

                        </Grid>

                    </div>
                    </div>

                </Paper>
                <Dialog
                    open={this.props.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-slide-title">{"New Team Creation"}</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            id="name"
                            label="Company"
                            type="text"
                            fullWidth
                            onChange={this.onChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="description"
                            id="name"
                            label="Description"
                            type="text"
                            fullWidth
                            onChange={this.onChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.onSubmit} color="primary">
                            Create
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

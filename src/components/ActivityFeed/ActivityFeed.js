import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MateItem from './components/MateItem';
import { useMediaQuery, withStyles } from '@material-ui/core';

const styles = (theme => ({
    root: {
      [theme.breakpoints.down('lg')]: {
        overflowY:"auto",
      },
    },
    ht: {
      height:"100%",  
    },
  }));
  

class ActivityFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "activities": [
                {
                    "id": 1,
                    "person": {
                        "id": 1,
                        "name": "Julie",
                        "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
                    },
                    "action": "increased_quota",
                    "target": "Indeed - US",
                    "created_at": "2 hours ago"
                },
                {
                    "id": 2,
                    "person": {
                        "id": 2,
                        "name": "Emily",
                        "avatar": "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
                    },
                    "action": "added_leads",
                    "target": "Linkedin",
                    "created_at": "4 hours ago"
                },
                {
                    "id": 3,
                    "person": {
                        "id": 2,
                        "name": "Emily",
                        "avatar": "https://d1bb37ap2qun5z.cloudfront.net/sites/default_user_avatars/000/000/002/display/nicdesu.jpg?1394032656"
                    },
                    "action": "archived_team",
                    "target": "Uber",
                    "created_at": "6 hours ago"
                },
                {
                    "id": 4,
                    "person": {
                        "id": 1,
                        "name": "Julie",
                        "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
                    },
                    "action": "archived_team",
                    "target": "Grab",
                    "created_at": "6 hours ago"
                },
                {
                    "id": 5,
                    "person": {
                        "id": 1,
                        "name": "Julie",
                        "avatar": "https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/003/display/tamako200x200b.png?1393742139"
                    },
                    "action": "added_leads",
                    "target": "Workday - AU",
                    "created_at": "2 hours ago"
                }
            ],
        }
    }

    static propTypes = {
        prop: PropTypes
    }

    addActivity(obj) {
        if(obj != null) {
            let id = Math.random()*1000000;
            obj.id = id;
            if(!this.state.activities.find(element => element.id == obj.id)) {
                this.setState({
                    activities: [
                        obj,
                        ...this.state.activities,
                    ]
                })
            }
        } 
    }



    render() {
        let activitiesArr;
        this.addActivity(this.props.archivedObj);
        activitiesArr = this.state["activities"];
        const { classes } = this.props;
        return (
            <div>
                <Paper square style={{ display:"flex",flexDirection:"column", height:"calc(100vh - 300px)", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.05)" }}>
                    <Typography style={{ padding: "20px", fontSize: "18px" }}>
                        Activity
                    </Typography>
                    <Divider />
                    <div className={classes.root} style={{flexGrow:"0"}}>
                    <div className={classes.ht} style={{padding:"20px 0"}}>
                        {activitiesArr.map(activity => (
                            <MateItem activity={activity} />
                        ))}</div>

                    </div>
                    
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(ActivityFeed);

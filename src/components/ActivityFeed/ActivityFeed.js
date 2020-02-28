import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MateItem from './components/MateItem';

export default class ActivityFeed extends Component {
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

    render() {
        return (
            <div>
                <Paper square style={{ boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.05)" }}>
                    <Typography style={{ padding: "20px", fontSize: "18px" }}>
                        Activity
                    </Typography>
                    <Divider />
                    <div style={{padding:"20px 0"}}>
                        {this.state["activities"].map(activity => (
                            <MateItem activity={activity} />
                        ))}</div>

                </Paper>
            </div>
        )
    }
}

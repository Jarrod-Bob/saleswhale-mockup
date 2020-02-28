import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';


const wStyles = theme => ({
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5)
    }
})

const StyledRating = withStyles({
    iconFilled: {
      color: '#F8CE43',
    },
    iconHover: {
      color: '#F8CE43',
    },
  })(Rating);

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.toggleFav = this.toggleFav.bind(this)
    }
    static propTypes = {
        prop: PropTypes
    }

    toggleFav = (id) => () => {
        this.props.toggleFav(id);
    }

    render() {
        const { team, classes } = this.props;
        return (

            <div>
                {team.is_archived === false ?
                    <Card elevation="0" variant="outlined" style={{ fontFamily: "" }}>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <Avatar variant="rounded" className={classes.large} style={{ padding: "0px", marginRight: "10px", }} src={team.image} />
                            <div style={{ fontStyle: "semibold", fontSize: "16px", width: "100%", color: "#444444" }}>
                                <strong>{team.name}</strong>
                                <br />
                                <div style={{ fontStyle: "regular", fontSize: "13px", color: "#565656", opacity: "0.5" }}>Created {team.created_at}</div>
                            </div>
                            {!team.is_favorited ?
                                <StyledRating onChange={this.toggleFav(team.id)} emptyIcon={<StarBorderRoundedIcon />} icon={<StarRoundedIcon fontSize="inherit" style={{color:"#F8CE43"}}/>} defaultValue={0} max={1} />
                                : <StyledRating onChange={this.toggleFav(team.id)} icon={<StarRoundedIcon fontSize="inherit" style={{color:"#F8CE43"}}/>} defaultValue={1} max={1} />}
                        </div>
                        <div style={{ display: "-webkit-box", fontStyle: "regular", fontSize: "14px", color: "#565656", margin: "20px", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{team.description}</div>
                        <Divider />
                        <div style={{ margin: "20px", fontSize: "13px", opacity: "0.45", color:"#000000" }}>
                            <span><svg style={{ top:"0.125em", position:"relative",margin:"0px 6px 0px 6px"}} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0H12.5C12.7765 0 13 0.223502 13 0.500004V9.00008C13 9.27658 12.7765 9.50008 12.5 9.50008H7.188L3.329 12.8766C3.18 13.0066 2.969 13.0356 2.7935 12.9551C2.6145 12.8741 2.5 12.6966 2.5 12.5001V9.50008H0.5C0.2235 9.50008 0 9.27658 0 9.00008V0.500004C0 0.223502 0.2235 0 0.5 0ZM14 4.00004H15.5C15.776 4.00004 16 4.22404 16 4.50004V12.0001C16 12.2761 15.776 12.5001 15.5 12.5001H14V14.5001C14 14.6876 13.8955 14.8591 13.729 14.9446C13.559 15.0311 13.36 15.0146 13.2095 14.9066L9.84 12.5001H5.278L7.564 10.5001H13C13.5525 10.5001 14 10.0526 14 9.50009V4.00004Z" fill="black" />
                            </svg></span>
                            <span>{team.campaigns_count} Campaigns </span> <span><svg style={{ top:"0.125em", position:"relative", margin:"0px 6px 0px 6px"}} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 4.6185 6.6895 6.5 5 6.5C3.3105 6.5 2 4.6185 2 3C2 1.3455 3.3455 0 5 0C6.6545 0 8 1.3455 8 3ZM10 2H15.5C15.776 2 16 2.2235 16 2.5C16 2.7765 15.776 3 15.5 3H10C9.724 3 9.5 2.7765 9.5 2.5C9.5 2.2235 9.724 2 10 2ZM10 5H15.5C15.776 5 16 5.2235 16 5.5C16 5.7765 15.776 6 15.5 6H10C9.724 6 9.5 5.7765 9.5 5.5C9.5 5.2235 9.724 5 10 5ZM15.5 8H12.5C12.224 8 12 8.2235 12 8.5C12 8.7765 12.224 9 12.5 9H15.5C15.776 9 16 8.7765 16 8.5C16 8.2235 15.776 8 15.5 8ZM12.5 11H15.5C15.776 11 16 11.2235 16 11.5C16 11.7765 15.776 12 15.5 12H12.5C12.224 12 12 11.7765 12 11.5C12 11.2235 12.224 11 12.5 11ZM8.2045 7.9865C6.0045 7.3355 3.929 7.348 1.7915 7.9805C0.7195 8.298 0 9.2615 0 10.379V13.5C0 13.7765 0.224 14 0.5 14H9.5C9.776 14 10 13.7765 10 13.5V10.386C10 9.268 9.2785 8.3035 8.2045 7.9865Z" fill="black" />
                            </svg></span>
                            <span>{team.leads_count} Leads</span>
                    </div>
                    </Card>
                    :
                    <Card elevation="0" variant="outlined" style={{ fontFamily: "", backgroundColor: "#EBEEF2" }}>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <Avatar style={{ padding: "0px", marginRight: "10px", }} variant="rounded" src={team.image} />
                            <div style={{ fontStyle: "semibold", fontSize: "16px", width: "100%", color: "#444444" }}>
                                <strong>{team.name}</strong>
                                <br />

                                <div style={{ fontStyle: "regular", fontSize: "13px", color: "#565656", opacity: "0.5" }}>Archived on {team.archived_on}</div>
                            </div>
                        </div>
                        <div style={{ display: "-webkit-box", fontStyle: "regular", fontSize: "14px", color: "#565656", margin: "20px", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{team.description}</div>
                        <Divider />
                        <div style={{ margin: "20px", fontSize: "13px", opacity: "0.45" }}>
                        <svg style={{margin:"0px 6px 0px 0px"}} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0H12.5C12.7765 0 13 0.223502 13 0.500004V9.00008C13 9.27658 12.7765 9.50008 12.5 9.50008H7.188L3.329 12.8766C3.18 13.0066 2.969 13.0356 2.7935 12.9551C2.6145 12.8741 2.5 12.6966 2.5 12.5001V9.50008H0.5C0.2235 9.50008 0 9.27658 0 9.00008V0.500004C0 0.223502 0.2235 0 0.5 0ZM14 4.00004H15.5C15.776 4.00004 16 4.22404 16 4.50004V12.0001C16 12.2761 15.776 12.5001 15.5 12.5001H14V14.5001C14 14.6876 13.8955 14.8591 13.729 14.9446C13.559 15.0311 13.36 15.0146 13.2095 14.9066L9.84 12.5001H5.278L7.564 10.5001H13C13.5525 10.5001 14 10.0526 14 9.50009V4.00004Z" fill="black" />
                            </svg>
                            {team.campaigns_count} Campaign <svg style={{margin:"0px 6px 0px 6px"}} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 4.6185 6.6895 6.5 5 6.5C3.3105 6.5 2 4.6185 2 3C2 1.3455 3.3455 0 5 0C6.6545 0 8 1.3455 8 3ZM10 2H15.5C15.776 2 16 2.2235 16 2.5C16 2.7765 15.776 3 15.5 3H10C9.724 3 9.5 2.7765 9.5 2.5C9.5 2.2235 9.724 2 10 2ZM10 5H15.5C15.776 5 16 5.2235 16 5.5C16 5.7765 15.776 6 15.5 6H10C9.724 6 9.5 5.7765 9.5 5.5C9.5 5.2235 9.724 5 10 5ZM15.5 8H12.5C12.224 8 12 8.2235 12 8.5C12 8.7765 12.224 9 12.5 9H15.5C15.776 9 16 8.7765 16 8.5C16 8.2235 15.776 8 15.5 8ZM12.5 11H15.5C15.776 11 16 11.2235 16 11.5C16 11.7765 15.776 12 15.5 12H12.5C12.224 12 12 11.7765 12 11.5C12 11.2235 12.224 11 12.5 11ZM8.2045 7.9865C6.0045 7.3355 3.929 7.348 1.7915 7.9805C0.7195 8.298 0 9.2615 0 10.379V13.5C0 13.7765 0.224 14 0.5 14H9.5C9.776 14 10 13.7765 10 13.5V10.386C10 9.268 9.2785 8.3035 8.2045 7.9865Z" fill="black" />
                            </svg>

                            {team.leads_count} Leads
                        </div>
                    </Card>
                }
            </div>

        )
    }
}

export default withStyles(wStyles)(TeamCard);
